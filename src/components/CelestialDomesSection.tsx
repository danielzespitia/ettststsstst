import React from 'react';
import { DOMES, DOME_INTERIOR_IMAGE } from '../data/sanctuaryData';
import { Dome } from '../types';
import { CheckCircle2, Sparkles, Flame, Eye, Coffee } from 'lucide-react';

interface CelestialDomesSectionProps {
  onSelectDome: (domeId: string) => void;
  onExploreMoreDomes: () => void;
}

export const CelestialDomesSection: React.FC<CelestialDomesSectionProps> = ({
  onSelectDome,
  onExploreMoreDomes,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 lg:px-16 bg-[#111319]" id="celestial-domes">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-[#ffc665]" />
              <span className="font-technical-coord text-[#ffc665] uppercase tracking-widest text-[11px] font-medium">
                Private Observatories
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#e2e2ea]">
              Dwell Beneath the Constellations
            </h2>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-[#d4c4b0] max-w-lg leading-relaxed">
            Each custom geodesic pavilion is precision-oriented to primary galactic coordinate nodes, dissolving the boundary between five-star desert living and deep stellar contemplation.
          </p>
        </div>

        {/* Feature Spotlight (Interior Geodesic Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14 bg-[#191c21] rounded-2xl overflow-hidden border border-[#504535]/30 shadow-2xl">
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[560px] overflow-hidden group">
            <img
              alt="Interior view of an ultra-luxury stargazing glass dome suite in Utah desert at night, king bed with plush organic linens, modern brass telescope on tripod pointed toward the crystalline dark starry night sky"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={DOME_INTERIOR_IMAGE}
              loading="lazy"
            />
            {/* Overlay Gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111319]/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute top-5 left-5 bg-[#0c0e13]/85 backdrop-blur-md border border-[#504535]/40 px-3.5 py-1.5 rounded-full text-[#e6c363] font-technical-coord text-[10.5px] uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <span className="material-symbols-outlined text-[15px] text-[#ffc665]">search</span>
              <span>Celestron 14" SCT Research Telescope In-Room</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-7 lg:p-10 flex flex-col justify-between bg-[#1d2025]">
            <div>
              <div className="font-technical-coord text-[#e6c363] mb-2 uppercase tracking-widest text-[11px]">
                Sanctuary Architecture • Node Alpha
              </div>
              <h3 className="font-serif-display text-2xl lg:text-3xl text-[#e2e2ea] mb-3">
                Retractable Glass Oculus & Heated Travertine
              </h3>
              <p className="font-sans font-light text-sm text-[#d4c4b0] mb-6 leading-relaxed">
                Equipped with computerized variable-tint glass skylights that automatically polarize at daybreak and open completely under cloudless night conditions. An integrated iPad coordinates your personal telescope drive with the villa's acoustic ambient starfield track.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <div className="font-sans font-semibold text-sm text-[#e2e2ea]">
                      Motorized Panoramic Skylight
                    </div>
                    <div className="font-sans font-light text-xs text-[#9d8f7c] leading-relaxed">
                      Whisper-quiet astronomical aperture opening directly above the handmade cashmere mattress.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <div className="font-sans font-semibold text-sm text-[#e2e2ea]">
                      Hand-Hammered Copper Soaking Tub
                    </div>
                    <div className="font-sans font-light text-xs text-[#9d8f7c] leading-relaxed">
                      Framed by canyon monolith views and infused with locally harvested pinon and sage essences.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <div className="font-sans font-semibold text-sm text-[#e2e2ea]">
                      iPad Celestial Command Center
                    </div>
                    <div className="font-sans font-light text-xs text-[#9d8f7c] leading-relaxed">
                      Syncs bedroom illumination, motorized telescope targeting, and ambient spatial frequencies.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#504535]/30 flex items-center justify-between">
              <div>
                <span className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider block">
                  Signature Experience
                </span>
                <span className="font-serif-display text-2xl text-[#ffc665]">
                  From $1,850{' '}
                  <span className="font-sans text-xs text-[#d4c4b0] font-normal">/ night</span>
                </span>
              </div>
              <button
                onClick={() => onSelectDome('nebula')}
                className="px-6 py-2.5 bg-[#ffc665] text-[#432c00] rounded-full font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all shadow-[0_0_20px_rgba(229,169,60,0.3)] cursor-pointer"
              >
                Select Dome
              </button>
            </div>
          </div>
        </div>

        {/* 3-Tier Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DOMES.map((dome) => (
            <div
              key={dome.id}
              className="bg-[#191c21] rounded-2xl p-7 flex flex-col justify-between hover:bg-[#1d2025] border border-[#504535]/30 hover:border-[#ffc665]/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-technical-coord text-[#e6c363] uppercase tracking-widest text-[10.5px]">
                    {dome.tagline}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#282a30] text-[#ffc665] rounded-full font-sans text-[10.5px] border border-[#ffc665]/20 font-medium">
                    {dome.badge}
                  </span>
                </div>

                <h4 className="font-serif-display text-2xl text-[#e2e2ea] mb-2 group-hover:text-[#ffc665] transition-colors">
                  {dome.name}
                </h4>

                <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] mb-5 leading-relaxed">
                  {dome.description}
                </p>

                <ul className="space-y-2.5 mb-7 text-[#e2e2ea] text-xs font-light">
                  {dome.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e6c363]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-[#504535]/30 flex items-center justify-between">
                <div>
                  <span className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase">
                    Starting At
                  </span>
                  <div className="font-sans text-lg text-[#e2e2ea] font-semibold">
                    ${dome.pricePerNight.toLocaleString()}{' '}
                    <span className="text-xs text-[#9d8f7c] font-light">/ night</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectDome(dome.id)}
                  className="px-4 py-2 bg-[#282a30] text-[#ffc665] hover:bg-[#ffc665] hover:text-[#432c00] rounded-lg font-sans font-medium text-xs tracking-wide transition-all border border-[#504535]/50 cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
