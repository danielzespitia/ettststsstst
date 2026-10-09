import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

interface BookingStripProps {
  onCheckRates: (arrival: string, departure: string, domeId: string) => void;
  selectedDomeId?: string;
}

export const BookingStrip: React.FC<BookingStripProps> = ({
  onCheckRates,
  selectedDomeId = 'nebula',
}) => {
  const [arrivalDate, setArrivalDate] = useState('2025-08-11');
  const [departureDate, setDepartureDate] = useState('2025-08-15');
  const [dome, setDome] = useState(selectedDomeId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckRates(arrivalDate, departureDate, dome);
  };

  return (
    <section className="w-full py-10 px-5 lg:px-16 bg-[#191c21] shadow-2xl border-t border-[#504535]/20" id="booking-strip">
      <div className="max-w-[1360px] mx-auto">
        <div className="bg-[#282a30]/90 backdrop-blur-2xl rounded-2xl p-6 lg:p-8 border border-[#504535]/40 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="shrink-0">
              <span className="font-technical-coord text-[#e6c363] uppercase tracking-widest text-[11px] block mb-1">
                Direct Sanctuary Reservation
              </span>
              <h3 className="font-serif-display text-2xl lg:text-3xl text-[#e2e2ea]">
                Plan Your Stargazing Odyssey
              </h3>
            </div>

            {/* Form elements grid */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full lg:max-w-3xl">
              {/* Check In */}
              <div className="flex flex-col bg-[#1d2025] px-4 py-2.5 rounded-xl border border-[#504535]/40 focus-within:border-[#ffc665]">
                <label className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider mb-1">
                  Arrival Date
                </label>
                <input
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="bg-transparent text-[#e2e2ea] font-sans text-sm focus:outline-none cursor-pointer [color-scheme:dark]"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col bg-[#1d2025] px-4 py-2.5 rounded-xl border border-[#504535]/40 focus-within:border-[#ffc665]">
                <label className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider mb-1">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="bg-transparent text-[#e2e2ea] font-sans text-sm focus:outline-none cursor-pointer [color-scheme:dark]"
                />
              </div>

              {/* Suite Selection */}
              <div className="flex flex-col bg-[#1d2025] px-4 py-2.5 rounded-xl border border-[#504535]/40 focus-within:border-[#ffc665]">
                <label className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider mb-1">
                  Sanctuary Dome
                </label>
                <select
                  value={dome}
                  onChange={(e) => setDome(e.target.value)}
                  className="bg-transparent text-[#e2e2ea] font-sans text-sm focus:outline-none cursor-pointer"
                >
                  <option value="zenith" className="bg-[#1d2025] text-[#e2e2ea]">The Zenith Pavilion</option>
                  <option value="nebula" className="bg-[#1d2025] text-[#e2e2ea]">The Nebula Suite</option>
                  <option value="eclipse" className="bg-[#1d2025] text-[#e2e2ea]">The Eclipse Casita</option>
                </select>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_24px_rgba(229,169,60,0.35)] cursor-pointer"
              >
                <span>Check Rates</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>
            </form>
          </div>

          <div className="mt-4 pt-3 border-t border-[#504535]/30 flex flex-wrap items-center justify-between text-[#9d8f7c] font-sans text-xs gap-3">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span>• Full deposit refundable up to 30 days prior</span>
              <span>• Includes all nocturnal telemetry sessions</span>
              <span>• Valet EV charging & private airstrip transfer included</span>
            </div>
            <div className="text-[#e6c363] font-technical-coord uppercase tracking-wider text-[11px]">
              Concierge Direct: +1 (435) 259-7827
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
