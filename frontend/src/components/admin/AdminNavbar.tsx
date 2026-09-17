import React from 'react'

export const AdminNavbar = () => {
 return (
  <nav className="sticky top-0 z-50 w-full min-h-20 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm">
    <div className="flex min-h-20 items-center justify-between">

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          AK
        </div>

        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">
            Admin
          </p>
          <p className="text-xs text-slate-500">
            Administrator
          </p>
        </div>
      </div>

      {/* Back to Site */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        Back to Site
      </button>

    </div>
  </nav>
);
}
