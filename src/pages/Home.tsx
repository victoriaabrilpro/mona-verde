import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ReservationWidget from '../components/ReservationWidget';
import { client, urlFor, queries } from '../lib/sanity';
import type { HeroSection, HomePage } from '../types/sanity';

const Home: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [monaExperienceIndex, setMonaExperienceIndex] = useState(0);
  const [rhythmOfMonaIndex, setRhythmOfMonaIndex] = useState(0);
  
  // Sanity data state
  const [heroData, setHeroData] = useState<HeroSection | null>(null);
  const [homeData, setHomeData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hero, home] = await Promise.all([
          client.fetch<HeroSection>(queries.heroSection),
          client.fetch<HomePage>(queries.homePage)
        ]);
        
        setHeroData(hero);
        setHomeData(home);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching home page data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hero carousel effect
  useEffect(() => {
    if (!heroData?.images?.length) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroData.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData?.images?.length]);

  // Mona Experience carousel effect
  useEffect(() => {
    if (!homeData?.monaExperience?.images?.length) return;
    
    const interval = setInterval(() => {
      setMonaExperienceIndex((prevIndex) => (prevIndex + 1) % homeData.monaExperience.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [homeData?.monaExperience?.images?.length]);

  // Rhythm of Mona carousel effect
  useEffect(() => {
    if (!homeData?.rhythmOfMona?.images?.length) return;
    
    const interval = setInterval(() => {
      setRhythmOfMonaIndex((prevIndex) => (prevIndex + 1) % homeData.rhythmOfMona.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [homeData?.rhythmOfMona?.images?.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-[#4E5A48] font-colfax-regular"></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E5A48]/30 to-[#4E5A48]/50">
          {heroData?.images?.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 0.7 : 0,
                scale: index === currentImageIndex ? 1 : 1.05
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${urlFor(image).width(1920).url()}')` }}
              ></div>
            </motion.div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-canela mb-6">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOy35JogbFRFbCYBP0iRILF0THMmssKTUWlXbwv8w30dZJ9kZT_QZV5K2BcMHGHMdognMbgwF7y34C1mQGU27MvnNNFLNsfBmdVRjX5cuYUPVaXAx-F0zkoxff1bLYGGETHdXvLmqCE2xrNx9ShqDRH=w2083-h938-s-no-gm?authuser=1"
                alt="Mona Verde"
                className="h-14 md:h-20 w-auto mx-auto -mt-6"
              />
            </h1>
            <p className="text-lg md:text-xl mb-8 font-canela tracking-widest uppercase">
              <span className="text-sm md:text-xl">{heroData?.tagline || 'CELEBRATE · CONNECT · EXPERIENCE'}</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                onClick={() => setIsReservationOpen(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-[0.15em] font-colfax-medium hover:bg-white hover:text-[#4E5A48] hover:scale-105 transition-all duration-300 flex items-center space-x-2 group shadow-md hover:shadow-lg min-w-[160px] justify-center"
              >
                <span>Reservation</span>
              </motion.button>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                href="https://qr.finedinemenu.com/mona-verde/menu/67d054ad3dcba5e21e2bfae5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 text-sm uppercase tracking-[0.15em] font-colfax-medium hover:bg-white hover:text-[#4E5A48] hover:scale-105 transition-all duration-300 flex items-center space-x-2 group shadow-md hover:shadow-lg min-w-[160px] justify-center"
              >
                <span>Menu</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        {heroData?.images && heroData.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"
          >
            {heroData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 hover:scale-110 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-transparent'
                } focus:outline-none`}
              />
            ))}
          </motion.div>
        )}
      </section>

      {/* Image Decorative Bar */}
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

      {/* Mona Experience Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-0 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-24 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-6 md:space-y-12 flex flex-col justify-center py-6 lg:py-24 px-6 lg:pr-6 lg:px-0 order-1 lg:order-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-canela text-[#4E5A48]"
              >
                {homeData?.monaExperience?.title || 'MONA EXPERIENCE'}<br />
                {homeData?.monaExperience?.subtitle || 'LISBON'}
              </motion.h2>
              <div className="space-y-4 md:space-y-8">
                {homeData?.monaExperience?.paragraphs?.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    className="text-black text-base md:text-lg leading-relaxed font-colfax-regular"
                  >
                    {paragraph}
                  </motion.p>
                ))}
                {homeData?.monaExperience?.tagline && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-[#4E5A48] text-lg font-colfax-medium tracking-widest uppercase"
                  >
                    {homeData.monaExperience.tagline}
                  </motion.div>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <Link
                  to="/about"
                  className="inline-block text-[#4E5A48] uppercase tracking-widest font-colfax-regular hover:text-[#4E5A48]/80 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative -mx-6 lg:mx-0 w-screen lg:w-full overflow-hidden order-2 lg:order-2"
            >
              <div className="w-screen lg:w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-0 relative left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none overflow-hidden">
                <div className="relative w-full h-full" style={{ aspectRatio: '3/4' }}>
                  {homeData?.monaExperience?.images?.map((image, index) => (
                    <motion.img
                      key={index}
                      src={urlFor(image).width(800).url()}
                      alt={`Mona Experience ${index + 1}`}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === monaExperienceIndex ? 1 : 0,
                        scale: index === monaExperienceIndex ? 1 : 1.05
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rhythm of Mona Section */}
      <section className="bg-[#4E5A48] relative overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/pw/AP1GczORrmDXaYoA6syms0khopii66AR55rH2HGCEBULYdHKTRZWZdLOr856HVJ_JjVVS8rRAUulC_PdMVkx41sq9RicyrG0GftHneVAmJgle5NqsqgimjqBQ7aJIwXC285Zptrttcc4iH5xazNas9hq57EY=w1600-h896-s-no-gm?authuser=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Content with relative positioning */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-8 order-3 lg:order-2 relative z-10 flex flex-col justify-center py-6 lg:py-24 px-6 lg:px-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-canela text-white"
              >
                {homeData?.rhythmOfMona?.title || 'RHYTHM OF MONA'}
              </motion.h2>
              <div className="text-white/90 text-lg leading-relaxed space-y-6 font-colfax-regular">
                {homeData?.rhythmOfMona?.paragraphs?.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <Link
                  to="/events"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-block text-white/90 uppercase tracking-widest font-colfax-regular hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span>Explore Our Events</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative order-4 lg:order-1 z-10 -mx-6 lg:mx-0 w-screen lg:w-full overflow-hidden"
            >
              <div className="w-screen lg:w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-0 relative left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none overflow-hidden">
                <div className="relative w-full h-full" style={{ aspectRatio: '3/4' }}>
                  {homeData?.rhythmOfMona?.images?.map((image, index) => (
                    <motion.img
                      key={index}
                      src={urlFor(image).width(800).url()}
                      alt={`Rhythm of Mona ${index + 1}`}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === rhythmOfMonaIndex ? 1 : 0,
                        scale: index === rhythmOfMonaIndex ? 1 : 1.05
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center group md:ml-20"
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-xl font-canela text-[#4E5A48] mb-4 tracking-wide"
              >
                Cuisine
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <Link
                  to="/cuisine"
                  className="inline-flex items-center space-x-2 border-2 border-[#4E5A48] text-[#4E5A48] px-6 py-2 text-xs uppercase tracking-[0.15em] font-colfax-medium hover:bg-[#4E5A48] hover:text-white transition-all duration-300 group-hover:scale-105"
                >
                  <span>Explore Menu</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-center group"
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-xl font-canela text-[#4E5A48] mb-4 tracking-wide"
              >
                Events
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  to="/events"
                  className="inline-flex items-center space-x-2 border-2 border-[#4E5A48] text-[#4E5A48] px-6 py-2 text-xs uppercase tracking-[0.15em] font-colfax-medium hover:bg-[#4E5A48] hover:text-white transition-all duration-300 group-hover:scale-105"
                >
                  <span>Plan Event</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center group md:mr-20"
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-xl font-canela text-[#4E5A48] mb-4 tracking-wide"
              >
                Reservation
              </motion.h3>
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                onClick={() => setIsReservationOpen(true)}
                className="inline-flex items-center space-x-2 border-2 border-[#4E5A48] text-[#4E5A48] px-6 py-2 text-xs uppercase tracking-[0.15em] font-colfax-medium hover:bg-[#4E5A48] hover:text-white transition-all duration-300 group-hover:scale-105"
              >
                <span>Book Now</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Widget */}
      <ReservationWidget 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </div>
  );
};

export default Home;