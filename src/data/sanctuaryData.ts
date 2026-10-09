import { Dome, Experience, CelestialEvent } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCuFe7WMk0nHURV7oeyeJMS5DyIWtKEM1-eGx9CCA8rZXMnaMmmVfXPK2NE87RgcdcE3IfP-EPV17ICkDaepUm5ph1UtW0WQ0Z9Z7rWYxKKPZc4QYxdte1jqt4zUSsTyt59ssqSbh9fgWKLNT4ssIfARKS3Lj4gPT42rs93p2xTntDhTyGuXzATo46dvaCsnRUWnunwV1ildFV_fQXXIzcbSdB6dHJ4SyOwKirQev1GeShylpNZCNEL";

export const DOME_INTERIOR_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA_cbXw4Q1bc-W731eGsRXz4dH1fFa5EGmVRzhBEFy2YECTTV7bk7gBvAWhF94Uoy1uiPiVLDgjaA1-RutWXWIBzOb1hqB0MJK79vY9b4lX3BtUagLS7n5omOZjY3nFvJ6Kw-uCuFYLQkNa36VFIlJ3Euuub_um097i4pOlqxzEVQOmPu4Y7pXf1Y_l7nFBPpE296_BPZdAQp0v-Gz_ApZPlwdAaziipLC8DYicpazVlrciraSWU7Jr";

export const LOGO_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1VwtxT3tW7Eslu3GY0MyskEzS0_yBPdDLskRms-awSy-clU-G1ZH5NLK33_eTF5sbr-Rr6xLK3b5OBHoKq8G4-KWoUlMjkHYLDmhsTYsT_TU04MVYfq0iUZjgKtN4vPHH5Jduqc014W8mnHq8YRFrj88xcVraHuTt9LwLGnewSwXbQPSZoQmfmIKFyNUldx1QPEVu6XjXFtxyPgd9P_V8J5TXlw99c1wfWQ1YNuaRWGFKbgfQ6AckNONA";

export const DOMES: Dome[] = [
  {
    id: "zenith",
    name: "The Zenith Pavilion",
    tagline: "Master Suite • 1,400 SQ FT",
    badge: "Premier Tier",
    sqFt: 1400,
    type: "Master Suite",
    pricePerNight: 2600,
    description: "Our flagship sanctuary perched on the highest sandstone ledge. Features a private outdoor sunken cedar soaking tub, dedicated personal astrophysicist for nocturnal sessions, and an expansive 360-degree observation deck.",
    features: [
      "Private sunken cedar hot tub",
      "Dedicated in-villa astrophysicist",
      "360° unobstructed plateau view"
    ],
    telescope: "Planewave CDK17 Observatory Grade with Paramount ME II Mount",
    image: DOME_INTERIOR_IMAGE,
    amenities: [
      "Computerized variable-tint oculus",
      "Handmade cashmere king mattress",
      "Geothermal heated travertine floors",
      "Private cliffside cantilevered fire pit",
      "Cellared organic biodynamic bar",
      "Quadraphonic spatial ambient acoustic system"
    ],
    coordinates: "38°27'49\"N 109°43'15\"W",
    elevation: "5,340 ft"
  },
  {
    id: "nebula",
    name: "The Nebula Suite",
    tagline: "Glass Dome • 950 SQ FT",
    badge: "Most Revered",
    sqFt: 950,
    type: "Glass Dome",
    pricePerNight: 1950,
    description: "Flanked by vertical monolithic rock faces providing supreme acoustic seclusion. Wraparound 270° canyon amphitheater perspective with central ethanol hearth and curated spatial audio star maps.",
    features: [
      "Double-sided suspended fireplace",
      "Bespoke quadraphonic star audio",
      "Cellared organic biodynamic bar"
    ],
    telescope: "Celestron 14\" Schmidt-Cassegrain with StarSense AutoAlign",
    image: DOME_INTERIOR_IMAGE,
    amenities: [
      "Retractable polarized skylight",
      "Hand-hammered copper soaking tub",
      "iPad Celestial Command Center",
      "Locally harvested pinon and sage aromatherapy",
      "Artisanal pour-over coffee laboratory"
    ],
    coordinates: "38°27'44\"N 109°43'11\"W",
    elevation: "5,280 ft"
  },
  {
    id: "eclipse",
    name: "The Eclipse Casita",
    tagline: "Sanctuary • 750 SQ FT",
    badge: "Intimate Seclusion",
    sqFt: 750,
    type: "Sanctuary Casita",
    pricePerNight: 1450,
    description: "Carved directly into red sandstone contours with a private open-air sky terrace. Perfect for solitary contemplation or romantic stargazing escapes framed by ancient juniper trees.",
    features: [
      "Open-air retractable skylight bedroom",
      "Private canyon courtyard firepit",
      "Artisanal pour-over coffee laboratory"
    ],
    telescope: "Takahashi FSQ-106ED Astrograph with ZWO Deep-Sky Camera",
    image: DOME_INTERIOR_IMAGE,
    amenities: [
      "Sunken stone shower with canyon sky view",
      "Custom wool and alpaca bedding",
      "Private red rock courtyard",
      "Binocular star lounger deck"
    ],
    coordinates: "38°27'38\"N 109°43'06\"W",
    elevation: "5,210 ft"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "astrophotography",
    title: "Deep Sky Astrophotography",
    category: "Masterclass Series",
    badge: "Masterclass Series",
    duration: "3.5 Hours",
    schedule: "Nightly • 22:00",
    price: "$450 / session",
    icon: "photo_camera",
    description: "Equipped with Phase One medium-format cameras and equatorial tracking mounts, shoot spiral galaxies alongside National Geographic contributing expedition photographers.",
    guide: "Julian Vance (Senior Night-Sky Fellow)",
    equipment: [
      "Phase One IQ4 150MP Achromatic Back",
      "Software Bisque Paramount MYT",
      "Antlia 3nm Pro Narrowband Astronomical Filters"
    ]
  },
  {
    id: "laser-tours",
    title: "High-Power Laser Sky Tours",
    category: "Astrophysics Dialogue",
    badge: "Astrophysics Dialogue",
    duration: "2.0 Hours",
    schedule: "Nightly • 21:00",
    price: "Complimentary for guests",
    icon: "cyclone",
    description: "Recline on heated stone loungers while our resident astronomer traces mythological constellations and light-year corridors with pinpoint green celestial lasers.",
    guide: "Dr. Elena Rostova (Astrophysics PhD)",
    equipment: [
      "532nm 5W Collimated Green Astronomy Pointer",
      "Heated Travertine Stargazing Loungers",
      "Bone-conduction binaural narration headsets"
    ]
  },
  {
    id: "sound-bath",
    title: "Cosmic Quartz Sound Bath",
    category: "Acoustic Immersion",
    badge: "Acoustic Immersion",
    duration: "75 Minutes",
    schedule: "Bi-Nightly • 20:30",
    price: "$180 / guest",
    icon: "spa",
    description: "Harmonic 432Hz crystal alchemy bowl frequencies resonate against canyon bedrock in total absence of ambient light, guiding brainwaves into deep delta sleep.",
    guide: "Maren Calloway (Sound Sommelier)",
    equipment: [
      "Pure Quartz Alchemy Singing Bowls",
      "Monochord Bedrock Acoustic Resonator",
      "Herbal canyon mist diffusion"
    ]
  },
  {
    id: "michelin-tasting",
    title: "Michelin Starlight Tasting",
    category: "Gastronomy",
    badge: "Gastronomy",
    duration: "2.5 Hours",
    schedule: "Daily • 19:30",
    price: "$380 / guest",
    icon: "restaurant",
    description: "Seven courses of desert-foraged wild botanicals and dry-aged wagyu served on the cliff edge, paired alongside biodynamic wines curated around the lunar calendar.",
    guide: "Executive Chef Tarek Thorne",
    equipment: [
      "Seven-course nocturnal blind-tasting menu",
      "Biodynamic biodiverse vineyard pairings",
      "Sub-ambient infrared tableside thermal warming"
    ]
  }
];

