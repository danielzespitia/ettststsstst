import React from 'react';
import { EXPERIENCES } from '../data/sanctuaryData';
import { Experience } from '../types';
import { Camera, Orbit, Sparkles, Utensils, ArrowUpRight } from 'lucide-react';

interface ExperiencesSectionProps {
  onSelectExperience: (exp: Experience) => void;
  onViewAllExperiences: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  onSelectExperience,
  onViewAllExperiences,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 lg:px-16 bg-[#111319] relative overflow-hidden" id="experiences">
      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-[#e6c363]" />
            <span className="font-technical-coord text-[#e6c363] uppercase tracking-widest text-[11px] font-medium">
              Curated Nocturnal Rites
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#e2e2ea] mb-3">
            Scientific Rigor Meets Transcendental Luxury
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-[#d4c4b0] leading-relaxed">
            Immerse in nocturnal explorations orchestrated by resident astrophysicists, world-renowned astrophotographers, and award-winning culinary artisans under total darkness.
          </p>
        </div>

        {/* Experience Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperience(exp)}
              className="bg-[#191c21] rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 border border-[#504535]/30 hover:border-[#ffc665]/40 shadow-xl group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#282a30] border border-[#504535]/40 flex items-center justify-center text-[#ffc665] mb-5 group-hover:bg-[#ffc665] group-hover:text-[#432c00] transition-colors shadow-md">
                  <span className="material-symbols-outlined text-[26px]">
                    {exp.icon}
                  </span>
                </div>

                <span className="font-technical-coord text-[#ffe08f] uppercase tracking-wider block mb-1 text-[10px]">
                  {exp.category}
                </span>

                <h3 className="font-sans font-semibold text-base sm:text-lg text-[#e2e2ea] mb-2 group-hover:text-[#ffc665] transition-colors">
                  {exp.title}
                </h3>

                <p className="font-sans font-light text-xs sm:text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#504535]/30 flex items-center justify-between font-sans text-xs text-[#9d8f7c]">
                <span>Duration: {exp.duration}</span>
                <span className="text-[#ffc665] font-medium">{exp.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
