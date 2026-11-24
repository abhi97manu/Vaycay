import { useCallback, useEffect, useState } from "react";
import Modal from "../components/layout/Modal";
import { useAdminContext } from "../context/AdminContext";
import { TripPackageForm } from "../components/admin/Formdata";
import { fetchPublicPackages } from "../data/api";
import { TravelPackage } from "../data/storeData";

export const Trips = () => {
  const { modal } = useAdminContext();
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPackages = useCallback(async () => {
    setLoading(true);
    try {
      setPackages(await fetchPublicPackages());
      setError("");
    } catch {
      setError("Could not load packages. Check the API connection and try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void loadPackages(); }, [loadPackages]);

  return (
    <section className="min-h-screen rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7">
      <Modal title="Create a trip package" subtitle="Add the trip, itinerary, activities, and public offer in one step."><TripPackageForm onCreated={() => void loadPackages()} /></Modal>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="mb-1 text-sm font-medium text-orange-500">VAYCAY Travels</p><h1 className="text-2xl font-bold tracking-tight text-slate-900">Trips & packages</h1><p className="mt-1 text-sm text-slate-500">Published packages also appear on the traveler website.</p></div>
        <button type="button" onClick={modal.openModal} className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"><span className="text-lg leading-none">+</span> Create trip & package</button>
      </div>
      <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"><div><p className="text-sm font-semibold text-slate-800">Public catalog</p><p className="text-xs text-slate-500">These packages are visible to all website visitors.</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{packages.length} published</span></div>
      {error && <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
      {loading ? <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">Loading packages…</div> : packages.length === 0 ? <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-semibold text-slate-800">No published packages yet</p><p className="mt-1 text-sm text-slate-500">Create a trip and package to make it available to travelers.</p></div> : <div className="grid gap-4 lg:grid-cols-2">{packages.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-4"><div><span className="text-xs font-semibold uppercase tracking-wider text-orange-500">{item.category}</span><h2 className="mt-1 text-lg font-bold text-slate-900">{item.name}</h2><p className="mt-1 text-sm text-slate-500">{item.location} · {item.duration}</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Published</span></div><p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{item.description}</p><div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4"><div><p className="text-xs text-slate-400">Price per traveler</p><p className="text-lg font-bold text-slate-900">₹{Number(item.price).toLocaleString("en-IN")}</p></div><p className="text-sm text-slate-500">{item.stock} seats listed</p></div></article>)}</div>}
    </section>
  );
};