export const CALENDAR_EVENTS: CelestialEvent[] = [
  {
    id: "perseids",
    dateRange: "Aug 11 – 14",
    title: "Perseid Meteor Shower Peak",
    description: "Over 100 radiant meteors per hour against zero moonlight interference. Zenith rates highest between 01:00 and 04:30.",
    status: "few_left",
    statusText: "2 Pavilions Left",
    moonIllumination: "0.2% (Waning Crescent)",
    bortleRating: "Bortle 1 (21.98 mag/arcsec²)",
    highlights: ["Swift-Tuttle dust trail", "Zodiacal light display", "Radiant in Perseus"]
  },
  {
    id: "virgo",
    dateRange: "Sep 02 – 06",
    title: "Virgo Supercluster Window",
    description: "New Moon window delivering blackest skies of autumn. Ideal for deep-space planetary astrophotography of M31 Andromeda.",
    status: "available",
    statusText: "Available",
    moonIllumination: "0.0% (Astronomical New Moon)",
    bortleRating: "Bortle 1 (22.02 mag/arcsec²)",
    highlights: ["M31 Andromeda core clarity", "Triangulum M33 naked-eye visibility", "Milky Way dust lanes"]
  },
  {
    id: "saturn",
    dateRange: "Oct 08 – 12",
    title: "Saturn Opposition & Rings",
    description: "Saturn reaches closest approach to Earth with Cassini division rings visible in sublime sharpness via our 14-inch observatory optics.",
    status: "available",
    statusText: "Available",
    moonIllumination: "3.5% (Early Waxing)",
    bortleRating: "Bortle 1 (21.94 mag/arcsec²)",
    highlights: ["Cassini division crispness", "Titan, Enceladus, Rhea transits", "Seeliger ring brightening effect"]
  },
  {
    id: "geminids",
    dateRange: "Dec 12 – 15",
    title: "Geminid Winter Fireballs",
    description: "The king of meteor showers. Multi-hued celestial fireballs burning across the cold crisp high-desert sky with private campfire service.",
    status: "waitlist",
    statusText: "Waitlist Only",
    moonIllumination: "1.1% (New Moon cycle)",
    bortleRating: "Bortle 1 (22.10 mag/arcsec²)",
    highlights: ["120-150 meteors/hr", "Emerald and amber fireballs", "Sub-zero clarity inversion"]
  }
];

export const TELEMETRY_METRICS = {
  atmosphericSeeing: "0.42 Arcsec · Index 9.9",
  lunarPhase: "Astronomical New Moon",
  milkyWayTransit: "21:40 – 04:15 MST Peak",
  upcomingShower: "Perseids Peak in 12 Days",
  bortleClass: "Bortle Class 1: Pristine Void",
  moonIllumination: "0% Moon Illumination",
  milkyWayCore: "Milky Way Core: 98%",
  coordinates: "38°27'44\"N 109°43'11\"W",
  elevation: "5,280 ft (1,609 m)",
  skyQualityMeter: "21.96 mag/arcsec²",
  zenithTransparency: "99.4%"
};
