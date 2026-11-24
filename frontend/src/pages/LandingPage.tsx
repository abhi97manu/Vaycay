import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { SiteHeader } from "../components/layout/SiteHeader";
import { categories, packages } from "../data/storeData";
import { fetchPublicPackages } from "../data/api";
import { TravelPackage } from "../data/storeData";

const highlights = [
  "Curated stays and transport",
  "Flexible group and couple itineraries",
  "Fast chat-based planning support",
  "Handpicked mountain, beach, and nature routes",
];

const destinationStories = [
  {
    key: "mountains",
    title: "Manali and Kullu",
    copy: "Snow-view cafes, valley drives, campfire nights, and the kind of long exhale city people travel for.",
    accent: "from-[#ffe1d2] via-white to-transparent",
  },
  {
    key: "nature",
    title: "Meghalaya",
    copy: "Cloud trails, waterfalls, living root bridges, and slower itineraries that feel cinematic without trying.",
    accent: "from-[#d8f4ef] via-white to-transparent",
  },
  {
    key: "beaches",
    title: "Goa",
    copy: "Boutique stay energy, beach mornings, social evenings, and enough flexibility to go loud or laid-back.",
    accent: "from-[#fff0cb] via-white to-transparent",
  },
] as const;

const guestStories = [
  {
    name: "Ritika, Bengaluru",
    quote:
      "The site feels clean and premium. I could compare trips fast without losing the fun travel vibe.",
  },
  {
    name: "Aman, Delhi",
    quote:
      "It has that Airbnb clarity where everything important is visible early, but it still feels branded.",
  },
  {
    name: "Sneha, Pune",
    quote:
      "The package cards are simple, trust-building, and easy to scan on mobile. That matters a lot.",
  },
];

const conciergePrompts = [
  "Help me choose between Manali and Meghalaya",
  "I need a Goa trip under INR 25,000",
  "Suggest a 4-day romantic mountain package",
];

export function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [catalogPackages, setCatalogPackages] = useState<TravelPackage[]>(packages);

  useEffect(() => {
    gsap.fromTo(
      "[data-reveal]",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    fetchPublicPackages().then(setCatalogPackages).catch(() => setCatalogPackages(packages));
  }, []);

  const featuredPackages = useMemo(() => catalogPackages.slice(0, 3), [catalogPackages]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute " />

      <SiteHeader />
      <main className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 lg:pb-24">
        <section id="banner" className="grid items-center justify-center min-h-[50vh] border border-slate/10 bg-slate/5">
          <p>THis is canvas</p>
        </section>
        <div id = "Search" className="absolute flex w-full  justify-center translate-y-[-15px] " >
          <input className="border border-2 px-2" placeholder="Input here"></input>
        </div>
        <section id="destinations" className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coral">Find your next escape</p>
          <h1 className="mt-3 font-display text-4xl text-slate sm:text-5xl">Trips made for the way you travel</h1>
          <p className="mt-3 max-w-2xl text-slate/65">Browse handpicked routes and ready-to-book travel packages from Vaycay.</p>
        </section>

        <section id="packages" className="scroll-mt-24 pb-16">
          <div className="mb-6 flex items-end justify-between gap-4"><div><p className="section-copy">Available now</p><h2 className="mt-2 font-display text-4xl text-slate">Explore our trips</h2></div><span className="text-sm text-slate/55">{catalogPackages.length} packages</span></div>
          {catalogPackages.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {catalogPackages.map((travelPackage) => <article key={travelPackage.id} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-44 items-end bg-gradient-to-br from-[#ffe1d2] via-[#fff7eb] to-[#d8f4ef] p-5"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/55">{travelPackage.duration}</p><h3 className="mt-1 font-display text-2xl text-slate">{travelPackage.name}</h3></div></div>
              <div className="p-5"><p className="text-sm font-medium text-slate/70">{travelPackage.location}</p><p className="mt-2 min-h-12 text-sm leading-6 text-slate/60">{travelPackage.description}</p><div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4"><div><p className="text-xs text-slate/50">From</p><p className="text-lg font-bold text-coral">₹{Number(travelPackage.price).toLocaleString("en-IN")} <span className="text-xs font-normal text-slate/50">/ person</span></p></div><button type="button" onClick={() => setIsChatOpen(true)} className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral-dark">Enquire</button></div></div>
            </article>)}
          </div> : <p className="rounded-2xl border border-dashed border-black/15 p-8 text-center text-sm text-slate/60">New trips are being prepared. Please check back soon.</p>}
        </section>

        <section id="adventures" className="rounded-3xl bg-slate/5 p-8 sm:p-12"><p className="section-copy">Travel your way</p><div className="mt-5 grid gap-5 sm:grid-cols-3">{categories.map((category) => <div key={category.key} className="rounded-2xl bg-white p-5"><h3 className="font-display text-2xl text-slate">{category.label}</h3><p className="mt-2 text-sm leading-6 text-slate/60">{category.note}</p></div>)}</div></section>
        <section id="testimonials" className="py-20"><p className="section-copy">Traveler notes</p><div className="mt-5 grid gap-5 md:grid-cols-3">{guestStories.map((story) => <blockquote key={story.name} className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-6 text-slate/70">“{story.quote}”<footer className="mt-4 font-semibold text-slate">{story.name}</footer></blockquote>)}</div></section>
       
      </main>
      <footer className="relative z-10 mt-20 border-t border-slate/10 bg-slate/5 py-12 text-center text-sm text-slate/70 sm:mt-24 sm:py-16">
        <p>This is footer</p>
      </footer>

      <div
        id="chat-assistant"
        className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
      >
        {isChatOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Travel concierge"
            className="mb-4 w-[min(22rem,calc(100vw-2rem))] rounded-[1.75rem] border border-black/10 bg-white/95 p-5 shadow-[0_24px_80px_rgba(36,38,43,0.18)] backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/40">
                  Travel Concierge
                </p>
                <h3 className="mt-2 font-display text-3xl text-slate">
                  Where do you want to go?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm text-slate/70 transition hover:border-black/25 hover:text-slate"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate/65">
              Use a quick prompt to start the conversation now, then wire this
              into your real AI assistant flow later.
            </p>
            <div className="mt-5 space-y-3">
              {conciergePrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="block w-full rounded-2xl border border-black/10 bg-cream px-4 py-3 text-left text-sm text-slate/75 transition hover:border-black/25 hover:text-slate"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <button
          type="button"
          aria-expanded={isChatOpen}
          aria-controls="chat-assistant"
          onClick={() => setIsChatOpen((current) => !current)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff5a5f_0%,#00a699_100%)] text-sm font-bold text-white shadow-[0_18px_40px_rgba(255,90,95,0.24)] transition hover:scale-[1.03]"
        >
          GO
        </button>
      </div>
    </div>
  );
}
