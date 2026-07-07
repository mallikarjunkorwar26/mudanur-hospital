import express from "express";
import { writeLog } from "../utils/logger.js";

const router = express.Router();

router.post("/client", (req, res) => {
  writeLog(req.app.locals.logsDir, "client_activity", {
    ip: req.ip,
    userAgent: req.get("user-agent"),
    ...req.body,
  });

  res.status(204).send();
});

export default router;
