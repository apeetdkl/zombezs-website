import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

export default function Navbar({ setIsMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpenState] = useState(false);

  // Detect scroll event to apply scroll effects to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpenState(!isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen); // Update the state in App.js
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpenState(false);
    setIsMobileMenuOpen(false); // Update the state in App.js
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white'  // Gradient background when scrolled
          : 'bg-black text-[#00FF00]'  // Default background when not scrolled
      }`}
    >
      <div className="max-w-94 mx-auto px-3 sm:px-3 md:px-5 lg:px-4">
        {/* Navbar Flexbox */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
          <a href="/" target="" rel="noopener noreferrer">
            <img
              src="images/Logo3.png"
              alt="ZOMBEZS Logo"
              className="w-54 h-48 pt-4 mt-2 sm:w-64 sm:h-52 sm:mt-3 max-h-58 max-w-48"
            />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-7">
            <Link to="team" smooth={true} duration={800} className="text-lg hover:text-red-500 transition duration-300">
              Team
            </Link>
            <Link to="services" smooth={true} duration={800} className="text-lg hover:text-red-500 transition duration-300">
              Services
            </Link>
            <Link to="projects" smooth={true} duration={800} className="text-lg hover:text-red-500 transition duration-300">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={800} className="text-lg hover:text-red-500 transition duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-green-400 focus:outline-none">
              <svg
                className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-green-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay (Black Background when Opened) */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-90 z-30 flex justify-center items-center"
            onClick={closeMobileMenu} // Clicking the overlay closes the menu
          >
            {/* Mobile Menu Content (Centered) */}
            <div
              className={`text-green-400 text-center flex flex-col items-center space-y-6 transition-all duration-500 transform ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <Link
                to="team"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}
                className="text-2xl hover:bg-green-900 px-6 py-3 w-full"
              >
                Team
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}
                className="text-2xl hover:bg-green-900 px-6 py-3 w-full"
              >
                Services
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}
                className="text-2xl hover:bg-green-900 px-6 py-3 w-full"
              >
                Projects
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                onClick={closeMobileMenu}
                className="text-2xl hover:bg-green-900 px-6 py-3 w-full"
              >
                About Us
              </Link>

              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="mt-8 px-6 py-3 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-200"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
