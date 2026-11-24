import { Request, Response, NextFunction } from "express";
import { pool } from "../config/db.js";

export async function createTripPackage(request: Request, response: Response, next: NextFunction): Promise<void> {
  if (!pool) {
    response.status(503).json({ message: "Database is not configured." });
    return;
  }

  const { destinationId, name, startingPoint, endingPoint, description, days, packageName, packageDescription, price, category, stock, duration, departureStart, departureEnd, seats } = request.body;
  if (!destinationId || !name?.trim() || !startingPoint?.trim() || !endingPoint?.trim() || !packageName?.trim() || Number(price) <= 0 || !Array.isArray(days) || days.length === 0) {
    response.status(400).json({ message: "Add the destination, trip details, package price, and at least one itinerary day." });
    return;
  }

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const [tripResult] = await connection.query<any>(
      "INSERT INTO trips (name, destination_id, starting_point, ending_point, price, description) VALUES (?, ?, ?, ?, ?, ?)",
      [name.trim(), Number(destinationId), startingPoint.trim(), endingPoint.trim(), Number(price), description?.trim() || ""]
    );
    const tripId = Number(tripResult.insertId);
    const [destinationRows] = await connection.query<any[]>("SELECT name FROM destinations WHERE id = ?", [Number(destinationId)]);
    const location = destinationRows[0]?.name;
    if (!location) throw new Error("Choose a valid destination.");
    const [packageResult] = await connection.query<any>(
      `INSERT INTO packages (name, description, destination_id, trip_id, price, category, stock, duration, is_new, is_published)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 1)`,
      [packageName.trim(), packageDescription?.trim() || description?.trim() || "", Number(destinationId), tripId, Number(price), category || "nature", Math.max(0, Number(stock) || 0), duration || `${days.length} days`]
    );
    for (let index = 0; index < days.length; index += 1) {
      const day = days[index];
      await connection.query(
        "INSERT INTO itinerary_days (trip_id, day_number, description, activity, meal) VALUES (?, ?, ?, ?, ?)",
        [tripId, index + 1, day.description?.trim() || "", day.activity?.trim() || "", day.meal || "None"]
      );
    }
    if (departureStart && departureEnd) {
      const seatCount = Math.max(1, Number(seats) || 1);
      await connection.query(
        "INSERT INTO departures (start_date, end_date, total_seats, available_seats, trip_id) VALUES (?, ?, ?, ?, ?)",
        [departureStart, departureEnd, seatCount, seatCount, tripId]
      );
    }
    await connection.commit();
    response.status(201).json({ message: "Trip and package published.", tripId, packageId: Number(packageResult.insertId), location });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
}
