import { Link } from "react-router-dom";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <div>
          <p className="font-display text-2xl tracking-[0.08em] text-slate sm:text-3xl">
            Vaycay
          </p>
          <p className="text-[10px] uppercase tracking-[0.34em] text-slate/50 sm:text-xs">
            Curated escapes across India
          </p>
        </div>

        <nav className="hidden items-center gap-5 text-sm text-slate/75 md:flex">
          <a className="transition hover:text-slate" href="#destinations">
            Destinations
          </a>
          <a className="transition hover:text-slate" href="#packages">
            Packages
          </a>
          <a className="transition hover:text-slate" href="#stories">
            Reviews
          </a>
          <Link
            to="/login"
            className="rounded-full border border-black/10 px-4 py-2 text-slate/75 transition hover:border-black/20 hover:text-slate"
          >
            Admin
          </Link>
        </nav>

        <a
          href="#packages"
          className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral-dark"
        >
          Explore Trips
        </a>
      </div>
    </header>
  );
}
