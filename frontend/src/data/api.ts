import { analytics as fallbackAnalytics, packages as fallbackPackages } from "./storeData";

const API_BASE = "http://localhost:4000/api";

export type InvoicePayload = {
  customerName: string;
  customerEmail: string;
  items: { packageId: number; quantity: number }[];
};

export async function fetchPackages() {
  try {
    const response = await fetch(`${API_BASE}/admin/packages`);
    if (!response.ok) {
      throw new Error("Packages request failed");
    }

    return (await response.json()).packages;
  } catch {
    return fallbackPackages;
  }
}

export async function fetchAnalytics() {
  try {
    const response = await fetch(`${API_BASE}/admin/dashboard`);
    if (!response.ok) {
      throw new Error("Analytics request failed");
    }

    return (await response.json()).analytics;
  } catch {
    return fallbackAnalytics;
  }
}

export async function generateInvoice(payload: InvoicePayload) {
  const response = await fetch(`${API_BASE}/store/orders/invoice`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Invoice generation failed");
  }

  return (await response.json()).invoice;
}
