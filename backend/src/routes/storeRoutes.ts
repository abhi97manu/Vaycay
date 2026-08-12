import { Router } from "express";
import { listFeaturedPackages, listPackages } from "../controllers/packageController.js";
import { generateInvoice } from "../controllers/orderController.js";

export const publicRoutes = Router();

publicRoutes.get("/packages", listPackages);
publicRoutes.get("/packages/featured", listFeaturedPackages);
publicRoutes.post("/orders/invoice", generateInvoice);
