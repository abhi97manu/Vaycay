import { Request, Response } from "express";
import { createInvoice } from "../services/orderService.js";

export async function generateInvoice(request: Request, response: Response) {
  const invoice = await createInvoice(request.body);
  response.status(201).json({ invoice });
}
