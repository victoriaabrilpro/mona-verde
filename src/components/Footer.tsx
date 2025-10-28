import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer: React.FC = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = React.useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = React.useState(false);

  const partners = [
    { name: 'Partner 1', logo: 'https://lh3.googleusercontent.com/pw/AP1GczN9FVve-XCGUsWfICdbxKD0bOFc8dZp-oMCHKrwP0LyVyHqoQp37i-AKN-jMx0p69_2yWzVoqHoBVWNCWi23GPri0UVCfIhAF4_JJqwkDC7x7fqT9kUeiF1hnp0HBWZ-aurTsS6HtljcpcG9b5rnHJA=w627-h146-s-no-gm?authuser=1' },
    { name: 'Partner 2', logo: 'https://lh3.googleusercontent.com/pw/AP1GczMccaABlP4Qz682sFOoSFzcUpjJGKkxJ0XfUjUs1x_iE4BxzuGB7isCgdQNLO1S7EsJsduTxG3OhHN_ELqiGMV5WtG_h2amM6tJKLziVFnFJhCc5IYz4GXSrmq3_RkXothIaSaV1Jf896e9Oao8N6wD=w413-h97-s-no-gm?authuser=1' },
    { name: 'Partner 3', logo: 'https://lh3.googleusercontent.com/pw/AP1GczN3HevjumbtYLmF2vf-gP_V9-MfEYashi_atlEfkkHCSnx2PLTwu6raiCq-A89U6nXObAycEaAgQFtDENTxMVlgdGDXOSE3jspeia5Zx0McUxRmyXqukGu_aKMdGmYZFoL2GiSedf1-eNYO4Xh5O_4d=w3200-h1378-s-no-gm?authuser=1' },
    { name: 'Partner 4', logo: 'https://lh3.googleusercontent.com/pw/AP1GczNb6D8-2GXcZknV-qp0hNydRgErpr1hFkHte5co2fZcjc5T8rgX5_BXNTyvdCZafTYalHF53eL6ETVLzHQfyJ0R2ZDu3O9L_jB-AvbVkqtERImKDwvcqSqvaCzAKOQiHMgloRIYZ2cctxXcvhWkXZc2=w2422-h663-s-no-gm?authuser=1' },
    { name: 'Partner 5', logo: 'https://lh3.googleusercontent.com/pw/AP1GczMlWVH_zXTw13jCIxyi_H0PRQIdMZ_4hhu0fb5NNOSBOJsO_uDVs9x0Kw4fOqJ0RMmQOXrY-gMwsTRPNzjwgkMOi9Ik0evrd_q8ZFkZ8VaE3wyyw50d4E3azqgkZVaRIXBv6gQpxme4zBw94thE6IQf=w1177-h254-s-no-gm?authuser=1' },
    { name: 'Partner 6', logo: 'https://lh3.googleusercontent.com/pw/AP1GczO_RQRdhG3ZnuRGLFxekAoWVUFzujC_KotKl-i9Sreir0j6CqcmJf_xJt8GqGGGf2jXC6CsAf-i3aI9dinc4p2cwtE38DSRo6BhC4Q75vTvDifq3ED0v6EPgO4bf0XWeZm4J6_N_HC8S8rlp5lcIscq=w3600-h642-s-no-gm?authuser=1' },
  ];

  return (
    <footer className="bg-white text-[#4E5A48]">
      {/* Partners Section */}
      <section className="py-6 bg-white">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-full"
          >
            {/* Desktop version - static */}
            <div className="hidden md:flex items-center justify-center gap-8 max-w-6xl mx-auto px-6">
              {partners.map((partner, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * index, ease: "easeOut" }}
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-32 h-16"
                  style={{ 
                    minWidth: '128px', 
                    height: '64px'
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain opacity-60"
                    style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1084%) hue-rotate(82deg) brightness(95%) contrast(89%)' }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Mobile version - auto-scrolling */}
            <div className="md:hidden overflow-hidden">
              <div className="flex items-center gap-8 animate-scroll">
                {/* First set of logos */}
                {partners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-32 h-16"
                    style={{ 
                      minWidth: '128px', 
                      height: '64px'
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain opacity-60"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1084%) hue-rotate(82deg) brightness(95%) contrast(89%)' }}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center w-32 h-16"
                    style={{ 
                      minWidth: '128px', 
                      height: '64px'
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain opacity-60"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1084%) hue-rotate(82deg) brightness(95%) contrast(89%)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      {/* Decorative Bar Above Footer */}
      <section className="h-6 bg-[#4E5A48] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/pw/AP1GczORrmDXaYoA6syms0khopii66AR55rH2HGCEBULYdHKTRZWZdLOr856HVJ_JjVVS8rRAUulC_PdMVkx41sq9RicyrG0GftHneVAmJgle5NqsqgimjqBQ7aJIwXC285Zptrttcc4iH5xazNas9hq57EY=w1600-h896-s-no-gm?authuser=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </section>

      <div className="max-w-7xl mx-auto px-6 bg-white">
        <div className="py-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              src="https://lh3.googleusercontent.com/pw/AP1GczNASSit0Sy3aqz1b9VrAl5qZKCdaifXgZYs3k-3nL2kMT90pbQf-3iE6nW00AWUn8GJdy2QW1jno3KZixto_jV3xDT8vjdMLHIk4YglYHNoXnccJZfjj546aSkuVhV5w-akjJHay0Hr44rFNaQTXrf6=w1919-h1365-s-no-gm?authuser=1"
              alt="Mona Verde Logo"
              className="h-12 w-auto"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#4E5A48]/70 text-sm leading-relaxed font-colfax-regular"
            >
              Our rooftop restaurant sits on the 8th floor in central Lisbon.
              Part of the Mona Experience Group family.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex space-x-4"
            >
              <a
                href="https://www.instagram.com/monaverdelisboa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E5A48]/70 hover:text-[#F79548] transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/monaexperience/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E5A48]/70 hover:text-[#F79548] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="text-lg font-pp-haton text-[#4E5A48]"
            >
              Contact
            </motion.h4>
            <div className="space-y-3 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="flex items-center space-x-3"
              >
                <Phone size={16} className="text-[#F79548]" />
                <a href="tel:+351914023304" className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors font-colfax-regular">
                  +351 914 023 304
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                className="flex items-center space-x-3"
              >
                <Mail size={16} className="text-[#F79548]" />
                <a href="mailto:booking@monaexperience.com" className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors font-colfax-regular">
                  booking@monaexperience.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-xs text-[#4E5A48]/50 ml-7 font-colfax-regular -mt-2"
              >
                1-19 guests dining
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                className="flex items-center space-x-3"
              >
                <Mail size={16} className="text-[#F79548]" />
                <a href="mailto:events@monaexperience.com" className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors font-colfax-regular">
                  events@monaexperience.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="text-xs text-[#4E5A48]/50 ml-7 font-colfax-regular -mt-1"
              >
                20+ guests or private events
              </motion.div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-lg font-pp-haton text-[#4E5A48]"
            >
              Address
            </motion.h4>
            <div className="space-y-3 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="flex items-start space-x-3"
              >
                <MapPin size={16} className="text-[#F79548] mt-0.5" />
                <div className="text-[#4E5A48]/70 font-colfax-regular">
                  <p>R. Castilho 14C 8th Floor</p>
                  <p>1250-066 Lisboa, Portugal</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-3"
              >
                <Clock size={16} className="text-[#F79548]" />
                <div className="text-[#4E5A48]/70 font-colfax-regular">
                  <p>Monday – Sunday</p>
                  <p>6:00 PM – 2:00 AM</p>
                </div>
              </motion.div>
              <motion.a
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                href="https://maps.app.goo.gl/47T25VoAgyH1MeNH6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E5A48]/70 hover:text-[#F79548] transition-colors duration-200 text-sm font-colfax-regular inline-flex items-center space-x-2 ml-7"
              >
                <span>View on Google Maps</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="space-y-4 md:col-start-1 lg:col-start-auto"
          >
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="text-lg font-pp-haton text-[#4E5A48]"
            >
              Quick Links
            </motion.h4>
            <div className="space-y-2 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              >
                <Link 
                to="/careers" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors block font-colfax-regular"
              >
                Careers
              </Link>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors block font-colfax-regular text-left"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="text-[#4E5A48]/70 hover:text-[#4E5A48] transition-colors block font-colfax-regular text-left"
              >
                Terms of Service
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="border-t border-[#4E5A48]/20 mt-12 pt-6 pb-2"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-center sm:text-left"
            >
              <a
                href="https://www.vasseo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E5A48]/50 hover:text-[#4E5A48]/70 text-sm font-colfax-regular transition-colors duration-300 inline-flex items-center space-x-1"
              >
                <span>Created with</span>
                <span className="text-[#F79548] text-sm">♥</span>
                <span>by Vasseo</span>
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-[#4E5A48]/60 text-sm font-colfax-regular text-center sm:text-right"
            >
              © 2025 Mona Verde. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyPolicyOpen} 
        onClose={() => setIsPrivacyPolicyOpen(false)} 
      />
      
      {/* Terms of Service Modal */}
      <TermsOfServiceModal 
        isOpen={isTermsOfServiceOpen} 
        onClose={() => setIsTermsOfServiceOpen(false)} 
      />
    </footer>
  );
};

export default Footer;