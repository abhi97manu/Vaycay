import { FormEvent, useEffect, useState } from "react";
import { createTripPackage } from "../../data/api";
import { createDestination, getAdminStates, getDestination } from "../../Services/ApiServices";
import { useAdminContext } from "../../context/AdminContext";

type Destination = { id: number; name: string; region: string };
type State = { id: number; name: string };
type DayPlan = { description: string; activity: string; meal: string };

const fieldClass = "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100";
const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

export function TripPackageForm({ onCreated }: { onCreated: () => void }) {
  const { modal } = useAdminContext();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [showDestinationForm, setShowDestinationForm] = useState(false);
  const [newDestination, setNewDestination] = useState({ name: "", region: "", state_id: "", description: "" });
  const [destinationId, setDestinationId] = useState("");
  const [name, setName] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [endingPoint, setEndingPoint] = useState("");
  const [description, setDescription] = useState("");
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("nature");
  const [stock, setStock] = useState("10");
  const [duration, setDuration] = useState("4 days / 3 nights");
  const [departureStart, setDepartureStart] = useState("");
  const [departureEnd, setDepartureEnd] = useState("");
  const [seats, setSeats] = useState("10");
  const [days, setDays] = useState<DayPlan[]>([{ description: "", activity: "", meal: "None" }]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getDestination().then((result) => setDestinations((result.data || []) as Destination[]));
    getAdminStates().then((result) => setStates(result.data || []));
  }, []);

  async function saveDestination() {
    setError("");
    try {
      await createDestination({ ...newDestination, state_id: Number(newDestination.state_id) });
      const result = await getDestination();
      const updated = (result.data || []) as Destination[];
      setDestinations(updated);
      const created = updated.find((item) => item.name.toLowerCase() === newDestination.name.trim().toLowerCase());
      if (created) setDestinationId(String(created.id));
      setNewDestination({ name: "", region: "", state_id: "", description: "" });
      setShowDestinationForm(false);
    } catch {
      setError("Could not add destination. Check the details and try again.");
    }
  }

  const updateDay = (index: number, key: keyof DayPlan, value: string) => {
    setDays((current) => current.map((day, dayIndex) => dayIndex === index ? { ...day, [key]: value } : day));
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Boolean(departureStart) !== Boolean(departureEnd)) {
      setError("Enter both departure dates, or leave both blank.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      await createTripPackage({
        destinationId: Number(destinationId), name, startingPoint, endingPoint, description, days,
        packageName: packageName || name, packageDescription: packageDescription || description,
        price: Number(price), category, stock: Number(stock), duration,
        departureStart, departureEnd, seats: Number(seats)
      });
      onCreated();
      modal.closeModal();
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Could not publish this trip.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Trip details</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2"><span className={labelClass}>Destination</span>
            <select className={fieldClass} value={destinationId} onChange={(event) => setDestinationId(event.target.value)} required>
              <option value="">Choose an existing destination</option>
              {destinations.map((destination) => <option key={destination.id} value={destination.id}>{destination.name}{destination.region ? ` · ${destination.region}` : ""}</option>)}
            </select>
          </label>
          <div className="sm:col-span-2 -mt-2"><button type="button" onClick={() => setShowDestinationForm((visible) => !visible)} className="text-sm font-semibold text-orange-600 hover:text-orange-700">{showDestinationForm ? "− Close destination form" : "+ Add a new destination"}</button></div>
          {showDestinationForm && <div className="sm:col-span-2 grid gap-3 rounded-xl border border-orange-100 bg-orange-50/50 p-4 sm:grid-cols-2">
            <label><span className={labelClass}>Destination name</span><input className={fieldClass} value={newDestination.name} onChange={(event) => setNewDestination({ ...newDestination, name: event.target.value })} placeholder="Munnar" /></label>
            <label><span className={labelClass}>Region</span><input className={fieldClass} value={newDestination.region} onChange={(event) => setNewDestination({ ...newDestination, region: event.target.value })} placeholder="Kerala" /></label>
            <label className="sm:col-span-2"><span className={labelClass}>State</span><select className={fieldClass} value={newDestination.state_id} onChange={(event) => setNewDestination({ ...newDestination, state_id: event.target.value })}><option value="">Choose a state</option>{states.map((state) => <option key={state.id} value={state.id}>{state.name}</option>)}</select></label>
            <label className="sm:col-span-2"><span className={labelClass}>Description</span><input className={fieldClass} value={newDestination.description} onChange={(event) => setNewDestination({ ...newDestination, description: event.target.value })} placeholder="A short note about this destination" /></label>
            <button type="button" onClick={() => void saveDestination()} disabled={!newDestination.name || !newDestination.region || !newDestination.state_id} className="sm:col-span-2 justify-self-start rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">Save destination</button>
          </div>}
          <label className="sm:col-span-2"><span className={labelClass}>Trip name</span><input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Kerala Backwaters Escape" required /></label>
          <label><span className={labelClass}>Starting point</span><input className={fieldClass} value={startingPoint} onChange={(event) => setStartingPoint(event.target.value)} placeholder="Kochi" required /></label>
          <label><span className={labelClass}>Ending point</span><input className={fieldClass} value={endingPoint} onChange={(event) => setEndingPoint(event.target.value)} placeholder="Kochi" required /></label>
          <label className="sm:col-span-2"><span className={labelClass}>Trip summary</span><textarea className={fieldClass} rows={2} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="What will travelers experience?" /></label>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <div className="mb-3 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Day-by-day itinerary</p>
          <button type="button" className="text-sm font-semibold text-orange-600 hover:text-orange-700" onClick={() => setDays((current) => [...current, { description: "", activity: "", meal: "None" }])}>+ Add day</button>
        </div>
        <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
          {days.map((day, index) => <div key={index} className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
            <div className="mb-2 flex items-center justify-between"><span className="text-sm font-semibold text-slate-700">Day {index + 1}</span>{days.length > 1 && <button type="button" aria-label={`Remove day ${index + 1}`} onClick={() => setDays((current) => current.filter((_, dayIndex) => dayIndex !== index))} className="text-xs text-slate-500 hover:text-red-600">Remove</button>}</div>
            <textarea className={`${fieldClass} mb-2`} rows={2} value={day.description} onChange={(event) => updateDay(index, "description", event.target.value)} placeholder="Plan for the day" />
            <div className="grid gap-2 sm:grid-cols-2"><input className={fieldClass} value={day.activity} onChange={(event) => updateDay(index, "activity", event.target.value)} placeholder="Activity (optional)" /><select className={fieldClass} value={day.meal} onChange={(event) => updateDay(index, "meal", event.target.value)}><option>None</option><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Breakfast + dinner</option><option>All meals</option></select></div>
          </div>)}
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Traveler package</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2"><span className={labelClass}>Package title</span><input className={fieldClass} value={packageName} onChange={(event) => setPackageName(event.target.value)} placeholder={name || "Shown on the public website"} /></label>
          <label><span className={labelClass}>Price per traveler (INR)</span><input className={fieldClass} type="number" min="1" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="24999" required /></label>
          <label><span className={labelClass}>Duration</span><input className={fieldClass} value={duration} onChange={(event) => setDuration(event.target.value)} required /></label>
          <label><span className={labelClass}>Category</span><select className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)}><option value="mountains">Mountains</option><option value="beaches">Beaches</option><option value="nature">Nature</option></select></label>
          <label><span className={labelClass}>Available seats</span><input className={fieldClass} type="number" min="0" value={stock} onChange={(event) => setStock(event.target.value)} /></label>
          <label className="sm:col-span-2"><span className={labelClass}>Package description</span><textarea className={fieldClass} rows={2} value={packageDescription} onChange={(event) => setPackageDescription(event.target.value)} placeholder="Shown to travelers on the website" /></label>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">Departure (optional)</p><div className="grid gap-4 sm:grid-cols-3"><label><span className={labelClass}>Start date</span><input className={fieldClass} type="date" value={departureStart} onChange={(event) => setDepartureStart(event.target.value)} /></label><label><span className={labelClass}>End date</span><input className={fieldClass} type="date" min={departureStart} value={departureEnd} onChange={(event) => setDepartureEnd(event.target.value)} /></label><label><span className={labelClass}>Seats</span><input className={fieldClass} type="number" min="1" value={seats} onChange={(event) => setSeats(event.target.value)} /></label></div><p className="mt-2 text-xs text-slate-500">Add dates to schedule a departure now, or publish without dates and add them later.</p></div>

      {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4"><button type="button" onClick={modal.closeModal} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button><button disabled={saving || destinations.length === 0} className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50">{saving ? "Publishing…" : "Publish trip & package"}</button></div>
    </form>
  );
}
