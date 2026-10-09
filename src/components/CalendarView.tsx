import React from 'react';
import { CALENDAR_EVENTS } from '../data/sanctuaryData';
import { CelestialEvent } from '../types';
import { ArrowLeft, Calendar as CalendarIcon, Moon, Sparkles, Star, Flame } from 'lucide-react';

interface CalendarViewProps {
  onBackToSanctuary: () => void;
  onSelectEvent: (event: CelestialEvent) => void;
}

const LUNAR_PHASES = [
  { name: 'Astronomical New Moon', illumination: '0% Moon', dates: 'Aug 11 - 15', darkSkyScore: '10/10 (Pristine Void)', status: 'Prime Astrophotography' },
  { name: 'Waxing Crescent', illumination: '12% Moon', dates: 'Aug 16 - 20', darkSkyScore: '9.2/10', status: 'Deep Sky & Crater Shadows' },
  { name: 'First Quarter', illumination: '50% Moon', dates: 'Aug 21 - 25', darkSkyScore: '7.5/10', status: 'Planetary & Lunar Topography' },
  { name: 'Super Hunter Moon', illumination: '100% Moon', dates: 'Aug 26 - 31', darkSkyScore: '6.0/10', status: 'Moonlit Canyon Exploration' },
];

export const CalendarView: React.FC<CalendarViewProps> = ({
  onBackToSanctuary,
  onSelectEvent,
}) => {
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
            Astronomical Almanac 2025–2026
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/40 text-[#ffc665] font-technical-coord text-[10px] uppercase tracking-widest mb-3">
            Celestial Calendar & Almanacs
          </div>
          <h1 className="font-serif-display text-4xl lg:text-5xl text-[#e2e2ea] mb-4">
            Optimal Stargazing Windows
          </h1>
          <p className="font-sans font-light text-base text-[#d4c4b0] leading-relaxed">
            Astræa rates each nocturnal period against lunar phase illumination, galactic core altitude, and historical atmospheric seeing coefficients to guarantee transformative stargazing.
          </p>
        </div>

        {/* Lunar Phase Observing Quality Strip */}
        <div className="bg-[#191c21] rounded-2xl p-6 lg:p-8 border border-[#504535]/40 mb-14 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Moon className="w-5 h-5 text-[#ffc665]" />
            <h3 className="font-serif-display text-xl text-[#e2e2ea]">
              Current Lunar Phase Observing Guide
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LUNAR_PHASES.map((phase, idx) => (
              <div key={idx} className="bg-[#1d2025] rounded-xl p-4 border border-[#504535]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-technical-coord text-[10.5px] text-[#ffc665] uppercase">
                    {phase.dates}
                  </span>
                  <span className="text-xs text-[#e6c363] font-medium">{phase.illumination}</span>
                </div>
                <div className="font-sans font-semibold text-sm text-[#e2e2ea] mb-1">
                  {phase.name}
                </div>
                <div className="font-technical-coord text-[10px] text-[#9d8f7c] mb-2 uppercase">
                  Quality: {phase.darkSkyScore}
                </div>
                <div className="text-xs text-[#d4c4b0] font-light">
                  {phase.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Astronomical Events */}
        <div className="mb-14">
          <h2 className="font-serif-display text-2xl lg:text-3xl text-[#e2e2ea] mb-6">
            Premier Celestial Windows
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CALENDAR_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-[#191c21] rounded-2xl p-7 border border-[#504535]/40 hover:border-[#ffc665]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#ffc665]/20 text-[#ffc665] font-technical-coord text-xs uppercase tracking-wider">
                      {event.dateRange}
                    </span>
                    <span className="text-xs font-sans text-[#e6c363]">
                      {event.statusText}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#e2e2ea] mb-2">
                    {event.title}
                  </h3>

                  <p className="font-sans font-light text-sm text-[#d4c4b0] mb-5 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="bg-[#1d2025] rounded-xl p-4 border border-[#504535]/30 mb-6 space-y-2 text-xs font-sans">
                    <div className="flex justify-between text-[#9d8f7c]">
                      <span>Moon Illumination:</span>
                      <span className="text-[#e2e2ea] font-medium">{event.moonIllumination}</span>
                    </div>
                    <div className="flex justify-between text-[#9d8f7c]">
                      <span>Dark Sky Rating:</span>
                      <span className="text-[#ffc665] font-medium">{event.bortleRating}</span>
                    </div>
                    <div className="pt-2 border-t border-[#504535]/20 text-[#d4c4b0]">
                      <span className="font-semibold text-[#e2e2ea]">Key Highlights: </span>
                      {event.highlights.join(' • ')}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectEvent(event)}
                  className="w-full py-3 rounded-xl bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all shadow-[0_0_20px_rgba(229,169,60,0.3)] cursor-pointer text-center"
                >
                  {event.status === 'waitlist' ? 'Join Celestial Waitlist' : 'Reserve Odyssey For This Window'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
