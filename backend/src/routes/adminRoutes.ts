import { Router } from "express";
import { adminDashboard, adminPackages } from "../controllers/packageController.js";

export const adminRoutes = Router();

adminRoutes.get("/dashboard", adminDashboard);
adminRoutes.get("/packages", adminPackages);
