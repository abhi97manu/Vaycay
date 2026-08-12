import { Request, Response } from "express";
import { getAdminAnalytics, getFeaturedPackages, getPackages } from "../services/packageService.js";

export async function listPackages(request: Request, response: Response) {
  const category = request.query.category as "mountains" | "beaches" | "nature" | undefined;
  const packages = await getPackages(category);
  response.json({ packages });
}

export async function listFeaturedPackages(_request: Request, response: Response) {
  const packages = await getFeaturedPackages();
  response.json({ packages });
}

export async function adminPackages(_request: Request, response: Response) {
  const packages = await getPackages();
  response.json({ packages });
}

export async function adminDashboard(_request: Request, response: Response) {
  const analytics = await getAdminAnalytics();
  response.json({ analytics });
}
