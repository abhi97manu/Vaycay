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

export const categories: { key: CategoryKey; label: string; note: string }[] = [
  { key: "mountains", label: "Mountains", note: "Cold air, scenic drives, and alpine stays" },
  { key: "beaches", label: "Beaches", note: "Sunset plans, boutique hotels, and sea breeze" },
  { key: "nature", label: "Nature", note: "Waterfalls, forests, and slower travel energy" }
];

export const packages: TravelPackage[] = [
  {
    id: 1,
    name: "Manali Snow Escape",
    price: 18999,
    category: "mountains",
    isNew: true,
    stock: 18,
    duration: "4D / 3N",
    location: "Manali, Himachal Pradesh",
    description: "Cozy mountain stays, Solang Valley experiences, and guided local cafe hopping."
  },
  {
    id: 2,
    name: "Kullu Valley Retreat",
    price: 16499,
    category: "mountains",
    isNew: false,
    stock: 12,
    duration: "3D / 2N",
    location: "Kullu, Himachal Pradesh",
    description: "Riverfront camps, orchard walks, and a scenic reset for quick long-weekend travel."
  },
  {
    id: 3,
    name: "Meghalaya Cloud Trail",
    price: 24999,
    category: "nature",
    isNew: true,
    stock: 10,
    duration: "5D / 4N",
    location: "Shillong, Cherrapunji, Dawki",
    description: "Waterfalls, living root bridges, clear-water boating, and misty hill-town stays."
  },
  {
    id: 4,
    name: "Goa Coast Social",
    price: 21999,
    category: "beaches",
    isNew: false,
    stock: 16,
    duration: "4D / 3N",
    location: "North and South Goa",
    description: "Boutique stays, beach-hopping, sunset cruises, and curated nightlife suggestions."
  },
  {
    id: 5,
    name: "Tirthan Hidden Valley",
    price: 20999,
    category: "nature",
    isNew: true,
    stock: 8,
    duration: "4D / 3N",
    location: "Tirthan Valley, Himachal Pradesh",
    description: "Riverside cabins, easy hikes, trout meals, and slow-travel pacing away from crowds."
  },
  {
    id: 6,
    name: "South Goa Slow Stay",
    price: 22999,
    category: "beaches",
    isNew: false,
    stock: 14,
    duration: "5D / 4N",
    location: "Palolem, Agonda, Cola",
    description: "Peaceful beaches, wellness add-ons, scooter freedom, and photogenic coastal days."
  }
];

export const analytics = {
  revenue: "INR 18.6L",
  bookings: 482,
  conversion: "6.1%",
  avgTripValue: "INR 38,600"
};
