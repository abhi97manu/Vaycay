import { getPackages } from "./packageService.js";
import { InvoiceRequest } from "../types/index.js";

export async function createInvoice(request: InvoiceRequest) {
  const packages = await getPackages();
  const lineItems = request.items.map((item) => {
    const travelPackage = packages.find((entry) => entry.id === item.packageId);
    if (!travelPackage) {
      throw new Error(`Package ${item.packageId} not found`);
    }

    return {
      packageId: travelPackage.id,
      name: travelPackage.name,
      quantity: item.quantity,
      unitPrice: travelPackage.price,
      lineTotal: travelPackage.price * item.quantity
    };
  });

  const subtotal = lineItems.reduce((sum, item) => sum + item.lineTotal, 0);

  return {
    invoiceNumber: `VAY-${Date.now()}`,
    customer: {
      name: request.customerName,
      email: request.customerEmail
    },
    destinationSupport: "Pan-India departures",
    lineItems,
    subtotal,
    notes: "A travel concierge will confirm slots, pickup details, and add-ons after payment."
  };
}
