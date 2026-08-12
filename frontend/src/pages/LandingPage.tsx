import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { SiteHeader } from "../components/layout/SiteHeader";
import { categories, packages } from "../data/storeData";

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

  useEffect(() => {
    gsap.fromTo(
      "[data-reveal]",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" },
    );
  }, []);

  const featuredPackages = useMemo(() => packages.slice(0, 3), []);
  const seasonalPackages = useMemo(
    () => packages.filter((travelPackage) => travelPackage.isNew),
    [],
  );

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
        <section id="destinations" className="grid items-center justify-center min-h-[50vh] border border-slate/10 bg-slate/5">
          <p>This is Popular Destination</p>
        </section> 

        <section id="adventures" className="grid items-center justify-center min-h-[50vh]  ">
        
          <p>This is ADventures</p>
        </section>
        <div className=" flex justify-center border  gap-2">
            <div id = "cards" className = "w-32 h-32 border border-2 bg-slate/5 rounded-lg flex ">            </div>
            <div id = "cards" className = "w-32 h-32 border border-2 bg-slate/5 rounded-lg flex ">            </div>
            <div id = "cards" className = "w-32 h-32 border border-2 bg-slate/5 rounded-lg flex ">            </div>
        </div>
        <section id="testimonials" className="relative translate-y-[-120px] my-24 grid items-center justify-center min-h-[50vh] border border-slate/10 bg-slate/5">
          <p>This is Testimonials</p>
        </section>
       
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
