import React, { useState, useEffect } from 'react';
import { ActiveScreen, Experience, CelestialEvent } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CelestialDomesSection } from './components/CelestialDomesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { AlmanacSection } from './components/AlmanacSection';
import { AcclaimSection } from './components/AcclaimSection';
import { BookingStrip } from './components/BookingStrip';
import { Footer } from './components/Footer';
import { DomesView } from './components/DomesView';
import { AstronomyView } from './components/AstronomyView';
import { ExperiencesView } from './components/ExperiencesView';
import { CalendarView } from './components/CalendarView';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('the-sanctuary');
  const [isRedVisionMode, setIsRedVisionMode] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingDomeId, setBookingDomeId] = useState<string>('nebula');
  const [bookingArrival, setBookingArrival] = useState<string>('2025-08-11');
  const [bookingDeparture, setBookingDeparture] = useState<string>('2025-08-15');
  const [bookingExperienceId, setBookingExperienceId] = useState<string | undefined>(undefined);

  // Synchronize red light mode class with body
  useEffect(() => {
    if (isRedVisionMode) {
      document.body.classList.add('red-vision-mode');
    } else {
      document.body.classList.remove('red-vision-mode');
    }
  }, [isRedVisionMode]);

  const handleOpenBooking = (domeId: string = 'nebula') => {
    setBookingDomeId(domeId);
    setBookingModalOpen(true);
  };

  const handleReserveEvent = (event: CelestialEvent) => {
    if (event.id === 'perseids') {
      setBookingArrival('2025-08-11');
      setBookingDeparture('2025-08-15');
    } else if (event.id === 'virgo') {
      setBookingArrival('2025-09-02');
      setBookingDeparture('2025-09-06');
    } else if (event.id === 'saturn') {
      setBookingArrival('2025-10-08');
      setBookingDeparture('2025-10-12');
    } else if (event.id === 'geminids') {
      setBookingArrival('2025-12-12');
      setBookingDeparture('2025-12-16');
    }
    setBookingModalOpen(true);
  };

  const handleSelectExperience = (exp: Experience) => {
    setBookingExperienceId(exp.id);
    setActiveScreen('experiences');
  };

  const handleCheckRatesFromStrip = (arrival: string, departure: string, domeId: string) => {
    setBookingArrival(arrival);
    setBookingDeparture(departure);
    setBookingDomeId(domeId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111319] text-[#e2e2ea] flex flex-col selection:bg-[#ffc665] selection:text-[#432c00]">
      {/* Fixed Luxury Navigation Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
        isRedVisionMode={isRedVisionMode}
        onToggleRedVision={() => setIsRedVisionMode(!isRedVisionMode)}
      />

      {/* Screen Router */}
      <main className="flex-1 w-full">
        {activeScreen === 'the-sanctuary' && (
          <div className="flex flex-col w-full pt-20">
            {/* Section 1: Hero Viewport */}
            <HeroSection
              onReserveClick={() => handleOpenBooking('nebula')}
              onExploreGuideClick={() => {
                setActiveScreen('night-sky-astronomy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 2: Architectural Sanctuary & Celestial Domes */}
            <CelestialDomesSection
              onSelectDome={(domeId) => handleOpenBooking(domeId)}
              onExploreMoreDomes={() => {
                setActiveScreen('celestial-domes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 3: The Nocturnal Experiences */}
            <ExperiencesSection
              onSelectExperience={handleSelectExperience}
              onViewAllExperiences={() => {
                setActiveScreen('experiences');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 4: Interactive Celestial Calendar & Dark Sky Almanac */}
            <AlmanacSection
              onReserveDate={handleReserveEvent}
              onViewFullCalendar={() => {
                setActiveScreen('stargazing-calendar');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 5: Critical Acclaim & Bortle 1 Certificate */}
            <AcclaimSection />

            {/* Section 6: Quick Booking Engine Strip */}
            <BookingStrip
              selectedDomeId={bookingDomeId}
              onCheckRates={handleCheckRatesFromStrip}
            />
          </div>
        )}

        {/* Dedicated Screen View: Celestial Domes */}
        {activeScreen === 'celestial-domes' && (
          <DomesView
            onBackToSanctuary={() => setActiveScreen('the-sanctuary')}
            onBookDome={(domeId) => handleOpenBooking(domeId)}
          />
        )}

        {/* Dedicated Screen View: Night Sky Astronomy */}
        {activeScreen === 'night-sky-astronomy' && (
          <AstronomyView
            onBackToSanctuary={() => setActiveScreen('the-sanctuary')}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {/* Dedicated Screen View: Experiences */}
        {activeScreen === 'experiences' && (
          <ExperiencesView
            onBackToSanctuary={() => setActiveScreen('the-sanctuary')}
            onBookExperience={(exp) => {
              setBookingExperienceId(exp.id);
              setBookingModalOpen(true);
            }}
          />
        )}

        {/* Dedicated Screen View: Stargazing Calendar */}
        {activeScreen === 'stargazing-calendar' && (
          <CalendarView
            onBackToSanctuary={() => setActiveScreen('the-sanctuary')}
            onSelectEvent={handleReserveEvent}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Reservation Workflow Modal */}
      <ReservationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDomeId={bookingDomeId}
        initialArrival={bookingArrival}
        initialDeparture={bookingDeparture}
        initialExperienceId={bookingExperienceId}
      />
    </div>
  );
}
