import { pool } from "../config/db.js";
import { mockPackages } from "../models/mockData.js";
import { CategoryKey, TravelPackage } from "../types/index.js";

export async function getPackages(category?: CategoryKey): Promise<TravelPackage[]> {
  if (!pool) {
    return category
      ? mockPackages.filter((travelPackage) => travelPackage.category === category)
      : mockPackages;
  }

  const [rows] = await pool.query(
    category
      ? "SELECT * FROM packages WHERE category = ? ORDER BY isNew DESC, id DESC"
      : "SELECT * FROM packages ORDER BY isNew DESC, id DESC",
    category ? [category] : []
  );

  return rows as TravelPackage[];
}

export async function getFeaturedPackages(): Promise<TravelPackage[]> {
  const packages = await getPackages();
  return packages.filter((travelPackage) => travelPackage.isNew);
}

export async function getAdminAnalytics() {
  if (!pool) {
    return {
      revenue: "INR 18.6L",
      bookings: 482,
      conversion: "6.1%",
      avgTripValue: "INR 38,600"
    };
  }

  const [rows] = await pool.query(
    "SELECT COUNT(*) AS orders, COALESCE(SUM(total_amount), 0) AS revenue, COALESCE(AVG(total_amount), 0) AS avgOrderValue FROM orders"
  );
  const analytics = (rows as { orders: number; revenue: number; avgOrderValue: number }[])[0];

  return {
    revenue: `INR ${Number(analytics.revenue).toFixed(2)}`,
    bookings: analytics.orders,
    conversion: "4.8%",
    avgTripValue: `INR ${Number(analytics.avgOrderValue).toFixed(2)}`
  };
}
