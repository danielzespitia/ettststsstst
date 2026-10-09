import React, { useState } from 'react';
import { TELEMETRY_METRICS } from '../data/sanctuaryData';
import { ArrowLeft, Compass, Eye, Filter, Sparkles, Orbit, Radio, Zap } from 'lucide-react';

interface AstronomyViewProps {
  onBackToSanctuary: () => void;
  onOpenBooking: () => void;
}

interface Target {
  id: string;
  name: string;
  catalog: string;
  type: string;
  constellation: string;
  distance: string;
  magnitude: string;
  description: string;
  colorScheme: string;
  iconBg: string;
}

const TARGETS: Target[] = [
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy',
    catalog: 'M31 / NGC 224',
    type: 'Barred Spiral Galaxy',
    constellation: 'Andromeda',
    distance: '2.537 Million Light-Years',
    magnitude: '3.44 (Naked Eye Visible in Bortle 1)',
    description: 'The premier jewel of the autumn desert sky. Under Moab’s pristine void, the core shines with billions of ancient stellar masses flanked by dark dust lanes.',
    colorScheme: 'from-blue-900/60 via-indigo-950/80 to-purple-950/90',
    iconBg: 'bg-indigo-500/20 text-indigo-300'
  },
  {
    id: 'saturn',
    name: 'Saturn & Ring System',
    catalog: 'Solar System Node VI',
    type: 'Gas Giant with Ring System',
    constellation: 'Aquarius',
    distance: '1.34 Billion km (74.5 Light-Minutes)',
    magnitude: '0.52 (High Zenith)',
    description: 'The Cassini division between rings A and B is razor-sharp through our 14-inch research optics. Five major icy moons visible as diamond pinpoints.',
    colorScheme: 'from-amber-900/60 via-yellow-950/80 to-[#111319]',
    iconBg: 'bg-amber-500/20 text-amber-300'
  },
  {
    id: 'ring-nebula',
    name: 'The Ring Nebula',
    catalog: 'M57 / NGC 6720',
    type: 'Planetary Nebula',
    constellation: 'Lyra',
    distance: '2,570 Light-Years',
    magnitude: '8.80 (Rich Green-Blue Shell)',
    description: 'A luminous smoke-ring shroud expelled by a dying white dwarf star. High-transmission OIII filter isolates the glowing doubly-ionized oxygen shell.',
    colorScheme: 'from-emerald-950/60 via-teal-950/80 to-sky-950/90',
    iconBg: 'bg-emerald-500/20 text-emerald-300'
  },
  {
    id: 'perseids',
    name: 'Perseid Meteor Radiant',
    catalog: 'Swift-Tuttle Debris Field',
    type: 'Annual Cometary Meteor Stream',
    constellation: 'Perseus',
    distance: '100 km (Earth Upper Atmosphere)',
    magnitude: '-3.5 Peak Fireballs',
    description: 'Cometary dust grains vaporizing at 59 km/second in Earth’s mesosphere, leaving multi-second ionization trails visible from your dome bed.',
    colorScheme: 'from-amber-950/70 via-red-950/70 to-[#111319]',
    iconBg: 'bg-yellow-500/20 text-yellow-300'
  }
];

