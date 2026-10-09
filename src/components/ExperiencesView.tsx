import React, { useState } from 'react';
import { EXPERIENCES } from '../data/sanctuaryData';
import { Experience } from '../types';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Sparkles, User, Wrench } from 'lucide-react';

interface ExperiencesViewProps {
  onBackToSanctuary: () => void;
  onBookExperience: (exp: Experience) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onBackToSanctuary,
  onBookExperience,
}) => {
  const [selectedExp, setSelectedExp] = useState<Experience>(EXPERIENCES[0]);

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
            Curated Nocturnal Expeditions & Masterclasses
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/40 text-[#ffc665] font-technical-coord text-[10px] uppercase tracking-widest mb-3">
            Night Sky Masterclasses
          </div>
          <h1 className="font-serif-display text-4xl lg:text-5xl text-[#e2e2ea] mb-4">
            Nocturnal Rituals & Scientific Expeditions
          </h1>
          <p className="font-sans font-light text-base text-[#d4c4b0] leading-relaxed">
            Every session is conducted under zero-artificial-light conditions by our resident research astronomers, astrophotography fellows, and sound alchemists.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {EXPERIENCES.map((exp) => {
            const isActive = selectedExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`p-5 rounded-2xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#282a30] border-[#ffc665] shadow-[0_0_20px_rgba(255,198,101,0.25)]'
                    : 'bg-[#191c21] border-[#504535]/30 hover:border-[#ffc665]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-technical-coord text-[10px] text-[#ffc665] uppercase">
                    {exp.category}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#e6c363]">
                    {exp.icon}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-base text-[#e2e2ea] mb-1">
                  {exp.title}
                </h3>
                <div className="text-xs text-[#9d8f7c] font-light">
                  {exp.schedule} • {exp.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#191c21] rounded-2xl p-8 lg:p-12 border border-[#504535]/40 shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#282a30] text-[#ffc665] rounded-full text-xs font-technical-coord uppercase border border-[#ffc665]/20">
                {selectedExp.badge}
              </span>
              <span className="text-xs font-technical-coord text-[#9d8f7c] uppercase">
                {selectedExp.price}
              </span>
            </div>

            <h2 className="font-serif-display text-3xl lg:text-4xl text-[#e2e2ea]">
              {selectedExp.title}
            </h2>

            <p className="font-sans font-light text-base text-[#d4c4b0] leading-relaxed">
              {selectedExp.description}
            </p>

            {/* Guide & Fellow Profile */}
            <div className="bg-[#1d2025] rounded-xl p-5 border border-[#504535]/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#33353b] border border-[#ffc665]/30 flex items-center justify-center text-[#ffc665]">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-technical-coord text-[10px] text-[#9d8f7c] uppercase tracking-wider">
                  Lead Facilitator & Sky Fellow
                </div>
                <div className="font-sans font-semibold text-sm sm:text-base text-[#e2e2ea]">
                  {selectedExp.guide}
                </div>
              </div>
            </div>

            {/* Specialized Instrumentation */}
            <div>
              <h4 className="font-technical-coord text-xs text-[#9d8f7c] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#ffc665]" />
                <span>Specialized Equipment & Instrumentation Provided</span>
              </h4>
              <div className="space-y-2">
                {selectedExp.equipment.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-[#e2e2ea] bg-[#1d2025] p-3 rounded-lg border border-[#504535]/20">
                    <span className="w-2 h-2 rounded-full bg-[#ffc665]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Booking Card */}
          <div className="lg:col-span-5 bg-[#282a30] rounded-2xl p-7 border border-[#504535]/40 shadow-xl space-y-6">
            <h3 className="font-serif-display text-2xl text-[#e2e2ea]">
              Reserve Your Rites
            </h3>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex justify-between py-2 border-b border-[#504535]/30 text-[#d4c4b0]">
                <span>Session Duration:</span>
                <span className="text-[#e2e2ea] font-medium">{selectedExp.duration}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#504535]/30 text-[#d4c4b0]">
                <span>Nocturnal Schedule:</span>
                <span className="text-[#e2e2ea] font-medium">{selectedExp.schedule}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#504535]/30 text-[#d4c4b0]">
                <span>Capacity:</span>
                <span className="text-[#e2e2ea] font-medium">Limited to 6 guests per session</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#504535]/30 text-[#d4c4b0]">
                <span>Pricing:</span>
                <span className="text-[#ffc665] font-semibold">{selectedExp.price}</span>
              </div>
            </div>

            <p className="text-xs text-[#9d8f7c] font-light leading-relaxed">
              * Sessions start precisely at scheduled nocturnal windows to coincide with optimum dark adaptation and planetary altitude.
            </p>

            <button
              onClick={() => onBookExperience(selectedExp)}
              className="w-full py-3.5 rounded-full bg-[#ffc665] text-[#432c00] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#fabc4d] transition-all duration-300 shadow-[0_0_25px_rgba(229,169,60,0.3)] cursor-pointer"
            >
              Add to Sanctuary Odyssey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
