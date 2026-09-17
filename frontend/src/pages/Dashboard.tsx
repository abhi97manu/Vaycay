import React from 'react'

export const Dashboard = () => {
  return (
    <section className="min-h-screen w-full rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 md:p-6">

  {/* ================= HEADER ================= */}
  <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <p className="text-sm font-medium text-orange-500">
        VAYCAY Travels
      </p>

      <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Good morning, Admin 👋
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Here's an overview of your travel business.
      </p>
    </div>

    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md"
    >
      <span className="text-lg leading-none">+</span>
      Create New Trip
    </button>

  </div>


  {/* ================= STATS ================= */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

    {/* Total Trips */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            Total Trips
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            24
          </p>

          <p className="mt-2 text-xs font-medium text-emerald-600">
            ↑ 12% from last month
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
          ✈
        </div>

      </div>

    </div>


    {/* Active Trips */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            Active Trips
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            06
          </p>

          <p className="mt-2 text-xs font-medium text-slate-400">
            Currently travelling
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
          ◉
        </div>

      </div>

    </div>


    {/* Upcoming */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            Upcoming
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            08
          </p>

          <p className="mt-2 text-xs font-medium text-slate-400">
            Trips in next 30 days
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-500">
          ◷
        </div>

      </div>

    </div>


    {/* Revenue */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            Revenue
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            ₹8.42L
          </p>

          <p className="mt-2 text-xs font-medium text-emerald-600">
            ↑ 8.4% this month
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
          ₹
        </div>

      </div>

    </div>

  </div>


  {/* ================= MAIN CONTENT ================= */}
  <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">


    {/* ================= LATEST TRIP ================= */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">

      {/* Trip header */}
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-orange-500"></span>

            <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
              Latest Trip
            </p>

          </div>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Kerala Escape
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Kerala, India · 6 travellers
          </p>
        </div>

        <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
          Completed
        </span>

      </div>


      {/* Trip details */}
      <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">

        <div className="p-5">
          <p className="text-xs text-slate-400">
            Travel Dates
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-800">
            12 - 18 Sep
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs text-slate-400">
            Travellers
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-800">
            6 People
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs text-slate-400">
            Budget
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-800">
            ₹1,84,500
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs text-slate-400">
            Spent
          </p>

          <p className="mt-2 text-sm font-semibold text-orange-500">
            ₹1,62,400
          </p>
        </div>

      </div>


      {/* Budget */}
      <div className="border-t border-slate-100 p-6">

        <div className="mb-3 flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Trip Budget
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              ₹22,100 remaining
            </p>
          </div>

          <p className="text-sm font-bold text-orange-500">
            88%
          </p>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-orange-500 transition-all"
            style={{ width: "88%" }}
          />
        </div>

      </div>

    </div>


    {/* ================= EXPENSE OVERVIEW ================= */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
            Expenses
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            ₹1,62,400
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Latest trip spending
          </p>
        </div>

        <button className="text-xs font-semibold text-orange-500 hover:text-orange-600">
          View all
        </button>

      </div>


      <div className="mt-7 space-y-5">

        {[
          { name: "Hotels", amount: "₹62,000", percentage: 38 },
          { name: "Transport", amount: "₹41,500", percentage: 26 },
          { name: "Food", amount: "₹24,900", percentage: 15 },
          { name: "Activities", amount: "₹22,000", percentage: 14 },
          { name: "Other", amount: "₹12,000", percentage: 7 },
        ].map((expense) => (

          <div key={expense.name}>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm text-slate-600">
                {expense.name}
              </span>

              <span className="text-sm font-semibold text-slate-800">
                {expense.amount}
              </span>

            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-orange-400"
                style={{ width: `${expense.percentage}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>


  {/* ================= BOTTOM SECTION ================= */}
  <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">


    {/* Upcoming Trips */}
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-100 p-6">

        <div>
          <h2 className="font-bold text-slate-900">
            Upcoming Trips
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your next scheduled journeys
          </p>
        </div>

        <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          View all →
        </button>

      </div>


      <div className="divide-y divide-slate-100">

        {[
          {
            destination: "Goa",
            date: "20 Sep",
            people: "4 travellers",
            status: "Confirmed",
          },
          {
            destination: "Rajasthan",
            date: "27 Sep",
            people: "8 travellers",
            status: "Planning",
          },
          {
            destination: "Dubai",
            date: "04 Oct",
            people: "5 travellers",
            status: "Confirmed",
          },
          {
            destination: "Manali",
            date: "12 Oct",
            people: "6 travellers",
            status: "Planning",
          },
        ].map((trip) => (

          <div
            key={trip.destination}
            className="flex items-center justify-between p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                ✈
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {trip.destination}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {trip.people}
                </p>
              </div>

            </div>


            <div className="text-right">

              <p className="text-sm font-medium text-slate-700">
                {trip.date}
              </p>

              <p
                className={`mt-1 text-xs font-medium ${
                  trip.status === "Confirmed"
                    ? "text-emerald-600"
                    : "text-orange-500"
                }`}
              >
                {trip.status}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* Recent Transactions */}
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-100 p-6">

        <div>
          <h2 className="font-bold text-slate-900">
            Recent Transactions
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Latest payments and expenses
          </p>
        </div>

        <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          View all →
        </button>

      </div>


      <div className="divide-y divide-slate-100">

        {[
          {
            name: "Hotel Booking",
            detail: "Kerala Trip",
            amount: "- ₹28,500",
            type: "expense",
          },
          {
            name: "Customer Payment",
            detail: "Goa Weekend",
            amount: "+ ₹45,000",
            type: "income",
          },
          {
            name: "Flight Tickets",
            detail: "Dubai Package",
            amount: "- ₹36,800",
            type: "expense",
          },
          {
            name: "Customer Payment",
            detail: "Rajasthan Tour",
            amount: "+ ₹62,000",
            type: "income",
          },
        ].map((transaction) => (

          <div
            key={`${transaction.name}-${transaction.detail}`}
            className="flex items-center justify-between p-4"
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  transaction.type === "income"
                    ? "bg-emerald-50 text-emerald-500"
                    : "bg-orange-50 text-orange-500"
                }`}
              >
                {transaction.type === "income" ? "↓" : "↑"}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {transaction.name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {transaction.detail}
                </p>
              </div>

            </div>

            <p
              className={`text-sm font-semibold ${
                transaction.type === "income"
                  ? "text-emerald-600"
                  : "text-slate-700"
              }`}
            >
              {transaction.amount}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
  )
}

