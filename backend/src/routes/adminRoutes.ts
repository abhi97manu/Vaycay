import { Router } from "express";
import { adminDashboard, addTrip ,addDestination } from "../controllers/AdminController.js";
import { authHandler } from "../middleware/authHandler.js";

export const adminRoutes = Router();

adminRoutes.get("/dashboard", authHandler, adminDashboard);
adminRoutes.post("/destinations", authHandler, addDestination);
adminRoutes.post("/packages", authHandler, addTrip);
//adminRoutes.get("/dashboard", adminDashboard);

