'use client'

import { useState, useEffect, useRef, TouchEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Developer data with real logo URLs
const developers = [
  {
    name: 'Emaar Properties',
    logo: 'https://www.emaar.com/-/media/project/emaar-corporate/emaar-logo.svg',
    description: 'Leading developer of iconic projects including Burj Khalifa and Dubai Mall',
    projectCount: 82,
    establishedYear: 1997,
    slug: 'emaar'
  },
  {
    name: 'Nakheel',
    logo: 'https://www.nakheel.com/style%20library/nakheel/images/nakheel-logo.svg',
    description: 'Creator of world-famous developments including Palm Jumeirah and Dubai Islands',
    projectCount: 65,
    establishedYear: 2000,
    slug: 'nakheel'
  },
  {
    name: 'Dubai Properties',
    logo: 'https://www.dp.ae/images/default-source/default-album/dp-logo.png',
    description: 'Developer of mixed-use destinations including Business Bay and JBR',
    projectCount: 48,
    establishedYear: 2004,
    slug: 'dubai-properties'
  },
  {
    name: 'Damac Properties',
    logo: 'https://www.damacproperties.com/images/logo.svg',
    description: 'Luxury real estate developer with projects across Dubai and international markets',
    projectCount: 55,
    establishedYear: 2002,
    slug: 'damac'
  },
  {
    name: 'Meraas',
    logo: 'https://www.meraas.com/content/dam/meraas/logos/meraas.svg',
    description: 'Developer of unique lifestyle destinations including City Walk and Bluewaters Island',
    projectCount: 35,
    establishedYear: 2007,
    slug: 'meraas'
  },
  {
    name: 'Sobha Realty',
    logo: 'https://www.sobharealty.com/assets/images/logo-dark.svg',
    description: 'Premium luxury developer known for Sobha Hartland and high-end residential projects',
    projectCount: 28,
    establishedYear: 1976,
    slug: 'sobha'
  },
  {
    name: 'Select Group',
    logo: 'https://select-group.ae/wp-content/uploads/2022/03/select-group-logo.svg',
    description: 'Leading private real estate developer with premium waterfront properties',
    projectCount: 32,
    establishedYear: 2002,
    slug: 'select-group'
  },
  {
    name: 'Azizi Developments',
    logo: 'https://www.azizidevelopments.com/assets/images/logo.svg',
    description: 'Fast-growing developer with major projects in Dubai including Riviera and Creek Views',
    projectCount: 45,
    establishedYear: 2007,
    slug: 'azizi'
  },
  {
    name: 'Omniyat',
    logo: 'https://www.omniyat.com/images/logo-black.svg',
    description: 'Ultra-luxury property developer known for One Palm and The Opus',
    projectCount: 22,
    establishedYear: 2005,
    slug: 'omniyat'
  },
  {
    name: 'Deyaar',
    logo: 'https://www.deyaar.ae/assets/images/logo.svg',
    description: 'Innovative developer with projects in Business Bay and Dubai Production City',
    projectCount: 38,
    establishedYear: 2002,
    slug: 'deyaar'
  },
  {
    name: 'Al Habtoor Group',
    logo: 'https://www.habtoor.com/images/logo.svg',
    description: 'Diversified developer known for Al Habtoor City and luxury residential towers',
    projectCount: 25,
    establishedYear: 1970,
    slug: 'al-habtoor'
  },
  {
    name: 'MAG Lifestyle Development',
    logo: 'https://www.magld.com/assets/images/logo.svg',
    description: 'Developer focused on luxury and wellness-centered residential communities',
    projectCount: 20,
    establishedYear: 2003,
    slug: 'mag'
  }
]

export default function DevelopersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.max(Math.ceil(developers.length / cardsToShow) - 1, 0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides : prev - 1))
  }

  const startAutoplay = () => {
    stopAutoplay()
    autoplayRef.current = setInterval(nextSlide, 5000)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = undefined
    }
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [totalSlides])

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    stopAutoplay()
    setIsDragging(true)
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setTouchEnd(e.targetTouches[0].clientX)
    e.preventDefault() // Prevent scrolling while swiping
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
    setIsDragging(false)
    startAutoplay()
  }

  const handleImageError = (developerSlug: string) => {
    setFailedImages(prev => new Set(prev).add(developerSlug))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premier Developers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover properties from UAE's most trusted and renowned real estate developers,
            known for their commitment to quality and innovation.
          </p>
        </div>
        
        <div className="relative px-4">
          <button 
            onClick={() => {
              prevSlide()
              stopAutoplay()
              startAutoplay()
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors md:flex hidden"
            aria-label="Previous developers"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div 
            ref={sliderRef}
            className="overflow-hidden touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`flex transition-transform duration-500 ease-out ${isDragging ? 'cursor-grabbing' : ''}`}
              style={{ 
                transform: touchStart && touchEnd 
                  ? `translateX(calc(-${currentSlide * 100}% - ${touchStart - touchEnd}px))`
                  : `translateX(-${currentSlide * 100}%)`,
                transition: touchStart && touchEnd ? 'none' : 'transform 500ms ease-out'
              }}
            >
              {Array.from({ length: Math.ceil(developers.length / cardsToShow) }).map((_, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-full grid gap-6 px-4 ${
                    cardsToShow === 1 ? 'grid-cols-1' : 
                    cardsToShow === 2 ? 'grid-cols-2' : 
                    'grid-cols-4'
                  }`}
                >
                  {developers.slice(index * cardsToShow, (index + 1) * cardsToShow).map((developer) => (
                    <Link 
                      href={`/developers/${developer.slug}`}
                      key={developer.slug}
                      className="group bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      onClick={(e) => {
                        if (isDragging) {
                          e.preventDefault()
                        }
                      }}
                    >
                      <div className="h-20 mb-4 relative flex items-center justify-center bg-white rounded-md p-2">
                        {failedImages.has(developer.slug) ? (
                          <span className="text-lg font-semibold text-gray-600">
                            {developer.name}
                          </span>
                        ) : (
                          <Image
                            src={developer.logo}
                            alt={`${developer.name} logo`}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority={index < cardsToShow}
                            onError={() => handleImageError(developer.slug)}
                            unoptimized={true}
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {developer.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {developer.description}
                      </p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{developer.projectCount} Projects</span>
                        <span>Est. {developer.establishedYear}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              nextSlide()
              stopAutoplay()
              startAutoplay()
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors md:flex hidden"
            aria-label="Next developers"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  stopAutoplay()
                  startAutoplay()
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/developers"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg group"
          >
            <span className="mr-2">View All Developers</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 