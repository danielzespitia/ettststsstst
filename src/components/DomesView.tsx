import React, { useState } from 'react';
import { DOMES, DOME_INTERIOR_IMAGE } from '../data/sanctuaryData';
import { Dome } from '../types';
import { ArrowLeft, Check, Sparkles, Compass, Shield, Maximize2 } from 'lucide-react';

interface DomesViewProps {
  onBackToSanctuary: () => void;
  onBookDome: (domeId: string) => void;
}

export const DomesView: React.FC<DomesViewProps> = ({
  onBackToSanctuary,
  onBookDome,
}) => {
  const [selectedDome, setSelectedDome] = useState<Dome>(DOMES[0]);
  const [tintLevel, setTintLevel] = useState<number>(0); // 0 = transparent for night viewing, 100 = polarized daylight
  const [oculusOpen, setOculusOpen] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#111319] pt-28 pb-20 px-5 lg:px-16">
      <div className="max-w-[1360px] mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToSanctuary}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer font-technical-coord"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Sanctuary Overview</span>
          </button>
          <div className="text-xs font-technical-coord text-[#e6c363] uppercase">
            Moab Dark Sky Sanctuary • Latitude 38°27'44"N
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/40 text-[#ffc665] font-technical-coord text-[10px] uppercase tracking-widest mb-3">
            Geodesic Sanctuary Architecture
          </div>
          <h1 className="font-serif-display text-4xl lg:text-5xl text-[#e2e2ea] mb-4">
            Private Architectural Observatories
          </h1>
          <p className="font-sans font-light text-base text-[#d4c4b0] leading-relaxed">
            Engineered with acoustic sandstone insulation, heated travertine bedrock flooring, and computerized variable-tint oculus domes calibrated precisely to Utah’s Bortle Class 1 night sky.
          </p>
        </div>

        {/* Dome Tabs Selector */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-[#504535]/30 pb-4">
          {DOMES.map((dome) => {
            const isActive = selectedDome.id === dome.id;
            return (
              <button
                key={dome.id}
                onClick={() => setSelectedDome(dome)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#ffc665] text-[#432c00] shadow-[0_0_20px_rgba(229,169,60,0.3)] font-semibold'
                    : 'bg-[#191c21] text-[#d4c4b0] hover:text-[#ffc665] border border-[#504535]/40'
                }`}
              >
                <span>{dome.name}</span>
                <span className={`text-[10px] font-technical-coord ${isActive ? 'text-[#432c00]/80' : 'text-[#9d8f7c]'}`}>
                  {dome.sqFt} SQ FT
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Visual Dome Viewer with Interactive Oculus Controls */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#504535]/40 min-h-[440px] lg:min-h-[580px] group shadow-2xl">
              <img
                src={selectedDome.image}
                alt={selectedDome.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />

              {/* Tint overlay simulation */}
              <div
                className="absolute inset-0 bg-sky-950 transition-opacity duration-500 pointer-events-none"
                style={{ opacity: tintLevel / 100 * 0.7 }}
              />

              {/* Oculus status overlay */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="bg-[#0c0e13]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#504535]/40 text-[#ffc665] font-technical-coord text-[11px] uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  <span>{selectedDome.coordinates} • {selectedDome.elevation}</span>
                </div>

                <div className="bg-[#0c0e13]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#504535]/40 text-[#e6c363] font-technical-coord text-[10px] uppercase">
                  Oculus: {oculusOpen ? 'Unobstructed 100%' : 'Closed / Shielded'}
                </div>
              </div>

              {/* Bottom Interactive Oculus Cockpit Controller */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0c0e13]/90 backdrop-blur-xl p-4 rounded-xl border border-[#504535]/50 shadow-2xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-[20px]">tune</span>
                  <div>
                    <div className="text-[11px] font-technical-coord text-[#ffc665] uppercase">
                      Variable-Tint Electrochromic Oculus
                    </div>
                    <div className="text-xs text-[#9d8f7c]">
                      {tintLevel === 0 ? "0% Tint (Crystal Night Sky Observation)" : `${tintLevel}% Polarized Daylight Filter`}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={tintLevel}
                    onChange={(e) => setTintLevel(Number(e.target.value))}
                    className="w-24 sm:w-32 accent-[#ffc665] cursor-pointer"
                  />
                  <button
                    onClick={() => setOculusOpen(!oculusOpen)}
                    className="px-3 py-1.5 rounded-lg bg-[#282a30] hover:bg-[#33353b] text-xs text-[#e2e2ea] border border-[#504535]/40 cursor-pointer font-sans"
                  >
                    {oculusOpen ? 'Polarize' : 'Open Sky'}
                  </button>
                </div>
              </div>
            </div>

            {/* In-Room Research Telescope Specs Card */}
            <div className="bg-[#191c21] rounded-xl p-5 border border-[#504535]/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#282a30] flex items-center justify-center text-[#ffc665] shrink-0 border border-[#504535]/40">
                <span className="material-symbols-outlined text-[20px]">filter_center_focus</span>
              </div>
              <div>
                <div className="font-technical-coord text-[11px] text-[#e6c363] uppercase tracking-wider mb-1">
                  Dedicated In-Suite Telescope Optics
                </div>
                <div className="font-sans font-semibold text-sm text-[#e2e2ea] mb-1">
                  {selectedDome.telescope}
                </div>
                <p className="font-sans font-light text-xs text-[#9d8f7c] leading-relaxed">
                  Calibrated nightly by our astrophysics fellows. Motorized goto mount synced with your villa's iPad celestial coordinates map for instant celestial object tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dome Specifications & Direct Booking */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#191c21] rounded-2xl p-7 lg:p-9 border border-[#504535]/40 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-technical-coord text-[#e6c363] uppercase text-[11px] tracking-wider">
                  {selectedDome.tagline}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#282a30] text-[#ffc665] text-xs font-sans border border-[#ffc665]/20">
                  {selectedDome.badge}
                </span>
              </div>

              <h2 className="font-serif-display text-3xl text-[#e2e2ea] mb-4">
                {selectedDome.name}
              </h2>

              <p className="font-sans font-light text-sm text-[#d4c4b0] mb-6 leading-relaxed">
                {selectedDome.description}
              </p>

              {/* Architectural Highlights */}
              <div className="mb-6">
                <h4 className="font-technical-coord text-xs text-[#9d8f7c] uppercase tracking-wider mb-3">
                  Signature Architectural Features
                </h4>
                <div className="space-y-2">
                  {selectedDome.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#e2e2ea]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffc665]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bespoke Amenities Grid */}
              <div className="mb-8">
                <h4 className="font-technical-coord text-xs text-[#9d8f7c] uppercase tracking-wider mb-3">
                  Nocturnal Amenities Matrix
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDome.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11.5px] text-[#d4c4b0] bg-[#1d2025] p-2.5 rounded-lg border border-[#504535]/20">
                      <Check className="w-3.5 h-3.5 text-[#ffc665] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-6 border-t border-[#504535]/30 flex items-center justify-between">
              <div>
                <span className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase block">
                  Nightly Sanctuary Tariff
                </span>
                <div className="font-serif-display text-3xl text-[#ffc665]">
                  ${selectedDome.pricePerNight.toLocaleString()}{' '}
                  <span className="font-sans text-xs text-[#d4c4b0] font-normal">/ night</span>
                </div>
              </div>

              <button
                onClick={() => onBookDome(selectedDome.id)}
                className="px-6 py-3 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_25px_rgba(229,169,60,0.35)] cursor-pointer"
              >
                Reserve This Dome
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
