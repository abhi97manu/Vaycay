import {Link} from 'react-router-dom'

export function AdminSidebar() {
  const sections = ["Dashboard", "Packages", "Departures", "Bookings"];

  const handleNavigaion = (section: string) => {
      
  }

  return (
    <aside className="sticky top-0 flex min-h-screen w-72 min-w-72 flex-col rounded-2xl border-2 border-slate-200 bg-white px-4 py-6">

  {/* Logo / Brand */}
  <div className="mb-8 flex items-center gap-3 px-2">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
      V
    </div>

    <div>
      <h1 className="text-lg font-bold tracking-tight text-slate-900">
        VAYCAY
      </h1>
      <p className="text-xs font-medium tracking-wide text-slate-500">
        TRAVELS
      </p>
    </div>
  </div>


  {/* Navigation */}
  <nav className="flex flex-col gap-1">

    {/* Dashboard - Active */}
    <Link to ="/admin"
     
      className="flex items-center gap-3 rounded-xl focus:bg-orange-50 focus:text-orange-600 hover:bg-orange-50 hover:text-orange-600  px-4 py-3 text-sm font-semibold "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
        />
      </svg>

      Dashboard
    </Link>


    {/* Trips */}
    <Link to = "trips"
      
      className="flex items-center gap-3 rounded-xl focus:bg-orange-50 focus:text-orange-600 hover:bg-orange-50 hover:text-orange-600 px-4 py-3 text-sm font-semibold"
    >
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-5 w-5 transition-colors group-hover:text-orange-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5l3-3 4 4L17 10l4 4M3 20h18M5 4h14"
        />
      </svg>

      Trips
     </Link>

  </nav>


  {/* Bottom */}
  <div className="mt-auto px-2 pt-6">
    <div className="border-t border-slate-100 pt-4">
      <p className="text-xs text-slate-400">
        VAYCAY Travels
      </p>
      <p className="mt-1 text-xs text-slate-400">
        Admin Panel
      </p>
    </div>
  </div>

</aside>
  );
}
