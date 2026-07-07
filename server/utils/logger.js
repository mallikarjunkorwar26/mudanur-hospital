import fs from "node:fs";
import path from "node:path";

const MASKED_FIELDS = new Set(["password", "token", "authorization"]);

function ensureLogDir(logDir) {
  fs.mkdirSync(logDir, { recursive: true });
}

function sanitize(value) {
  if (Array.isArray(value)) return value.map(sanitize);
  if (!value || typeof value !== "object") return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [
      key,
      MASKED_FIELDS.has(key.toLowerCase()) ? "[hidden]" : sanitize(item),
    ])
  );
}

export function writeLog(logDir, event, payload = {}) {
  ensureLogDir(logDir);
  const entry = {
    timestamp: new Date().toISOString(),
    event,
    ...sanitize(payload),
  };
  const line = `${JSON.stringify(entry)}\n`;
  fs.appendFile(path.join(logDir, "activity.log"), line, (error) => {
    if (error) console.error("Failed to write activity log:", error.message);
  });

  if (event.includes("error") || event.includes("failure")) {
    fs.appendFile(path.join(logDir, "errors.log"), line, (error) => {
      if (error) console.error("Failed to write error log:", error.message);
    });
  }
}

export function requestLogger(req, res, next) {
  const start = Date.now();
  const chunks = [];
  const originalJson = res.json.bind(res);
  const originalSend = res.send.bind(res);

  res.json = (body) => {
    chunks.push(body);
    return originalJson(body);
  };

  res.send = (body) => {
    if (chunks.length === 0 && typeof body !== "function") chunks.push(body);
    return originalSend(body);
  };

  res.on("finish", () => {
    const isFailure = res.statusCode >= 400;
    const responseBody = chunks[0];

    writeLog(req.app.locals.logsDir, isFailure ? "request_failure" : "request", {
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
      ip: req.ip,
      body: req.method === "GET" ? undefined : req.body,
      query: req.query,
      response:
        typeof responseBody === "object"
          ? responseBody
          : { type: typeof responseBody },
    });
  });

  next();
}

export function logError(req, error) {
  writeLog(req.app.locals.logsDir, "server_error", {
    method: req.method,
    path: req.originalUrl,
    message: error.message,
    stack: error.stack,
  });
}
