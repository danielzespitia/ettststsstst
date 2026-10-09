import React, { useState } from 'react';
import { DOMES, EXPERIENCES } from '../data/sanctuaryData';
import { BookingDetails } from '../types';
import { X, Check, Calendar, User, Sparkles, ShieldCheck, Download, Plane } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomeId?: string;
  initialArrival?: string;
  initialDeparture?: string;
  initialExperienceId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialDomeId = 'nebula',
  initialArrival = '2025-08-11',
  initialDeparture = '2025-08-15',
  initialExperienceId,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [arrivalDate, setArrivalDate] = useState(initialArrival);
  const [departureDate, setDepartureDate] = useState(initialDeparture);
  const [domeId, setDomeId] = useState(initialDomeId);
  const [guests, setGuests] = useState(2);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>(
    initialExperienceId ? [initialExperienceId] : ['laser-tours']
  );
  const [fullName, setFullName] = useState('Elena Vance');
  const [email, setEmail] = useState('elena.vance@celestial.io');
  const [phone, setPhone] = useState('+1 (555) 392-8821');
  const [specialRequests, setSpecialRequests] = useState('Interested in Phase One astrophotography session during the Perseids peak.');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentDome = DOMES.find((d) => d.id === domeId) || DOMES[1];

  // Calculate nights
  const start = new Date(arrivalDate);
  const end = new Date(departureDate);
  const nights = Math.max(1, Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) || 4);

  // Price calculations
  const lodgingTotal = currentDome.pricePerNight * nights;
  const experienceAddonsTotal = selectedExperiences.reduce((sum, expId) => {
    if (expId === 'astrophotography') return sum + 450;
    if (expId === 'sound-bath') return sum + 180 * guests;
    if (expId === 'michelin-tasting') return sum + 380 * guests;
    return sum;
  }, 0);
  const darkSkySanctuaryFee = 150; // IDA sanctuary conservation fee
  const grandTotal = lodgingTotal + experienceAddonsTotal + darkSkySanctuaryFee;

  const handleToggleExp = (id: string) => {
    if (selectedExperiences.includes(id)) {
      setSelectedExperiences(selectedExperiences.filter((item) => item !== id));
    } else {
      setSelectedExperiences([...selectedExperiences, id]);
    }
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `AST-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(randomCode);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-4xl bg-[#191c21] border border-[#504535]/50 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="px-6 py-5 bg-[#1d2025] border-b border-[#504535]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ffc665]/20 text-[#ffc665] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl text-[#e2e2ea]">
                {step === 1 ? 'Sanctuary Odyssey Reservation' : 'Odyssey Confirmed • Astral Pass'}
              </h3>
              <p className="font-technical-coord text-[10px] text-[#e6c363] uppercase">
                Bortle Class 1 • Moab Dark Sky Reserve
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#9d8f7c] hover:text-[#e2e2ea] rounded-lg bg-[#282a30]/50 hover:bg-[#282a30] transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {step === 1 ? (
          <form onSubmit={handleConfirmReservation} className="p-6 sm:p-8 space-y-8">
            {/* Step 1: Dome & Date Selection */}
            <div>
              <h4 className="font-technical-coord text-xs text-[#ffc665] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffc665]/20 text-[#ffc665] text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Sanctuary Dome & Observing Window</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {DOMES.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDomeId(d.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      domeId === d.id
                        ? 'bg-[#282a30] border-[#ffc665] shadow-[0_0_15px_rgba(255,198,101,0.2)]'
                        : 'bg-[#1d2025] border-[#504535]/30 hover:border-[#ffc665]/40'
                    }`}
                  >
                    <div className="text-[10px] font-technical-coord text-[#e6c363] uppercase mb-1">
                      {d.sqFt} SQ FT • {d.badge}
                    </div>
                    <div className="font-sans font-semibold text-sm text-[#e2e2ea] mb-1">
                      {d.name}
                    </div>
                    <div className="font-sans text-xs text-[#ffc665] font-semibold">
                      ${d.pricePerNight.toLocaleString()} <span className="text-[10px] text-[#9d8f7c]">/ night</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#1d2025] p-4 rounded-xl border border-[#504535]/30">
                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-[#282a30] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-[#282a30] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Number of Stargazers
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#282a30] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none"
                  >
                    <option value={1}>1 Guest (Solitary Retreat)</option>
                    <option value={2}>2 Guests (Nocturnal Couple)</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Private Expedition)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Nocturnal Experience Add-ons */}
            <div>
              <h4 className="font-technical-coord text-xs text-[#ffc665] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffc665]/20 text-[#ffc665] text-xs flex items-center justify-center font-bold">2</span>
                <span>Curated Nocturnal Rites & Masterclasses</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCES.map((exp) => {
                  const isChecked = selectedExperiences.includes(exp.id);
                  return (
                    <div
                      key={exp.id}
                      onClick={() => handleToggleExp(exp.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#282a30] border-[#ffc665]'
                          : 'bg-[#1d2025] border-[#504535]/30 hover:border-[#ffc665]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border ${isChecked ? 'bg-[#ffc665] border-[#ffc665] text-[#432c00]' : 'border-[#504535]'}`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#e2e2ea]">
                            {exp.title}
                          </div>
                          <div className="text-[10px] text-[#9d8f7c]">
                            {exp.schedule} • {exp.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Guest Coordinates & Contact */}
            <div>
              <h4 className="font-technical-coord text-xs text-[#ffc665] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ffc665]/20 text-[#ffc665] text-xs flex items-center justify-center font-bold">3</span>
                <span>Guest Coordinates & Special Nocturnal Requests</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#1d2025] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Email for Celestial Briefings
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1d2025] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                    Direct Concierge Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1d2025] text-[#e2e2ea] text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-technical-coord text-[#9d8f7c] uppercase mb-1">
                  Astrophotography Experience / Private Airstrip Transfer Details
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#1d2025] text-[#e2e2ea] text-xs px-3 py-2 rounded-lg border border-[#504535]/40 focus:border-[#ffc665] focus:outline-none"
                />
              </div>
            </div>

            {/* Pricing Summary & Guarantee */}
            <div className="bg-[#282a30] p-5 rounded-xl border border-[#504535]/40 space-y-3">
              <div className="flex justify-between text-xs text-[#d4c4b0]">
                <span>{currentDome.name} ({nights} Nights @ ${currentDome.pricePerNight}/night)</span>
                <span className="text-[#e2e2ea] font-medium">${lodgingTotal.toLocaleString()}</span>
              </div>
              {experienceAddonsTotal > 0 && (
                <div className="flex justify-between text-xs text-[#d4c4b0]">
                  <span>Curated Nocturnal Add-ons</span>
                  <span className="text-[#e2e2ea] font-medium">${experienceAddonsTotal.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-[#d4c4b0]">
                <span>International Dark-Sky Sanctuary Conservation & Optics Endowment</span>
                <span className="text-[#e2e2ea] font-medium">${darkSkySanctuaryFee}</span>
              </div>
              <div className="flex justify-between text-xs text-[#d4c4b0]">
                <span>Private Moab Airstrip Valet Transfer & EV High-Power Charget</span>
                <span className="text-[#ffc665] font-medium">COMPLIMENTARY</span>
              </div>

              <div className="pt-3 border-t border-[#504535]/40 flex items-center justify-between">
                <div>
                  <span className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase block">
                    Total Odyssey Investment
                  </span>
                  <span className="font-serif-display text-2xl text-[#ffc665]">
                    ${grandTotal.toLocaleString()} <span className="text-xs font-sans text-[#d4c4b0] font-normal">USD</span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_25px_rgba(229,169,60,0.35)] cursor-pointer"
                >
                  Confirm Stargazing Odyssey
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation Screen: Digital Astral Boarding Pass */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#ffc665]/20 border border-[#ffc665]/40 flex items-center justify-center text-[#ffc665] shadow-[0_0_40px_rgba(255,198,101,0.3)]">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <div>
              <div className="font-technical-coord text-[#e6c363] text-xs uppercase tracking-widest mb-2">
                Astræa Sanctuary Reservation Confirmed
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#e2e2ea] mb-2">
                Your Cosmic Odyssey Awaits
              </h2>
              <p className="font-sans font-light text-sm text-[#d4c4b0] max-w-lg mx-auto leading-relaxed">
                A digital astronomical dossier and moon-transit itinerary has been dispatched to{' '}
                <span className="text-[#ffc665] font-medium">{email}</span>.
              </p>
            </div>

            {/* Pass Card */}
            <div className="max-w-xl mx-auto bg-[#1d2025] rounded-2xl p-6 sm:p-8 border border-[#ffc665]/30 text-left shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#504535]/30 pb-4 mb-4">
                <div>
                  <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase">Sanctuary Pass</div>
                  <div className="font-serif-display text-xl text-[#e2e2ea]">{currentDome.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase">Reservation Code</div>
                  <div className="font-mono text-base text-[#ffc665] font-bold">{bookingRef}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans mb-4">
                <div>
                  <span className="text-[#9d8f7c] block text-[10px] uppercase font-technical-coord">Guest of Honor</span>
                  <span className="text-[#e2e2ea] font-medium">{fullName} ({guests} Guests)</span>
                </div>
                <div>
                  <span className="text-[#9d8f7c] block text-[10px] uppercase font-technical-coord">Sanctuary Coordinates</span>
                  <span className="text-[#e2e2ea] font-medium">{currentDome.coordinates}</span>
                </div>
                <div>
                  <span className="text-[#9d8f7c] block text-[10px] uppercase font-technical-coord">Check-In</span>
                  <span className="text-[#e2e2ea] font-medium">{arrivalDate} (16:00 MST)</span>
                </div>
                <div>
                  <span className="text-[#9d8f7c] block text-[10px] uppercase font-technical-coord">Check-Out</span>
                  <span className="text-[#e2e2ea] font-medium">{departureDate} (11:00 MST)</span>
                </div>
              </div>

              <div className="bg-[#111319] p-3 rounded-lg border border-[#504535]/30 text-[11px] text-[#9d8f7c]">
                <span className="text-[#ffc665] font-semibold">Telescope Assigned: </span>
                {currentDome.telescope}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all cursor-pointer shadow-lg"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
