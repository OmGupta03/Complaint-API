import express from "express";
import {
  getAllComplaints,
  createComplaint,
  resolveComplaint,
  deleteComplaint
} from "../Controllers/complaint.controller.js";

import authMiddleware from "../Middleware/auth.middleware.js";

const router = express.Router();

// public routes
router.get("/", getAllComplaints);
router.post("/", createComplaint);

// protected routes
router.put("/:id/resolve", authMiddleware, resolveComplaint);
router.delete("/:id", authMiddleware, deleteComplaint);

export default router;