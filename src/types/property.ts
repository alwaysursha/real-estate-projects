export interface Property {
  id: number | string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  type: string;
  status: string;
  developer: string;
  description: string;
  images: string[];
  amenities?: string[];
  features?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  category?: string;
  image?: string;
  agent?: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
  address?: string;
  yearBuilt?: number;
} 