import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import ReservationWidget from '../components/ReservationWidget';

const Home: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [monaExperienceIndex, setMonaExperienceIndex] = React.useState(0);
  const [rhythmOfMonaIndex, setRhythmOfMonaIndex] = React.useState(0);

  const heroImages = [
    'https://lh3.googleusercontent.com/pw/AP1GczNb4PLuygeKoIERnj5pS64_MzFejUXFxWssuBrHeFfUC2AgwJON1Ib9Dv__KHlAoAd0QQmEB5gLKJvYWL9x3z2R75ok5JiNN7K3-yDPLz71SAhe-prLttGwoiGp47s4vGCvnk-1dgIVokNMeLxOGIkV=w1590-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczMbW9Z0gEE6Xs43nQCkS4kKjtqcvQbHUfECLR8g0aZyLcJ4dkq1dUIkIRIFjtw9m0rlV1avqnB-hBvpDN7QVFzB-yNPxxGP3ykXpQ9SFm3IrRoZ_aB1yp1jRuV1wnc1EfM4PKzO2mSzQwS2Cgq1dows=w1445-h773-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczOrstK808rUwrGKVqyzf04Qziqr-f6g6eA64GnNgUrD09ifcebjV3F5CtpMAnhPEr-QEQQYEmgwTRi9IwncxCQDGeThHwVpUqtQUaE4McG1ZtGI7LzZME_IAogRZBrxJ4-2L8k22rw6dfGdd2fkUVa_=w1482-h2008-s-no-gm?authuser=1'
  ];

  const monaExperienceImages = [
    'https://lh3.googleusercontent.com/pw/AP1GczPJGBuSpIhoAYWPnXWXbrnOFEcEViUCMs35-rGaQSP6mQ-zDX40u_0Et3tb3A60uXWym41Hq1iRBVlHxDu_22al0skZZJ-i2o_1omVJr8R3FqZ7ZRuEQXfUYpCJCfPesvXBYs5zFqMuz7xkYvhYPZeN=w861-h1289-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczOlC4InOS2g5fe4qXtJK7u6sfV0jgUIEyfgtw7kfMb-CCUBlY772YIJhRLGFX31_cH52SR80jtmCmxqsFZOjXatxB9CHcKMDi1zHjB0oM6YvZ4depY5QeF5lV7C2ZAyxWI8dLXndwRIWfY9h_LDpwjI=w1080-h1616-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczPs7wb2W8CR8qbRBla6tjH46tuH5utXqXGx-NathlHBq0lBXEIIX1xua3t85NyzYRJtRsPC-QA0Avu8fbWzO3MsDy1bpVF9b7aNVSUrJEx_wVIARoeKXiv6dRKXzqKvn0jiX73Rc26VJqRlLVWWJCs8=w1338-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczO_z8-Lf9bmE90tkVxsYFvpiInpNvC8pYmqkos3U5YSER_e2dQO3Cee5kCAyxwIOI8rQ8gpmqv8iW7GRm2Om3g1yUnbFNqKpk_ExD3xt7wh5s_I88WwJHxGUm3E6kCARnecCaqgpRMb_0-C1ZuESr18=w1080-h1616-s-no-gm?authuser=1'
  ];

  const rhythmOfMonaImages = [
    'https://lh3.googleusercontent.com/pw/AP1GczNnl7E8kxhTLzm_Xp1go48_E0TvgZCuMLf_RBny1zQHNAFLPErH0YhxWfZnXuQQhAD9EPkK_-u22_ajRhHVc3-9ccM3c9qqbLCZoN-z9Ixj_Hhn4B5iNfDX4yJgOx0wkeTI_xGgmXtyiAQ6w4roIucE=w1080-h1616-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczNraeOZiaoOPmfp3UcJKkEPl7JkKZMxNyM4NJmehDTO_HQkQ-K_S39J-HB7krH809ThpKX35G3J1KtJ-BMu46DMja83KJA_T07LGly_Gbt1HvoxSCiKhgHm9BKc8S23fEhM886YZYhZKYT7yWV90FzP=w1080-h1616-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczP2Cmz7Wo3xWSeUAaH53xsHk7mwS9xkDKqY6_k4G-mlWrrvguwCBRrL9mfx9S0b4oEDXQXb0DKbfiKYIHUTpJpt7PgpOECrwop7dVR6CJtdhzPwNwBlhUbtjUCDw43BTWlaf4lCeai7yyqT2yHSsEv4=w1080-h1616-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczMMJuIMn9fu8kFXAhDydJx7g5_Q9_24FWa-eUHC9IoGYHyzdjOZhQ749X1LhdCxOZQ-nyqsQyIjKzWpkEM8QitLCvSZuTybiXwnYqcodliiQN1oN4Zg__eOPJyLRgGUWYXTcnDyr4noD-BTTQsWqIYh=w1080-h1616-s-no-gm?authuser=1'
  ];

  const partners = [
    { name: 'Partner 1', logo: 'https://lh3.googleusercontent.com/pw/AP1GczN9FVve-XCGUsWfICdbxKD0bOFc8dZp-oMCHKrwP0LyVyHqoQp37i-AKN-jMx0p69_2yWzVoqHoBVWNCWi23GPri0UVCfIhAF4_JJqwkDC7x7fqT9kUeiF1hnp0HBWZ-aurTsS6HtljcpcG9b5rnHJA=w627-h146-s-no-gm?authuser=1' },
    { name: 'Partner 2', logo: 'https://lh3.googleusercontent.com/pw/AP1GczMccaABlP4Qz682sFOoSFzcUpjJGKkxJ0XfUjUs1x_iE4BxzuGB7isCgdQNLO1S7EsJsduTxG3OhHN_ELqiGMV5WtG_h2amM6tJKLziVFnFJhCc5IYz4GXSrmq3_RkXothIaSaV1Jf896e9Oao8N6wD=w413-h97-s-no-gm?authuser=1' },
    { name: 'Partner 3', logo: 'https://lh3.googleusercontent.com/pw/AP1GczN3HevjumbtYLmF2vf-gP_V9-MfEYashi_atlEfkkHCSnx2PLTwu6raiCq-A89U6nXObAycEaAgQFtDENTxMVlgdGDXOSE3jspeia5Zx0McUxRmyXqukGu_aKMdGmYZFoL2GiSedf1-eNYO4Xh5O_4d=w3200-h1378-s-no-gm?authuser=1' },
    { name: 'Partner 4', logo: 'https://lh3.googleusercontent.com/pw/AP1GczNb6D8-2GXcZknV-qp0hNydRgErpr1hFkHte5co2fZcjc5T8rgX5_BXNTyvdCZafTYalHF53eL6ETVLzHQfyJ0R2ZDu3O9L_jB-AvbVkqtERImKDwvcqSqvaCzAKOQiHMgloRIYZ2cctxXcvhWkXZc2=w2422-h663-s-no-gm?authuser=1' },
    { name: 'Partner 5', logo: 'https://lh3.googleusercontent.com/pw/AP1GczMlWVH_zXTw13jCIxyi_H0PRQIdMZ_4hhu0fb5NNOSBOJsO_uDVs9x0Kw4fOqJ0RMmQOXrY-gMwsTRPNzjwgkMOi9Ik0evrd_q8ZFkZ8VaE3wyyw50d4E3azqgkZVaRIXBv6gQpxme4zBw94thE6IQf=w1177-h254-s-no-gm?authuser=1' },
    { name: 'Partner 6', logo: 'https://lh3.googleusercontent.com/pw/AP1GczO_RQRdhG3ZnuRGLFxekAoWVUFzujC_KotKl-i9Sreir0j6CqcmJf_xJt8GqGGGf2jXC6CsAf-i3aI9dinc4p2cwtE38DSRo6BhC4Q75vTvDifq3ED0v6EPgO4bf0XWeZm4J6_N_HC8S8rlp5lcIscq=w3600-h642-s-no-gm?authuser=1' },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMonaExperienceIndex((prevIndex) => (prevIndex + 1) % monaExperienceImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [monaExperienceImages.length]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRhythmOfMonaIndex((prevIndex) => (prevIndex + 1) % rhythmOfMonaImages.length);
    }, 3500); // Change image every 3.5 seconds (slightly different timing)

    return () => clearInterval(interval);
  }, [rhythmOfMonaImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E5A48]/30 to-[#4E5A48]/50">
          {heroImages.map((image, index) => (
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
                style={{ backgroundImage: `url('${image}')` }}
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
              <span className="text-sm md:text-xl">CELEBRATE · CONNECT · EXPERIENCE</span>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"
        >
          {heroImages.map((_, index) => (
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
                MONA EXPERIENCE<br />LISBON
              </motion.h2>
              <div className="space-y-4 md:space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="text-black text-base md:text-lg leading-relaxed font-colfax-regular"
                >
                  Your Garden Rooftop Escape in Lisboa's Heart
                </motion.p>
                <div className="text-black text-base md:text-lg leading-relaxed font-colfax-regular space-y-3 md:space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    Mona Verde isn't just another restaurant, it's our philosophy of living well. Here, we've created a space where warmth meets joy, where every detail reflects our passion for life and hospitality.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    Working with the talented team at Archer Humphryes, we've designed Mona Verde around what matters most: being present, sharing great food, and staying open to the world around us. You'll find cultures mixing, flavors dancing, and emotions flowing freely: it's where energy meets elegance.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="text-[#4E5A48] text-lg font-colfax-medium tracking-widest uppercase"
                >
                  Celebrate · Connect · Experience
                </motion.div>
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
                  {monaExperienceImages.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
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
      {/* Entertainment Section */}
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
                RHYTHM OF MONA
              </motion.h2>
              <div className="text-white/90 text-lg leading-relaxed space-y-6 font-colfax-regular">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  Music flows through Mona Verde like a heartbeat: you might not always notice it, but it's always there, adding warmth to every conversation and emotion to every bite. We love mixing soulful R&B with global rhythms, but it's the Latin sounds that really capture who we are.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Our DJs and live performers know how to read the room: the music shifts as the evening unfolds, from those golden sunset hours to the late-night conversations. It's uplifting without trying too hard, refined but never stuffy.
                </motion.p>
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
                  {rhythmOfMonaImages.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
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