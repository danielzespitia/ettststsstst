import React from 'react';
import { CALENDAR_EVENTS } from '../data/sanctuaryData';
import { CelestialEvent } from '../types';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface AlmanacSectionProps {
  onReserveDate: (event: CelestialEvent) => void;
  onViewFullCalendar: () => void;
}

export const AlmanacSection: React.FC<AlmanacSectionProps> = ({
  onReserveDate,
  onViewFullCalendar,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 lg:px-16 bg-[#0c0e13]" id="calendar">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ffc665] text-[18px]">calendar_today</span>
              <span className="font-technical-coord uppercase tracking-widest text-[#ffc665] text-[11px] font-medium">
                Astrological Almanac • Optimal Windows
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#e2e2ea]">
              Upcoming Astronomical Windows
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[#9d8f7c] font-sans text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e6c363] inline-block shadow-[0_0_8px_#e6c363]" />
            <span>Prime Bortle 1 Dark Sky Window</span>
          </div>
        </div>

        {/* Almanac Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CALENDAR_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-[#1d2025] rounded-2xl p-6 flex flex-col justify-between border border-[#504535]/30 shadow-xl hover:border-[#ffc665]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#ffc665]/20 text-[#ffc665] font-technical-coord text-[11px] uppercase tracking-wider font-medium">
                    {event.dateRange}
                  </span>
                  <span className="material-symbols-outlined text-[#e6c363] text-[20px]">
                    {event.status === 'waitlist' ? 'auto_awesome' : 'mobile_arrow_up_right'}
                  </span>
                </div>

                <h4 className="font-sans text-base sm:text-lg text-[#e2e2ea] font-semibold mb-2">
                  {event.title}
                </h4>

                <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] mb-5 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#504535]/20 flex items-center justify-between">
                <span className={`font-sans text-xs ${event.status === 'few_left' ? 'text-[#e6c363] font-medium' : event.status === 'waitlist' ? 'text-[#d3c9f2]' : 'text-[#e2e2ea]'}`}>
                  {event.statusText}
                </span>

                <button
                  onClick={() => onReserveDate(event)}
                  className="font-sans text-xs text-[#ffc665] uppercase tracking-wider font-semibold hover:text-[#fabc4d] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{event.status === 'waitlist' ? 'Join Waitlist' : 'Reserve Date'}</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
