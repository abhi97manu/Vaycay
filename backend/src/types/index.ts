export type CategoryKey = "mountains" | "beaches" | "nature";

export type TravelPackage = {
  id: number;
  name: string;
  price: number;
  category: CategoryKey;
  isNew: boolean;
  stock: number;
  duration: string;
  location: string;
  description: string;
};

export type CartItem = {
  packageId: number;
  quantity: number;
};

export type InvoiceRequest = {
  customerName: string;
  customerEmail: string;
  items: CartItem[];
};
