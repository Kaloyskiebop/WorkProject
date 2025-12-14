export const galleryImages = [
  // Airport & Arrival
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `airport-${i + 1}`,
    src: `/gallery/airport${i + 1}.jpg`,
    alt: `Airport Moment ${i + 1}`,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `arrival-${i + 1}`,
    src: `/gallery/arrivalcebu${i + 1}.jpg`,
    alt: `Arrival in Cebu ${i + 1}`,
  })),

  // Superferry
  { id: 'superferry-1', src: '/gallery/superferry.jpg', alt: 'Superferry Journey' },
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `superferry-${i + 2}`,
    src: `/gallery/superferry${i + 2}.jpg`,
    alt: `Superferry Journey ${i + 2}`,
  })),

  // Cebu Tour
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `cebu-tour-${i + 1}`,
    src: `/gallery/cebu-tour${i + 1}.jpg`,
    alt: `Cebu City Tour ${i + 1}`,
  })),

  // Worldtech
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `world-${i + 1}`,
    src: `/gallery/world${i + 1}.jpg`,
    alt: `Worldtech Visit ${i + 1}`,
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `wt-gallery-${i + 1}`,
    src: `/gallery/wt-gallery${i + 1}.jpg`,
    alt: `Worldtech Gallery ${i + 1}`,
  })),

  // Rivan IT
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `rivan-${i + 1}`,
    src: `/gallery/rivan${i + 1}.jpg`,
    alt: `Rivan IT Workshop ${i + 1}`,
  })),

  // CodeChum
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `cchum-${i + 1}`,
    src: `/gallery/cchum${i + 1}.jpg`,
    alt: `CodeChum Session ${i + 1}`,
  })),

  // Mata Tech
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `matatech-${i + 1}`,
    src: `/gallery/matatech${i + 1}.jpg`,
    alt: `Mata Technologies VR ${i + 1}`,
  })),

  // CDRRMO / 911
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `cdrrmo-${i + 1}`,
    src: `/gallery/cdrrmo${i + 1}.jpg`,
    alt: `Command Center Visit ${i + 1}`,
  })),

  // Bohol & Nature
  { id: 'bohol-1', src: '/gallery/bohol.jpg', alt: 'Bohol Scenery' },
  { id: 'chocohills-1', src: '/gallery/chocohills.jpg', alt: 'Chocolate Hills' },
  { id: 'chocohills-2', src: '/gallery/chocohills1.jpg', alt: 'Chocolate Hills View' },
  { id: 'tarsier-1', src: '/gallery/tarsier.jpg', alt: 'Tarsier' },
  { id: 'loboc-1', src: '/gallery/loboc.jpg', alt: 'Loboc River' },
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `loboc-${i + 2}`,
    src: `/gallery/loboc${i + 2}.jpg`,
    alt: `Loboc River Cruise ${i + 2}`,
  })),
  { id: 'manmade-1', src: '/gallery/manmade.jpg', alt: 'Man-made Forest' },
  { id: 'manmade-2', src: '/gallery/manmade2.jpg', alt: 'Man-made Forest Path' },

  // Panglao
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `panglao-${i + 1}`,
    src: `/gallery/panglao${i + 1}.jpg`,
    alt: `Panglao Beach ${i + 1}`,
  })),

  // Buffet & Hotel
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `buffet-${i + 1}`,
    src: `/gallery/buffet${i + 1}.jpg`,
    alt: `Buffet Dining ${i + 1}`,
  })),
  { id: 'cebu-hotel-1', src: '/gallery/cebu-hotel1.jpg', alt: 'Cebu Hotel' },
  { id: 'cebu-hotel-2', src: '/gallery/cebu-hotel2.jpg', alt: 'Cebu Hotel Room' },
]