export interface Dome {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  sqFt: number;
  type: string;
  pricePerNight: number;
  description: string;
  features: string[];
  telescope: string;
  image: string;
  amenities: string[];
  coordinates: string;
  elevation: string;
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  badge: string;
  duration: string;
  schedule: string;
  price: string;
  icon: string;
  description: string;
  guide: string;
  equipment: string[];
}

export interface CelestialEvent {
  id: string;
  dateRange: string;
  title: string;
  description: string;
  status: 'available' | 'few_left' | 'waitlist';
  statusText: string;
  moonIllumination: string;
  bortleRating: string;
  highlights: string[];
}

export interface BookingDetails {
  arrivalDate: string;
  departureDate: string;
  domeId: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  experiences: string[];
  specialRequests: string;
}

export type ActiveScreen = 
  | 'the-sanctuary'
  | 'celestial-domes'
  | 'night-sky-astronomy'
  | 'experiences'
  | 'stargazing-calendar';
