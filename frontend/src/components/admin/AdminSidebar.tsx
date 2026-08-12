export function AdminSidebar() {
  const sections = ["Dashboard", "Packages", "Departures", "Bookings"];

  const handleNavigaion = (section: string) => {
      
  }

  return (
    <aside className="panel p-6">
      <p className="section-copy">Back Office</p>
      <h2 className="mt-3 font-display text-4xl text-slate">Travel Desk</h2>
      <div className="mt-8 space-y-3">
        {sections.map((section) => (
          <button
            key={section}
            type="button"
            className="flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-left text-slate transition hover:border-coral/35 hover:bg-white"
          >
            <span>{section}</span>
            <span className="text-slate/40">+</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
