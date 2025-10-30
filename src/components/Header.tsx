import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { client, urlFor, queries } from '../lib/sanity';
import type { ContactInfo } from '../types/sanity';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'cuisine', label: 'CUISINE', path: '/cuisine' },
    { id: 'reservation', label: 'RESERVATION', path: '/reservation' },
    { id: 'events', label: 'EVENTS', path: '/events' },
  ];

  // Fetch contact info for logo and Instagram
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await client.fetch<ContactInfo>(queries.contactInfo);
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
  };

  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    handleNavigation(path);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    if (isMenuOpen) {
      if (mainContent) {
        mainContent.style.filter = 'brightness(0.7)';
        mainContent.style.transition = 'filter 0.3s ease';
      }
      if (footer) {
        footer.style.filter = 'brightness(0.7)';
        footer.style.transition = 'filter 0.3s ease';
      }
    } else {
      if (mainContent) {
        mainContent.style.filter = 'none';
        mainContent.style.transition = 'filter 0.3s ease';
      }
      if (footer) {
        footer.style.filter = 'none';
        footer.style.transition = 'filter 0.3s ease';
      }
    }

    return () => {
      if (mainContent) {
        mainContent.style.filter = 'none';
        mainContent.style.transition = '';
      }
      if (footer) {
        footer.style.filter = 'none';
        footer.style.transition = '';
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const shouldShowBackground =
    isScrolled ||
    ['/cuisine','/about','/reservation','/events','/careers'].includes(location.pathname);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 h-16 ${
          shouldShowBackground ? 'bg-[#4E5A48]/90 backdrop-blur-lg' : 'bg-transparent'
        }`}
        style={{ zIndex: 20 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 h-full relative">
          <div className="flex items-center justify-between h-full">
            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(v => !v)}
              className="text-white hover:text-[#F79548] transition-colors duration-200 focus:outline-none h-full flex items-center"
              aria-controls="drawer"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-label="Open menu"
              style={{ zIndex: 21 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center">
              <button onClick={(e) => handleClick(e, '/')} className="text-2xl font-bold tracking-wide">
                {contactInfo?.logo ? (
                  <img
                    src={urlFor(contactInfo.logo).width(400).url()}
                    alt="Mona Verde Logo"
                    className="h-8 w-auto"
                  />
                ) : (
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczNASSit0Sy3aqz1b9VrAl5qZKCdaifXgZYs3k-3nL2kMT90pbQf-3iE6nW00AWUn8GJdy2QW1jno3KZixto_jV3xDT8vjdMLHIk4YglYHNoXnccJZfjj546aSkuVhV5w-akjJHay0Hr44rFNaQTXrf6=w1919-h1365-s-no-gm?authuser=1"
                    alt="Mona Verde Logo"
                    className="h-8 w-auto"
                  />
                )}
              </button>
            </div>

            {/* Instagram */}
            {contactInfo?.socialMedia?.instagram && (
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F79548] transition-colors duration-200 h-full flex items-center"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed top-0 left-0 h-screen w-[320px] max-w-[90vw] flex flex-col overflow-hidden shadow-xl"
            style={{
              zIndex: 30,
              backgroundColor: '#4E5A48',
              backgroundImage:
                "url('https://lh3.googleusercontent.com/pw/AP1GczOWd4lVpGAh6t7Qm_ye-keKUDtf0amqbFAWr8B4TkecpmrR0jKHWjkoHjHFQAEhXi4eYQ_bNOoAQGuP9XAY7BxuorBM3J3pYr_6JguHnUsjd0taCnltKxl7lp2p9rWxJnM9ZxmW330HBNjCOd8BoSuZ=w896-h1600-s-no-gm?authuser=1')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="dialog"
            aria-modal="false"
            aria-label="Main menu"
            id="drawer"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#4E5A48]/80 z-0" />

            {/* Close */}
            <div className="p-6 relative z-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#F79548] transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6 relative z-10">
              <nav className="space-y-6">
                {navigationItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left py-2 text-base font-medium tracking-wider transition-colors duration-200 hover:text-[#F79548] ${
                      location.pathname === item.path ? 'text-[#F79548]' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;