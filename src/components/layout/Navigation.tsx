'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 20) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPropertiesDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link 
            href="/" 
            className={`font-bold transition-all duration-500 ease-in-out ${
              isScrolled 
                ? 'text-yellow-500 text-xl' 
                : 'text-white text-2xl'
            }`}
          >
            Builderbookings
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-all duration-500 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-500 after:bg-yellow-500' 
                  : 'text-white hover:text-yellow-400 after:bg-yellow-400'
              }`}
            >
              Home
            </Link>
            
            {/* Properties Dropdown */}
            <div 
              className="relative group" 
              ref={dropdownRef}
            >
              <button 
                onClick={() => setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen)}
                onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                className={`flex items-center transition-all duration-500 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-yellow-500 after:bg-yellow-500' 
                    : 'text-white hover:text-yellow-400 after:bg-yellow-400'
                }`}
              >
                Properties
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isPropertiesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-64 rounded-lg shadow-xl bg-white/95 backdrop-blur-sm border border-gray-100 transform transition-all duration-300 origin-top-left z-50 ${
                  isPropertiesDropdownOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
                onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                onMouseLeave={() => setIsPropertiesDropdownOpen(false)}
              >
                <div className="py-2" role="menu" aria-orientation="vertical">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Property Types</span>
                  </div>
                  <Link 
                    href="/properties/featured-projects"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                    onClick={() => setIsPropertiesDropdownOpen(false)}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </span>
                    Featured Projects
                  </Link>
                  <Link 
                    href="/properties/apartments-penthouses"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                    onClick={() => setIsPropertiesDropdownOpen(false)}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    Apartments & Penthouses
                  </Link>
                  <Link 
                    href="/properties/villas-townhouses"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                    onClick={() => setIsPropertiesDropdownOpen(false)}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </span>
                    Villas & Townhouses
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="/developers"
              className={`transition-all duration-500 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-500 after:bg-yellow-500' 
                  : 'text-white hover:text-yellow-400 after:bg-yellow-400'
              }`}
            >
              Developers
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-500 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-500 after:bg-yellow-500' 
                  : 'text-white hover:text-yellow-400 after:bg-yellow-400'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-all duration-500 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-500 after:bg-yellow-500' 
                  : 'text-white hover:text-yellow-400 after:bg-yellow-400'
              }`}
            >
              Contact
            </Link>
            <button 
              className={`px-4 py-2 transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-500' 
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              Login
            </button>
            <button className={`px-4 py-2 rounded-md transition-all duration-500 ease-in-out ${
              isScrolled 
                ? 'bg-yellow-500 text-white hover:bg-yellow-400' 
                : 'bg-yellow-500 text-white hover:bg-yellow-400'
            }`}>
              List Property
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-white hover:text-yellow-400'
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-yellow-500 hover:underline transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Properties Dropdown */}
              <div className="relative px-4 py-2">
                <button
                  onClick={() => setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-500 transition-all"
                >
                  <span>Properties</span>
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isPropertiesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isPropertiesDropdownOpen && (
                  <div className="mt-3 space-y-1 pl-4 border-l-2 border-yellow-500">
                    <Link
                      href="/properties/featured-projects"
                      className="flex items-center py-2 text-gray-700 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                      Featured Projects
                    </Link>
                    <Link
                      href="/properties/apartments-penthouses"
                      className="flex items-center py-2 text-gray-700 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      Apartments & Penthouses
                    </Link>
                    <Link
                      href="/properties/villas-townhouses"
                      className="flex items-center py-2 text-gray-700 hover:text-yellow-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mr-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </span>
                      Villas & Townhouses
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                href="/developers"
                className="text-gray-700 hover:text-yellow-500 hover:underline transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Developers
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-yellow-500 hover:underline transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-yellow-500 hover:underline transition-all px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2 space-y-2">
                <button className="w-full px-4 py-2 text-yellow-500 hover:text-yellow-400 border border-yellow-500 hover:border-yellow-400 rounded-md transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition-colors">
                  List Property
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
