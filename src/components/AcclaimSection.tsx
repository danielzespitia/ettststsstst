import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const AcclaimSection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 lg:px-16 bg-[#111319]">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Quote Block */}
          <div className="lg:col-span-8 bg-[#191c21] rounded-2xl p-7 lg:p-12 border border-[#504535]/30 shadow-2xl relative overflow-hidden">
            <span className="material-symbols-outlined text-[56px] text-[#ffc665]/20 absolute top-6 right-6 select-none pointer-events-none">
              format_quote
            </span>

            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[#ffc665] text-[18px]">
                  star
                </span>
              ))}
              <span className="font-technical-coord text-[#9d8f7c] ml-2 uppercase tracking-widest text-[10.5px]">
                Architectural Digest Grand Award
              </span>
            </div>

            <blockquote className="font-serif-display text-xl sm:text-2xl lg:text-3xl text-[#e2e2ea] italic mb-8 leading-snug">
              “Astræa does what no other luxury retreat on the planet can accomplish: it treats the infinite abyss of deep space not merely as scenery, but as the master architect of the soul.”
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#33353b] border border-[#ffc665]/30 flex items-center justify-center text-[#ffc665] font-serif-display font-bold text-xl">
                AD
              </div>
              <div>
                <div className="font-sans text-base text-[#e2e2ea] font-semibold">
                  Julian Sinclair
                </div>
                <div className="font-sans font-light text-xs text-[#9d8f7c]">
                  Contributing Architectural Editor • Condé Nast Traveler Top 10 World Resorts
                </div>
              </div>
            </div>
          </div>

          {/* Bortle 1 Seal Card */}
          <div className="lg:col-span-4 bg-[#282a30] rounded-2xl p-8 lg:p-10 text-center flex flex-col items-center justify-center border border-[#504535]/40 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#ffc665]/10 border border-[#ffc665]/30 flex items-center justify-center text-[#ffc665] mb-5 shadow-[0_0_20px_rgba(255,198,101,0.2)]">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <h3 className="font-serif-display text-2xl text-[#e2e2ea] mb-1">
              Bortle Class 1
            </h3>

            <div className="font-technical-coord text-[#e6c363] mb-3 uppercase tracking-widest text-[11px]">
              Zero Artificial Luminance
            </div>

            <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] mb-6 leading-relaxed">
              Certified by the International Dark-Sky Association. Sky quality meter readings consistently surpass 21.95 mag/arcsec².
            </p>

            <div className="w-full py-2.5 px-4 bg-[#1d2025] border border-[#504535]/40 rounded-xl text-[#e2e2ea] font-technical-coord text-[11px] tracking-wider">
              Moab Canyon Ledge • Elevation 5,280 ft
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
