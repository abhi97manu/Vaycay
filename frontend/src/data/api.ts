import { analytics as fallbackAnalytics, packages as fallbackPackages } from "./storeData";
import { TravelPackage } from "./storeData";

const API_BASE = `${import.meta.env.VITE_SERVER_URL || "http://localhost:4000"}${import.meta.env.VITE_SERVER_VERSION_ROUTE || "/api/v1"}`;

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

export async function fetchPublicPackages() {
  const response = await fetch(`${API_BASE}/store/packages`);
  if (!response.ok) throw new Error("Could not load travel packages");
  return (await response.json()).packages as TravelPackage[];
}

export type CatalogPayload = {
  destinationId: number;
  name: string;
  startingPoint: string;
  endingPoint: string;
  description: string;
  days: { description: string; activity: string; meal: string }[];
  packageName: string;
  packageDescription: string;
  price: number;
  category: string;
  stock: number;
  duration: string;
  departureStart: string;
  departureEnd: string;
  seats: number;
};

export async function createTripPackage(payload: CatalogPayload) {
  const response = await fetch(`${API_BASE}/admin/catalog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user_token") || ""}`
    },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Could not publish the trip");
  return result;
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
