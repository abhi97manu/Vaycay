import { useEffect, useState } from "react";
import gsap from "gsap";
import { Link, Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AnalyticsCard } from "../components/admin/AnalyticsCard";
import { fetchAnalytics, fetchPackages } from "../data/api";
import {
  TravelPackage,
  analytics as fallbackAnalytics,
  packages as fallbackPackages
} from "../data/storeData";
import { AdminNavbar } from "../components/admin/AdminNavbar";

export function AdminPage() {
  const [analytics, setAnalytics] = useState(fallbackAnalytics);
  const [packages, setPackages] = useState<TravelPackage[]>(fallbackPackages);


  return (
     <main className="flex min-h-screen bg-orange-500">
      <AdminSidebar/>
      
      
      <div className = "flex-1 min-w-0 min-h-screen">
        <AdminNavbar />
         <Outlet/>

      </div>
         {/* <Link to="/" className="rounded-full border border-black/10 px-5 py-3 text-sm">
          Back to Site
        </Link> */}
        {/*<div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div data-admin-card>
              <AnalyticsCard label="Revenue" value={analytics.revenue} />
            </div>
            <div data-admin-card>
              <AnalyticsCard label="Bookings" value={analytics.bookings} />
            </div>
            <div data-admin-card>
              <AnalyticsCard label="Conversion" value={analytics.conversion} />
            </div>
            <div data-admin-card>
              <AnalyticsCard label="Avg Trip Value" value={analytics.avgTripValue} />
            </div>
          </div>
          <div className="panel overflow-hidden">
            <div className="border-b border-black/8 px-6 py-5">
              <p className="section-copy">Packages</p>
              <h2 className="mt-2 font-display text-4xl text-slate">Latest trip details</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate/5 text-slate/55">
                  <tr>
                    <th className="px-6 py-4 font-medium">Package</th>
                    <th className="px-6 py-4 font-medium">Location</th>
                    <th className="px-6 py-4 font-medium">Duration</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                    <th className="px-6 py-4 font-medium">Slots</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((travelPackage) => (
                    <tr key={travelPackage.id} className="border-t border-black/8">
                      <td className="px-6 py-4">{travelPackage.name}</td>
                      <td className="px-6 py-4">{travelPackage.location}</td>
                      <td className="px-6 py-4">{travelPackage.duration}</td>
                      <td className="px-6 py-4">INR {travelPackage.price}</td>
                      <td className="px-6 py-4">{travelPackage.stock}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-emerald-600">
                          Live
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
           <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="panel p-6">
              <p className="section-copy">Package Actions</p>
              <h2 className="mt-3 font-display text-4xl text-slate">Maintain departures</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm"
                  placeholder="Package name"
                />
                <input
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm"
                  placeholder="Destination"
                />
                <input
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm"
                  placeholder="Price"
                />
                <input
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm"
                  placeholder="Slots"
                />
              </div>
              <button
                type="button"
                className="mt-4 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white"
              >
                Save Package
              </button>
            </div>
            <div className="panel p-6">
              <p className="section-copy">Operations</p>
              <h2 className="mt-3 font-display text-4xl text-slate">Desk notes</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate/72">
                <li>Keep Manali and Meghalaya on the homepage during planning season.</li>
                <li>Confirm seat availability before upselling private pickup add-ons.</li>
                <li>Route high-intent chat leads directly to the concierge queue.</li>
              </ul>
            </div>
          </div>}
        </div>*/}
     
    </main>
  );
}
