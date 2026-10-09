import React, { useState } from 'react';
import { ActiveScreen } from '../types';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0c0e13] text-[#d4c4b0] border-t border-[#504535]/30">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-serif-display text-2xl text-[#ffc665] tracking-wide">
                Astræa
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#282a30] border border-[#ffc665]/20 text-[#e6c363] font-technical-coord text-[10px] uppercase tracking-widest">
                Bortle Class 1
              </span>
            </div>

            <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] max-w-sm mb-5 leading-relaxed">
              An ultra-luxury architectural observatory tucked into the prehistoric canyons of Utah's certified Dark Sky reserve.
            </p>

            <div className="flex items-center gap-2 font-technical-coord text-[#fabc4d] bg-[#191c21] border border-[#504535]/40 px-3.5 py-2 rounded-xl text-[11px]">
              <span className="material-symbols-outlined text-[#ffc665] text-[16px]">explore</span>
              <span>38°34'N 109°32'W · Moab Dark Sky Sanctuary</span>
            </div>
          </div>

          {/* Sanctuary Links */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="font-sans font-semibold text-xs text-[#e2e2ea] uppercase tracking-wider mb-2">
              Sanctuary
            </span>
            <button
              onClick={() => onNavigate('the-sanctuary')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <button
              onClick={() => onNavigate('celestial-domes')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Celestial Domes
            </button>
            <button
              onClick={() => onNavigate('night-sky-astronomy')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Observatory Deck
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Curated Expeditions
            </button>
          </div>

          {/* Astronomical Links */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="font-sans font-semibold text-xs text-[#e2e2ea] uppercase tracking-wider mb-2">
              Astronomical
            </span>
            <button
              onClick={() => onNavigate('stargazing-calendar')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Celestial Calendar
            </button>
            <button
              onClick={() => onNavigate('night-sky-astronomy')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Deep-Sky Feeds
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Astrophotography
            </button>
            <button
              onClick={() => onNavigate('night-sky-astronomy')}
              className="text-left font-sans font-light text-xs sm:text-sm text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
            >
              Dark Sky Status
            </button>
          </div>

          {/* Celestial Bulletins Form */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="font-sans font-semibold text-xs text-[#e2e2ea] uppercase tracking-wider mb-2">
              Celestial Bulletins
            </span>
            <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] mb-3 leading-relaxed">
              Receive lunar phase alerts, meteor shower advisories, and exclusive dome reservation releases.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#191c21] border border-[#ffc665]/40 rounded-xl text-xs text-[#ffc665] flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Welcome to Astræa Bulletins. Your nocturnal digest will arrive with the new moon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full">
                <input
                  type="email"
                  required
                  placeholder="celestial@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#282a30] text-[#e2e2ea] placeholder:text-[#9d8f7c] font-sans text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-[#504535]/40 focus:outline-none focus:ring-1 focus:ring-[#ffc665]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#fabc4d] transition-colors shrink-0 cursor-pointer shadow-[0_0_15px_rgba(229,169,60,0.3)]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#504535]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#9d8f7c]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2025 Astræa Luxury Sanctuary. All rights reserved.</span>
            <span>Utah Dark Sky Reserve · Bortle Class 1</span>
          </div>

          <div className="flex items-center gap-4 text-[#9d8f7c]">
            <span className="material-symbols-outlined hover:text-[#ffc665] cursor-pointer transition-colors text-[20px]">
              star
            </span>
            <span className="material-symbols-outlined hover:text-[#ffc665] cursor-pointer transition-colors text-[20px]">
              public
            </span>
            <span className="material-symbols-outlined hover:text-[#ffc665] cursor-pointer transition-colors text-[20px]">
              nights_stay
            </span>
            <span className="material-symbols-outlined hover:text-[#ffc665] cursor-pointer transition-colors text-[20px]">
              satellite_alt
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
