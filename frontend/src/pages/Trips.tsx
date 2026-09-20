import React, { useState } from 'react'
import Modal from '../components/layout/Modal';
import { useAdminContext } from '../context/AdminContext';
import { tripDetails } from '../components/admin/Formdata';

export const Trips = () => {

  const {modal} = useAdminContext();

  function handleModal(){
    modal.openModal()
  }


  return (
 <section className="min-h-screen min-w-screen rounded-2xl border-2 bg-slate-50 p-5 md:p-6">

   <Modal children = {tripDetails()} title ="Create Trip" subtitle = "Add the trip details below."/>


  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="mb-1 text-sm font-medium text-orange-500">
        VAYCAY Travels
      </p>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Trips
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Manage all your trips and travel bookings.
      </p>
    </div>

    <button
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md"
     onClick = {handleModal}
    >
      <span className="text-lg leading-none">+</span>
      Create Trip
    </button>
  </div>



  <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:flex-row">

    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search trips or destinations..."
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
      />
    </div>

    <select
      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
    >
      <option>All Status</option>
      <option>Planning</option>
      <option>Confirmed</option>
      <option>Completed</option>
      <option>Cancelled</option>
    </select>

    <select
      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
    >
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Name A-Z</option>
      <option>Name Z-A</option>
    </select>

  </div>



{/* Column Header */}

 <div className=" flex justify-between items-center
  bg-white rounded-xl z-[100]
  border border-slate-200
  shadow-xl
  px-5 py-4 mt-4
  hover:scale-[1.01]
  hover:shadow-2xl
  transition-all duration-200">

  
  <div className="flex items-center gap-3 min-w-0">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
      ✈️
    </div>

    <div className="min-w-0">
      <p className="font-semibold text-slate-900 truncate">
        Kerala Escape
      </p>
      <p className="text-xs text-slate-500 truncate">
        Kerala, India
      </p>
    </div>
  </div>

<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Dates
      </p>
   <p className="text-sm text-slate-600">
    12 – 18 Sep
  </p>

</div>


<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Travellers
      </p>
   <p className="text-sm text-slate-600">
    6 people
  </p>

</div>


<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Budget
      </p>
   <p className="text-sm text-slate-600">
    ₹1,84,500
  </p>

</div>

   <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
    Completed
  </span>

</div> 

 <div className=" flex justify-between items-center
  bg-white rounded-xl z-[100]
  border border-slate-200
  shadow-xl
  px-5 py-4 mt-4
  hover:scale-[1.01]
  hover:shadow-2xl
  transition-all duration-200">

  
  <div className="flex items-center gap-3 min-w-0">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
      ✈️
    </div>

    <div className="min-w-0">
      <p className="font-semibold text-slate-900 truncate">
        Kerala Escape
      </p>
      <p className="text-xs text-slate-500 truncate">
        Kerala, India
      </p>
    </div>
  </div>

<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Dates
      </p>
   <p className="text-sm text-slate-600">
    12 – 18 Sep
  </p>

</div>


<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Travellers
      </p>
   <p className="text-sm text-slate-600">
    6 people
  </p>

</div>


<div className="min-w-0">
    <p className="font-semibold text-slate-500 truncate">
        Budget
      </p>
   <p className="text-sm text-slate-600">
    ₹1,84,500
  </p>

</div>

   <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
    Completed
  </span>

</div> 




</section>
  )
}

