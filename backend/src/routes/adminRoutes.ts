import { Router } from "express";
import { adminDashboard, addPackages } from "../controllers/AdminController.js";
import { authHandler } from "../middleware/authHandler.js";

export const adminRoutes = Router();

adminRoutes.get("/dashboard", authHandler, adminDashboard);
adminRoutes.post("/packages", authHandler, addPackages);
//adminRoutes.get("/dashboard", adminDashboard);

