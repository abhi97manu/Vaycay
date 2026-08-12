import { useState } from "react";
import { TravelPackage } from "../../data/storeData";

type CartItem = TravelPackage & { quantity: number };

type CartPanelProps = {
  items: CartItem[];
  onCheckout: (customer: { customerName: string; customerEmail: string }) => void;
};

export function CartPanel({ items, onCheckout }: CartPanelProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasItems = items.length > 0;
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  return (
    <aside className="panel h-fit p-6">
      <p className="section-copy">Trip Cart</p>
      <h2 className="mt-3 font-display text-4xl text-slate">Book with a concierge</h2>
      <p className="mt-3 text-sm leading-6 text-slate/70">
        Travelers can shortlist packages, request a quote, and confirm details with the team.
      </p>
      <div className="mt-6 space-y-3">
        {items.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-black/10 p-4 text-sm text-slate/50">
            No packages selected yet.
          </p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="rounded-2xl border border-black/10 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{item.name}</p>
                <p className="text-coral">INR {item.price * item.quantity}</p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate/50">
                Qty {item.quantity}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 border-t border-black/10 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate/70">Departure support across India</span>
          <span className="font-semibold">INR {total}</span>
        </div>
        <div className="mt-4 space-y-3">
          <input
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate/35 focus:border-coral/50"
            placeholder="Traveler name"
          />
          <input
            value={customerEmail}
            onChange={(event) => setCustomerEmail(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate/35 focus:border-coral/50"
            placeholder="Traveler email"
            type="email"
          />
          <button
            type="button"
            disabled={!hasItems}
            onClick={() => onCheckout({ customerName, customerEmail })}
            className="w-full rounded-full bg-coral px-4 py-3 font-semibold text-white transition hover:bg-coral-dark disabled:cursor-not-allowed disabled:bg-slate/10 disabled:text-slate/40"
          >
            Request Quote
          </button>
        </div>
      </div>
    </aside>
  );
}
