import { Router } from "express";
import { adminDashboard, addTrip ,addDestination, getAllDestinations } from "../controllers/AdminController.js";
import { authHandler } from "../middleware/authHandler.js";

export const adminRoutes = Router();

adminRoutes.get("/dashboard", authHandler, adminDashboard);
adminRoutes.post("/destinations", authHandler, addDestination);
adminRoutes.get("/destinations", authHandler, getAllDestinations);
adminRoutes.post("/trip", authHandler, addTrip);
//adminRoutes.get("/dashboard", adminDashboard);

