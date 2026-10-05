import React, { useEffect, useState } from "react";
import { getDestination } from "../../Services/ApiServices";

export const tripDetails = () => {
  const [destination, setDestination] = useState([] as any[]);
  const [days_in_num, setDays_in_num] = useState(0);
  const [startingP, setStartingP] = useState("");
  const [endingP, setEndingP] = useState("");
  const [tripPrice, setTripPrice] = useState(0.0);
  type Meal = "Breakfast"| "Lunch"|"Dinner"|"None";
  type itenary = {
    day1: Number,
    detail : String,
    meal : Meal  }
  const [itenaryArray, setItenaryArray] = useState<itenary[]>([])

  const getAllDestinations = async () => {
    const destinations = await getDestination();
    console.log("Destinations : ", destinations.data);
    setDestination(destinations.data || []);
  };

  useEffect(() => {
    getAllDestinations();

    return () => {
      setDestination([]);
    };
  }, []);

  return (
    <form className="mx-auto  w-full max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Destination */}
        <div className="md:col-span-2">
          <label
            htmlFor="destination_id"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Destination
          </label>

          <select
            id="destination_id"
            name="destination_id"
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled selected>
              Select destination
            </option>

            {destination.map((dest: any) => (
              <option key={dest.id} value={dest.id}>
                {dest.name}
              </option>
            ))}
          </select>
        </div>

        {/* Starting Point */}
        <div>
          <label
            htmlFor="starting_point"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Starting Point
          </label>

          <input
            id="starting_point"
            type="text"
            name="starting_point"
            value = {startingP}
            onChange = {(e)=>setStartingP(e.target.value)}
             maxLength={255}
            placeholder="e.g. London Heathrow Airport"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Ending Point */}
        <div>
          <label
            htmlFor="ending_point"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Ending Point
          </label>

          <input
            id="ending_point"
            type="text"
            name="ending_point"
            value = {endingP}
            onChange = {(e)=>setEndingP(e.target.value)}
            maxLength={255}
            placeholder="e.g. Central London"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
      {/* Price */}
      <div>
        <label
          htmlFor="price"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Price
        </label>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
            $
          </span>

          <input
            id="price"
            type="number"
            name="price"
            step="0.01"
            min="0"
            value = {tripPrice}
            onChange = {(e)=> setTripPrice(parseFloat(e.target.value))}
            placeholder="0.00"
            required
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-8 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Itinerary */}
      <div className="space-y-6">
        {/* Number of Days */}
        <div>
          <label
            htmlFor="days"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Number of Days
          </label>

          <input
            id="days"
            type="number"
            name="days"
            min="1"
            value={days_in_num}
            onChange={(e) => setDays_in_num(parseInt(e.target.value) || 0)}
            placeholder="e.g. 5"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div className="overflow gap-2 flex max-h-[300px] flex-col overflow-y-auto rounded-lg border border-slate-300 p-3">


      

        {Array.from({ length: days_in_num }, (_, index) => (
          <div key={index}>
            <div className="flex w-full gap-3">
              
              <div className="w-[90%]">
                <textarea
                  id="description-1"
                  name="description-1"
                  rows={3}
                  placeholder="Add details about this activity or meal..."
                  className="w-full h-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="flex w-[10%] flex-col justify-between gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Act
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-blue-300 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                >
                  Meal
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-red-300 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  Del
                </button>
              </div>
            </div>
          </div>
        ))}
          </div>
      </div>


      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
        <button
          type="button"
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Trip
        </button>
      </div>
    </form>
  );
};
