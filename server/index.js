import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "node:path";
import { fileURLToPath } from "node:url";
import adminRoutes from "./routes/admin.js";
import appointmentRoutes from "./routes/appointments.js";
import logRoutes from "./routes/logs.js";
import { logError, requestLogger } from "./utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mudanur_hospital";

app.locals.recordsDir = path.join(__dirname, "records");
app.locals.logsDir = path.join(__dirname, "logs");

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: "1mb" }));
app.use(requestLogger);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mudanur-appointments" });
});

app.use("/api/admin", adminRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/logs", logRoutes);

app.use((err, req, res, _next) => {
  console.error(err);
  logError(req, err);
  res.status(500).json({
    message: "Something went wrong. Please try again or contact reception.",
  });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Appointment API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