export const AstronomyView: React.FC<AstronomyViewProps> = ({
  onBackToSanctuary,
  onOpenBooking,
}) => {
  const [selectedTarget, setSelectedTarget] = useState<Target>(TARGETS[0]);
  const [filterMode, setFilterMode] = useState<'true-color' | 'h-alpha' | 'oiii' | 'luminance'>('true-color');
  const [magnification, setMagnification] = useState(150);

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
          <div className="flex items-center gap-2 text-xs font-technical-coord text-[#ffc665] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ffc665] animate-pulse" />
            <span>Astræa Research Observatory • Online</span>
          </div>
        </div>

        {/* Title & Introduction */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/40 text-[#ffc665] font-technical-coord text-[10px] uppercase tracking-widest mb-3">
            Moab Dark Sky Sanctuary Telemetry Deck
          </div>
          <h1 className="font-serif-display text-4xl lg:text-5xl text-[#e2e2ea] mb-4">
            Observatory Optical Telemetry
          </h1>
          <p className="font-sans font-light text-base text-[#d4c4b0] leading-relaxed">
            Utah's Colorado Plateau delivers an average of 300 cloudless nights per year, zero urban light dome, and atmospheric seeing conditions routinely measured below 0.50 arcseconds.
          </p>
        </div>

        {/* Live Gauges Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#191c21] border border-[#504535]/30 rounded-xl p-4">
            <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase mb-1">
              Sky Quality Meter (SQM)
            </div>
            <div className="font-sans text-xl text-[#ffc665] font-bold">
              {TELEMETRY_METRICS.skyQualityMeter}
            </div>
            <div className="text-[11px] text-[#e2e2ea]/60 mt-1">Bortle 1 (Pristine Black Void)</div>
          </div>

          <div className="bg-[#191c21] border border-[#504535]/30 rounded-xl p-4">
            <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase mb-1">
              Atmospheric Seeing (FWHM)
            </div>
            <div className="font-sans text-xl text-[#e6c363] font-bold">
              0.42 Arcsec
            </div>
            <div className="text-[11px] text-[#e2e2ea]/60 mt-1">Sub-arcsecond diffraction limit</div>
          </div>

          <div className="bg-[#191c21] border border-[#504535]/30 rounded-xl p-4">
            <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase mb-1">
              Zenith Transparency
            </div>
            <div className="font-sans text-xl text-[#e2e2ea] font-bold">
              {TELEMETRY_METRICS.zenithTransparency}
            </div>
            <div className="text-[11px] text-[#e2e2ea]/60 mt-1">Zero aerosols / dry desert air</div>
          </div>

          <div className="bg-[#191c21] border border-[#504535]/30 rounded-xl p-4">
            <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase mb-1">
              Milky Way Core Transit
            </div>
            <div className="font-sans text-xl text-[#d3c9f2] font-bold">
              21:40 MST
            </div>
            <div className="text-[11px] text-[#e2e2ea]/60 mt-1">Sagittarius-Scorpius zenith window</div>
          </div>
        </div>

        {/* Interactive Telescope Viewfinder Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Simulated Optical Eyepiece Viewport */}
          <div className="lg:col-span-8 bg-[#0c0e13] rounded-2xl border border-[#504535]/50 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Viewport Reticle Area */}
            <div className="relative w-full aspect-square max-h-[520px] mx-auto rounded-full border-2 border-[#504535]/60 overflow-hidden flex items-center justify-center bg-[#07090e] shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]">
              {/* Starfield simulation gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${selectedTarget.colorScheme} transition-all duration-700`}
                style={{
                  filter:
                    filterMode === 'h-alpha'
                      ? 'hue-rotate(340deg) saturate(250%)'
                      : filterMode === 'oiii'
                      ? 'hue-rotate(140deg) saturate(220%)'
                      : filterMode === 'luminance'
                      ? 'grayscale(100%) contrast(150%)'
                      : 'none',
                  transform: `scale(${magnification / 120})`,
                }}
              />

              {/* Optical Reticle Crosshairs */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-full h-px bg-[#e2e2ea]/15" />
                <div className="h-full w-px bg-[#e2e2ea]/15 absolute" />
                <div className="w-48 h-48 rounded-full border border-[#ffc665]/20 absolute" />
                <div className="w-80 h-80 rounded-full border border-dashed border-[#e2e2ea]/10 absolute" />
                <div className="w-6 h-6 rounded-full border border-[#ffc665]/50 absolute" />
              </div>

              {/* Target Visual Representation */}
              <div className="relative z-10 text-center pointer-events-none p-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-[#ffc665]/10 backdrop-blur-sm border border-[#ffc665]/30 flex items-center justify-center mb-3 shadow-[0_0_50px_rgba(255,198,101,0.25)]">
                  <span className="material-symbols-outlined text-4xl text-[#ffc665]">
                    {selectedTarget.id === 'saturn' ? 'circle' : 'flare'}
                  </span>
                </div>
                <div className="font-serif-display text-2xl text-[#e2e2ea] drop-shadow-md">
                  {selectedTarget.name}
                </div>
                <div className="font-technical-coord text-xs text-[#ffc665] uppercase tracking-wider">
                  {selectedTarget.catalog} • {magnification}x Magnification
                </div>
              </div>

              {/* Reticle Telemetry overlay */}
              <div className="absolute bottom-6 text-center font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-widest pointer-events-none">
                Celestron 14" SCT • f/10 Focal Ratio • 3910mm Focal Length
              </div>
            </div>

            {/* Controller Controls Toolbar */}
            <div className="mt-6 pt-5 border-t border-[#504535]/30 flex flex-wrap items-center justify-between gap-4">
              {/* Filter Selector */}
              <div className="flex items-center gap-2">
                <span className="font-technical-coord text-xs text-[#9d8f7c] uppercase mr-1">
                  Optical Filter:
                </span>
                {(['true-color', 'h-alpha', 'oiii', 'luminance'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setFilterMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-technical-coord uppercase transition-all cursor-pointer ${
                      filterMode === mode
                        ? 'bg-[#ffc665] text-[#432c00] font-semibold'
                        : 'bg-[#191c21] text-[#d4c4b0] hover:text-[#ffc665] border border-[#504535]/40'
                    }`}
                  >
                    {mode.replace('-', ' ')}
                  </button>
                ))}
              </div>

              {/* Magnification Slider */}
              <div className="flex items-center gap-3">
                <span className="font-technical-coord text-xs text-[#9d8f7c] uppercase">
                  Optics: {magnification}X
                </span>
                <input
                  type="range"
                  min="80"
                  max="320"
                  step="20"
                  value={magnification}
                  onChange={(e) => setMagnification(Number(e.target.value))}
                  className="w-28 sm:w-36 accent-[#ffc665] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right: Target Selector & Target Astrophysics Notes */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#191c21] rounded-2xl p-6 lg:p-8 border border-[#504535]/40">
            <div>
              <div className="font-technical-coord text-[#e6c363] text-xs uppercase tracking-wider mb-2">
                Select Active Celestial Target
              </div>
              <h3 className="font-serif-display text-2xl text-[#e2e2ea] mb-5">
                Tonight’s High-Zenith Targets
              </h3>

              <div className="space-y-3 mb-8">
                {TARGETS.map((t) => {
                  const isSelected = selectedTarget.id === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTarget(t)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#282a30] border-[#ffc665] shadow-[0_0_15px_rgba(255,198,101,0.2)]'
                          : 'bg-[#1d2025] border-[#504535]/30 hover:border-[#ffc665]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans font-semibold text-sm text-[#e2e2ea]">
                          {t.name}
                        </span>
                        <span className="font-technical-coord text-[10px] text-[#ffc665] uppercase">
                          {t.constellation}
                        </span>
                      </div>
                      <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase">
                        {t.catalog} • {t.magnitude}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Target Deep Info */}
              <div className="bg-[#1d2025] rounded-xl p-4 border border-[#504535]/30 mb-6">
                <div className="font-technical-coord text-[10.5px] text-[#ffc665] uppercase mb-2">
                  Astrophysics Briefing
                </div>
                <div className="space-y-2 text-xs font-sans">
                  <div className="flex justify-between text-[#9d8f7c]">
                    <span>Distance from Sanctuary:</span>
                    <span className="text-[#e2e2ea] font-medium">{selectedTarget.distance}</span>
                  </div>
                  <div className="flex justify-between text-[#9d8f7c]">
                    <span>Classification:</span>
                    <span className="text-[#e2e2ea] font-medium">{selectedTarget.type}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#d4c4b0] font-light leading-relaxed">
                  {selectedTarget.description}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_20px_rgba(229,169,60,0.3)] cursor-pointer text-center"
            >
              Book an Observatory Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
