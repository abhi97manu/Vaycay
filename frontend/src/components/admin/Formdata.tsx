import React from 'react'

export const tripDetails = () => {
  return (
  <form className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

   

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
          <option value="">Select destination</option>
        </select>
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
            placeholder="0.00"
            required
            className="w-full rounded-lg border border-slate-300 py-2.5 pl-8 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Activity */}
      <div>
        <label
          htmlFor="activities_id"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Activity
        </label>

        <select
          id="activities_id"
          name="activities_id"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Select activity</option>
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
          maxLength={255}
          placeholder="e.g. Central London"
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
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
}



