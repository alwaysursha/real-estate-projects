// Property data for the real estate website
import { Property } from '../types/property';

// Helper function to get property by ID
export const getPropertyById = (id: number | string): Property | undefined => {
  const numId = typeof id === 'string' ? parseInt(id) : id;
  return featuredProperties.find(property => property.id === numId);
};

// Helper function to get properties by category
export const getPropertiesByCategory = (category: string): Property[] => {
  return featuredProperties.filter(property => property.category === category);
};

// Placeholder images
const propertyImage = '/images/property-placeholder.jpg';
const agentImage = '/images/agent-placeholder.jpg';

// Featured Properties
export const featuredProperties: Property[] = [
  {
    id: 1,
    title: 'The Grand Residences',
    location: 'Downtown Dubai',
    price: 2500000,
    type: 'Apartment',
    beds: 3,
    baths: 3.5,
    area: 2100,
    image: propertyImage,
    status: 'New Launch',
    developer: 'Emaar Properties',
    description: 'Luxury apartment in the heart of Downtown Dubai with stunning views of Burj Khalifa and Dubai Fountain. Features high-end finishes, floor-to-ceiling windows, and smart home technology.',
    features: ['Swimming Pool', 'Gym', 'Spa', 'Concierge', 'Parking', '24/7 Security'],
    images: [propertyImage, propertyImage, propertyImage],
    agent: {
      name: 'Sarah Johnson',
      role: 'Senior Property Consultant',
      phone: '+971 50 123 4567',
      email: 'sarah.j@builderbookings.com',
      image: agentImage
    },
    coordinates: {
      lat: 25.197197,
      lng: 55.274376
    },
    address: 'Downtown Dubai, UAE',
    yearBuilt: 2023,
    category: 'featured'
  },
  {
    id: 2,
    title: 'Palm Vista',
    location: 'Palm Jumeirah',
    price: 5800000,
    type: 'Villa',
    beds: 4,
    baths: 4.5,
    area: 3200,
    image: propertyImage,
    status: 'Ready to Move',
    developer: 'Nakheel',
    description: 'Beachfront villa on Palm Jumeirah with private beach access and panoramic sea views. Features a private pool, garden, and direct beach access.',
    features: ['Private Pool', 'Garden', 'Beach Access', 'Smart Home', 'Maid\'s Room', 'BBQ Area'],
    images: [propertyImage, propertyImage, propertyImage],
    agent: {
      name: 'Mohammed Al Farsi',
      role: 'Luxury Property Specialist',
      phone: '+971 50 987 6543',
      email: 'mohammed.f@builderbookings.com',
      image: agentImage
    },
    coordinates: {
      lat: 25.112047,
      lng: 55.138794
    },
    address: 'Palm Jumeirah, Dubai, UAE',
    yearBuilt: 2022,
    category: 'featured'
  },
  {
    id: 3,
    title: 'Marina Heights',
    location: 'Dubai Marina',
    price: 1800000,
    type: 'Apartment',
    beds: 2,
    baths: 2,
    area: 1500,
    image: '/images/property3.jpg',
    status: 'Off-Plan',
    developer: 'DAMAC Properties',
    description: 'Modern apartment in Dubai Marina with stunning marina views. Features contemporary design, premium appliances, and access to world-class amenities.',
    features: ['Infinity Pool', 'Fitness Center', 'Sauna', 'Children\'s Play Area', 'Lounge', 'Rooftop Terrace'],
    images: ['/images/property3.jpg', '/images/property3-2.jpg', '/images/property3-3.jpg'],
    agent: {
      name: 'Jessica Chen',
      role: 'International Property Consultant',
      phone: '+971 50 456 7890',
      email: 'jessica.c@builderbookings.com',
      image: '/images/agent-3.jpg'
    },
    coordinates: {
      lat: 25.080406,
      lng: 55.143360
    },
    address: 'Dubai Marina, UAE',
    yearBuilt: 2024,
    category: 'featured'
  },
  {
    id: 4,
    title: 'Creek Horizon',
    location: 'Dubai Creek Harbour',
    price: 3200000,
    type: 'Apartment',
    beds: 3,
    baths: 3,
    area: 1800,
    image: '/images/property4.jpg',
    status: 'Under Construction',
    developer: 'Emaar Properties',
    description: 'Elegant apartment in Dubai Creek Harbour with views of the creek and Dubai skyline. Features premium finishes, spacious layouts, and access to retail and dining options.',
    features: ['Swimming Pool', 'Gym', 'Yoga Deck', 'BBQ Area', 'Kids\' Pool', 'Jogging Track'],
    images: ['/images/property4.jpg', '/images/property4-2.jpg', '/images/property4-3.jpg'],
    agent: {
      name: 'Ahmed Al Mansouri',
      role: 'Property Consultant',
      phone: '+971 50 222 3333',
      email: 'ahmed.m@builderbookings.com',
      image: '/images/agent-4.jpg'
    },
    coordinates: {
      lat: 25.197875,
      lng: 55.351635
    },
    address: 'Dubai Creek Harbour, UAE',
    yearBuilt: 2025,
    category: 'featured'
  },
  
  // Apartments & Penthouses
  {
    id: 5,
    title: 'Sky Loft Penthouse',
    location: 'Business Bay',
    price: 7500000,
    type: 'Penthouse',
    beds: 4,
    baths: 4.5,
    area: 4200,
    image: '/images/apartment1.jpg',
    status: 'Ready to Move',
    developer: 'Omniyat',
    description: 'Luxurious penthouse with panoramic views of Downtown Dubai and Burj Khalifa. Features double-height ceilings, private elevator, and expansive terrace.',
    features: ['Private Pool', 'Jacuzzi', 'Home Theater', 'Private Gym', 'Wine Cellar', 'Staff Quarters'],
    images: ['/images/apartment1.jpg', '/images/apartment1-2.jpg', '/images/apartment1-3.jpg'],
    agent: {
      name: 'Priya Sharma',
      role: 'Senior Sales Consultant',
      phone: '+971 50 765 4321',
      email: 'priya.s@builderbookings.com',
      image: '/images/agent-5.jpg'
    },
    coordinates: {
      lat: 25.186008,
      lng: 55.262565
    },
    address: 'Business Bay, Dubai, UAE',
    yearBuilt: 2022,
    category: 'apartment'
  },
  {
    id: 6,
    title: 'Marina Pearl',
    location: 'Dubai Marina',
    price: 2200000,
    type: 'Apartment',
    beds: 2,
    baths: 2.5,
    area: 1650,
    image: '/images/apartment2.jpg',
    status: 'Ready to Move',
    developer: 'Select Group',
    description: 'Elegant apartment in Dubai Marina with stunning sea and marina views. Features modern design, premium finishes, and access to world-class amenities.',
    features: ['Infinity Pool', 'Gym', 'Sauna', 'Steam Room', 'Lounge', 'Children\'s Play Area'],
    images: ['/images/apartment2.jpg', '/images/apartment2-2.jpg', '/images/apartment2-3.jpg'],
    agent: {
      name: 'John Smith',
      role: 'Property Advisor',
      phone: '+971 50 111 2222',
      email: 'john.s@builderbookings.com',
      image: '/images/agent-6.jpg'
    },
    coordinates: {
      lat: 25.075943,
      lng: 55.132759
    },
    address: 'Dubai Marina, UAE',
    yearBuilt: 2021,
    category: 'apartment'
  },
  {
    id: 7,
    title: 'Downtown View',
    location: 'Downtown Dubai',
    price: 3100000,
    type: 'Apartment',
    beds: 3,
    baths: 3,
    area: 1950,
    image: '/images/apartment3.jpg',
    status: 'Off-Plan',
    developer: 'Emaar Properties',
    description: 'Modern apartment in Downtown Dubai with views of Burj Khalifa and Dubai Fountain. Features premium finishes, smart home technology, and spacious layouts.',
    features: ['Swimming Pool', 'Fitness Center', 'Spa', 'Concierge', 'Business Center', 'Rooftop Garden'],
    images: ['/images/apartment3.jpg', '/images/apartment3-2.jpg', '/images/apartment3-3.jpg'],
    agent: {
      name: 'Sarah Johnson',
      role: 'Senior Property Consultant',
      phone: '+971 50 123 4567',
      email: 'sarah.j@builderbookings.com',
      image: '/images/agent-1.jpg'
    },
    coordinates: {
      lat: 25.193371,
      lng: 55.283562
    },
    address: 'Downtown Dubai, UAE',
    yearBuilt: 2024,
    category: 'apartment'
  },
  {
    id: 8,
    title: 'Bluewaters Residence',
    location: 'Bluewaters Island',
    price: 4500000,
    type: 'Apartment',
    beds: 3,
    baths: 3.5,
    area: 2300,
    image: '/images/apartment4.jpg',
    status: 'Ready to Move',
    developer: 'Meraas',
    description: 'Premium apartment on Bluewaters Island with views of the Arabian Gulf and Dubai Eye. Features contemporary design, premium appliances, and access to retail and dining options.',
    features: ['Swimming Pool', 'Gym', 'Kids\' Play Area', 'Beach Access', 'Retail Outlets', 'Restaurants'],
    images: ['/images/apartment4.jpg', '/images/apartment4-2.jpg', '/images/apartment4-3.jpg'],
    agent: {
      name: 'Mohammed Al Farsi',
      role: 'Luxury Property Specialist',
      phone: '+971 50 987 6543',
      email: 'mohammed.f@builderbookings.com',
      image: '/images/agent-2.jpg'
    },
    coordinates: {
      lat: 25.080877,
      lng: 55.116738
    },
    address: 'Bluewaters Island, Dubai, UAE',
    yearBuilt: 2022,
    category: 'apartment'
  },
  
  // Villas & Townhouses
  {
    id: 9,
    title: 'Emirates Hills Villa',
    location: 'Emirates Hills',
    price: 15000000,
    type: 'Villa',
    beds: 6,
    baths: 7,
    area: 8500,
    image: '/images/villa1.jpg',
    status: 'Ready to Move',
    developer: 'Emaar Properties',
    description: 'Luxurious villa in Emirates Hills with golf course views. Features a private pool, garden, home theater, and staff quarters.',
    features: ['Private Pool', 'Garden', 'Home Theater', 'Wine Cellar', 'Staff Quarters', 'BBQ Area'],
    images: ['/images/villa1.jpg', '/images/villa1-2.jpg', '/images/villa1-3.jpg'],
    agent: {
      name: 'Jessica Chen',
      role: 'International Property Consultant',
      phone: '+971 50 456 7890',
      email: 'jessica.c@builderbookings.com',
      image: '/images/agent-3.jpg'
    },
    coordinates: {
      lat: 25.159596,
      lng: 55.183250
    },
    address: 'Emirates Hills, Dubai, UAE',
    yearBuilt: 2020,
    category: 'villa'
  },
  {
    id: 10,
    title: 'Arabian Ranches Townhouse',
    location: 'Arabian Ranches',
    price: 3500000,
    type: 'Townhouse',
    beds: 4,
    baths: 4.5,
    area: 3200,
    image: '/images/villa2.jpg',
    status: 'Ready to Move',
    developer: 'Emaar Properties',
    description: 'Elegant townhouse in Arabian Ranches with desert and golf course views. Features modern design, private garden, and access to community amenities.',
    features: ['Community Pool', 'Golf Course', 'Tennis Court', 'Gym', 'Playground', 'Jogging Track'],
    images: ['/images/villa2.jpg', '/images/villa2-2.jpg', '/images/villa2-3.jpg'],
    agent: {
      name: 'Ahmed Al Mansouri',
      role: 'Property Consultant',
      phone: '+971 50 222 3333',
      email: 'ahmed.m@builderbookings.com',
      image: '/images/agent-4.jpg'
    },
    coordinates: {
      lat: 25.127312,
      lng: 55.243815
    },
    address: 'Arabian Ranches, Dubai, UAE',
    yearBuilt: 2021,
    category: 'villa'
  },
  {
    id: 11,
    title: 'Palm Frond Villa',
    location: 'Palm Jumeirah',
    price: 12000000,
    type: 'Villa',
    beds: 5,
    baths: 5.5,
    area: 7000,
    image: '/images/villa3.jpg',
    status: 'Ready to Move',
    developer: 'Nakheel',
    description: 'Beachfront villa on Palm Jumeirah with private beach access and panoramic sea views. Features a private pool, garden, and direct beach access.',
    features: ['Private Pool', 'Beach Access', 'Garden', 'Home Gym', 'Maid\'s Room', 'Outdoor Kitchen'],
    images: ['/images/villa3.jpg', '/images/villa3-2.jpg', '/images/villa3-3.jpg'],
    agent: {
      name: 'Priya Sharma',
      role: 'Senior Sales Consultant',
      phone: '+971 50 765 4321',
      email: 'priya.s@builderbookings.com',
      image: '/images/agent-5.jpg'
    },
    coordinates: {
      lat: 25.119280,
      lng: 55.138794
    },
    address: 'Palm Jumeirah, Dubai, UAE',
    yearBuilt: 2022,
    category: 'villa'
  },
  {
    id: 12,
    title: 'Damac Hills Villa',
    location: 'Damac Hills',
    price: 6500000,
    type: 'Villa',
    beds: 5,
    baths: 5,
    area: 4800,
    image: '/images/villa4.jpg',
    status: 'Ready to Move',
    developer: 'DAMAC Properties',
    description: 'Modern villa in Damac Hills with golf course views. Features contemporary design, private pool, and access to community amenities.',
    features: ['Private Pool', 'Garden', 'Golf Course View', 'Smart Home', 'Maid\'s Room', 'BBQ Area'],
    images: ['/images/villa4.jpg', '/images/villa4-2.jpg', '/images/villa4-3.jpg'],
    agent: {
      name: 'John Smith',
      role: 'Property Advisor',
      phone: '+971 50 111 2222',
      email: 'john.s@builderbookings.com',
      image: '/images/agent-6.jpg'
    },
    coordinates: {
      lat: 25.024969,
      lng: 55.223838
    },
    address: 'Damac Hills, Dubai, UAE',
    yearBuilt: 2023,
    category: 'villa'
  }
];

// Update all remaining properties to use placeholder images
featuredProperties.forEach(property => {
  property.image = propertyImage;
  property.images = [propertyImage, propertyImage, propertyImage];
  if (property.agent) {
    property.agent.image = agentImage;
  }
}); 