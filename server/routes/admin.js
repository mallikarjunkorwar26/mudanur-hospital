import express from "express";
import { createAdminToken, getAdminCredentials } from "../utils/auth.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  const admin = getAdminCredentials();

  if (username !== admin.username || password !== admin.password) {
    return res.status(401).json({ message: "Invalid admin username or password" });
  }

  res.json({
    token: createAdminToken(username),
    user: { username },
  });
});

export default router;
