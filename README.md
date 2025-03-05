# Real Estate Project

A modern real estate website built with Next.js, React, and Tailwind CSS.

## Features

- Property listings with detailed pages
- Featured projects showcase
- Interactive property maps
- Agent contact information
- Responsive design for all devices
- Modern UI with smooth animations

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd real-estate-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your Google Maps API key:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

For detailed deployment instructions to Cloudflare Pages, see the [CLOUDFLARE_DEPLOYMENT_GUIDE.md](./CLOUDFLARE_DEPLOYMENT_GUIDE.md) file.

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable React components
- `src/data/` - Data models and mock data
- `public/` - Static assets like images

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Google Maps API

## License

This project is licensed under the MIT License - see the LICENSE file for details.
