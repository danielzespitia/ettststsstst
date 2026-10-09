import React from 'react';
import { HERO_IMAGE, TELEMETRY_METRICS } from '../data/sanctuaryData';
import { ArrowRight, Compass, Moon, Orbit, Sparkles, Star } from 'lucide-react';

interface HeroSectionProps {
  onReserveClick: () => void;
  onExploreGuideClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  onExploreGuideClick,
}) => {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden">
      {/* Hero Background with Architectural Sandstone Arch & Milky Way */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Ultra-luxury illuminated geodesic glass domes resting under massive natural red sandstone canyon arch in Moab Utah beneath crystalline starry night sky"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-[#111319]/40 to-[#111319]/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#111319]/30 to-[#111319]/90" />
      </div>

      {/* Live Celestial Telemetry Ticker Top Overlay */}
      <div className="relative z-10 w-full pt-5 px-5 lg:px-16">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-2 py-2 px-5 rounded-full bg-[#0c0e13]/80 backdrop-blur-xl border border-[#504535]/30 shadow-2xl text-[#d4c4b0]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc665] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc665]" />
            </span>
            <span className="font-technical-coord text-[#ffc665] uppercase text-[11px] font-medium tracking-widest">
              Live Astronomical Telemetry
            </span>
            <span className="text-[#504535] hidden sm:inline">•</span>
            <span className="font-technical-coord text-[#e2e2ea] hidden sm:inline text-[11px]">
              {TELEMETRY_METRICS.coordinates}
            </span>
          </div>

          <div className="flex items-center gap-5 text-[#d4c4b0] text-[11px] font-medium">
            <span className="hidden md:flex items-center gap-1.5 text-[#e6c363]">
              <span className="material-symbols-outlined text-[15px]">nights_stay</span>
              {TELEMETRY_METRICS.bortleClass}
            </span>
            <span className="flex items-center gap-1.5 text-[#e2e2ea]">
              <span className="material-symbols-outlined text-[15px] text-[#ffc665]">circle</span>
              {TELEMETRY_METRICS.moonIllumination}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-[#e2e2ea]">
              <span className="material-symbols-outlined text-[15px] text-[#e6c363]">visibility</span>
              {TELEMETRY_METRICS.milkyWayCore}
            </span>
          </div>
        </div>
      </div>

      {/* Center Hero Copy */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 lg:px-16 w-full my-auto py-14">
        <div className="max-w-3xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282a30]/80 backdrop-blur-md border border-[#504535]/40 mb-5 shadow-lg">
            <span className="material-symbols-outlined text-[#e6c363] text-[16px]">stars</span>
            <span className="font-technical-coord uppercase tracking-widest text-[#ffe08f] text-[10.5px]">
              Certified IDA Dark Sky Sanctuary • Moab, Utah
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[62px] text-[#e2e2ea] mb-5 tracking-tight leading-[1.08] drop-shadow-xl text-balance">
            Where Earth Melts into the{' '}
            <span className="italic text-[#ffc665] font-serif-display font-normal">Infinite Cosmos</span>
          </h1>

          <p className="font-sans font-light text-base sm:text-lg text-[#d4c4b0] max-w-2xl mb-9 leading-relaxed drop-shadow-md">
            Experience rare nocturnal stillness in architectural glass geodesic sanctuaries sculpted into Utah's ancient red rock amphitheaters, beneath billions of crystalline desert stars.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onReserveClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_35px_rgba(229,169,60,0.35)] cursor-pointer"
            >
              <span>Reserve Your Stargazing Odyssey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreGuideClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#282a30]/70 backdrop-blur-lg border border-[#504535]/40 text-[#e2e2ea] hover:text-[#ffc665] hover:bg-[#33353b] transition-all duration-300 font-sans font-medium text-xs sm:text-sm uppercase tracking-wider shadow-lg cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#e6c363]" />
              <span>Explore Night Sky Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Live HUD Strip at bottom of hero */}
      <div className="relative z-10 w-full pb-9 px-5 lg:px-16">
        <div className="max-w-[1360px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#191c21]/90 backdrop-blur-2xl border border-[#504535]/30 rounded-xl p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {/* Item 1 */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#111319]/40">
            <div className="w-10 h-10 rounded-lg bg-[#282a30] border border-[#504535]/30 flex items-center justify-center text-[#ffc665] shrink-0">
              <span className="material-symbols-outlined text-[22px]">dark_mode</span>
            </div>
            <div>
              <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider">
                Atmospheric Seeing
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#e2e2ea] font-medium">
                {TELEMETRY_METRICS.atmosphericSeeing}
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#111319]/40">
            <div className="w-10 h-10 rounded-lg bg-[#282a30] border border-[#504535]/30 flex items-center justify-center text-[#e6c363] shrink-0">
              <span className="material-symbols-outlined text-[22px]">brightness_2</span>
            </div>
            <div>
              <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider">
                Lunar Phase
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#e2e2ea] font-medium">
                {TELEMETRY_METRICS.lunarPhase}
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#111319]/40">
            <div className="w-10 h-10 rounded-lg bg-[#282a30] border border-[#504535]/30 flex items-center justify-center text-[#e5a93c] shrink-0">
              <span className="material-symbols-outlined text-[22px]">cyclone</span>
            </div>
            <div>
              <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider">
                Milky Way Transit
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#e2e2ea] font-medium">
                {TELEMETRY_METRICS.milkyWayTransit}
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#111319]/40">
            <div className="w-10 h-10 rounded-lg bg-[#282a30] border border-[#504535]/30 flex items-center justify-center text-[#d3c9f2] shrink-0">
              <span className="material-symbols-outlined text-[22px]">flare</span>
            </div>
            <div>
              <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider">
                Upcoming Meteor Shower
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#e2e2ea] font-medium">
                {TELEMETRY_METRICS.upcomingShower}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
