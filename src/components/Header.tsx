import React, { useState } from 'react';
import { LOGO_IMAGE } from '../data/sanctuaryData';
import { ActiveScreen } from '../types';
import { Eye, Menu, X, Moon, Sparkles, UserCheck } from 'lucide-react';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  onOpenBooking: (domeId?: string) => void;
  isRedVisionMode: boolean;
  onToggleRedVision: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onOpenBooking,
  isRedVisionMode,
  onToggleRedVision,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navItems: { label: string; screen: ActiveScreen }[] = [
    { label: 'The Sanctuary', screen: 'the-sanctuary' },
    { label: 'Celestial Domes', screen: 'celestial-domes' },
    { label: 'Night Sky Astronomy', screen: 'night-sky-astronomy' },
    { label: 'Experiences', screen: 'experiences' },
    { label: 'Stargazing Calendar', screen: 'stargazing-calendar' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111319]/75 backdrop-blur-2xl border-b border-[#e2e2ea]/5 shadow-[0_1px_16px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-[1360px] mx-auto px-5 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <button
          onClick={() => {
            onNavigate('the-sanctuary');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            alt="Astræa Retreat Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src={LOGO_IMAGE}
          />
          <div className="flex flex-col">
            <span className="font-serif-display text-lg text-[#e2e2ea] tracking-wider font-semibold uppercase group-hover:text-[#ffc665] transition-colors">
              Astræa
            </span>
            <span className="font-technical-coord text-[#e6c363] uppercase hidden sm:inline text-[11px]">
              Sanctuary · Moab
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => {
                  onNavigate(item.screen);
                  if (item.screen === 'the-sanctuary') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-[13.5px] tracking-wide transition-colors duration-200 cursor-pointer font-medium ${
                  isActive
                    ? 'text-[#ffc665] font-semibold border-b border-[#ffc665] pb-0.5'
                    : 'text-[#d4c4b0] hover:text-[#ffc665]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-3">
          {/* Night Vision Mode Toggle */}
          <button
            onClick={onToggleRedVision}
            title={isRedVisionMode ? "Disable Red Night-Vision Mode" : "Enable Dark-Sky Red Light Mode (Preserves Scotopic Vision)"}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer border ${
              isRedVisionMode
                ? 'bg-red-950/80 text-red-300 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                : 'bg-[#191c21] text-[#9d8f7c] border-[#504535]/40 hover:text-[#ffc665] hover:border-[#ffc665]/40'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="font-technical-coord text-[10px] uppercase">
              {isRedVisionMode ? "Red Vision: ON" : "Night Mode"}
            </span>
          </button>

          {/* Reserve CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider shadow-[0_0_24px_rgba(229,169,60,0.35)] hover:bg-[#fabc4d] hover:shadow-[0_0_32px_rgba(250,188,77,0.5)] transition-all duration-300 cursor-pointer"
          >
            Reserve an Odyssey
          </button>

          {/* Guest Profile Menu Button */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-8 h-8 rounded-full bg-[#ffc665] hover:bg-[#fabc4d] flex items-center justify-center shrink-0 cursor-pointer transition-transform hover:scale-105"
              aria-label="Sanctuary Concierge & Account"
            >
              <span className="material-symbols-outlined text-[#432c00] text-[18px]">person</span>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-64 bg-[#191c21] border border-[#504535]/50 rounded-xl p-4 shadow-2xl z-50 text-xs">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#504535]/40">
                  <div className="w-8 h-8 rounded-full bg-[#ffc665]/20 text-[#ffc665] flex items-center justify-center font-bold">
                    AS
                  </div>
                  <div>
                    <div className="font-semibold text-[#e2e2ea]">Astral Guest Portal</div>
                    <div className="text-[11px] text-[#9d8f7c]">Moab Dark Sky Sanctuary</div>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      onOpenBooking();
                    }}
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-[#282a30] text-[#e2e2ea] flex items-center justify-between"
                  >
                    <span>Sanctuary Reservation</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#ffc665]" />
                  </button>
                  <button
                    onClick={() => {
                      onToggleRedVision();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-[#282a30] text-[#e2e2ea] flex items-center justify-between"
                  >
                    <span>Astronomical Red Mode</span>
                    <span className="text-[10px] text-[#ffc665]">{isRedVisionMode ? "Active" : "Standard"}</span>
                  </button>
                  <div className="py-1 px-2 text-[#9d8f7c] text-[11px]">
                    Concierge Hotline: <span className="text-[#e6c363]">+1 (435) 259-7827</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e2e2ea] hover:text-[#ffc665] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111319]/95 backdrop-blur-2xl border-b border-[#504535]/50 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => {
                  onNavigate(item.screen);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 text-sm tracking-wide font-medium ${
                  activeScreen === item.screen ? 'text-[#ffc665] font-semibold' : 'text-[#d4c4b0]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#504535]/30 flex flex-col gap-3">
            <button
              onClick={() => {
                onToggleRedVision();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#191c21] text-xs text-[#e6c363] border border-[#504535]"
            >
              <Eye className="w-4 h-4" />
              <span>Toggle Red Astronomical Night Mode</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#ffc665] text-[#432c00] font-semibold text-xs uppercase tracking-wider text-center"
            >
              Reserve an Odyssey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
