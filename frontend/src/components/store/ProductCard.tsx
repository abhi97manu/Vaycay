import { TravelPackage } from "../../data/storeData";

type ProductCardProps = {
  product: TravelPackage;
  onAdd: (travelPackage: TravelPackage) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="panel group overflow-hidden p-5 transition hover:-translate-y-1 hover:border-coral/30">
      <div className="mb-4 flex h-48 items-end rounded-[1.75rem] bg-gradient-to-br from-sand/60 via-white to-sea/10 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate/50">{product.duration}</p>
          <h3 className="mt-2 font-display text-3xl text-slate">{product.name}</h3>
        </div>
      </div>
      <p className="text-sm leading-6 text-slate/70">{product.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-coral">INR {product.price}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-slate/50">
            {product.stock} slots left
          </p>
        </div>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-coral/60 hover:bg-coral/10"
        >
          Hold Slot
        </button>
      </div>
    </article>
  );
}
