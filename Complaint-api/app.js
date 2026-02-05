import express from "express";
import complaintRoutes from "./Routes/complaint.routes.js";
import loggerMiddleware from "./Middleware/logger.middleware.js";

const app = express();

// built-in middleware
app.use(express.json());

// app-level middleware
app.use(loggerMiddleware);

// routes
app.use("/complaints", complaintRoutes);

export default app;