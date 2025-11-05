import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useCuisinePage } from '../hooks/useSanity';
import { urlFor } from '../lib/sanity';

const CuisineCarousel: React.FC<{ images?: any[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const defaultImages = [
    'https://lh3.googleusercontent.com/pw/AP1GczMA92bWvPOy6sejaKvpvvZ6ZRX2kiqlPHM4MMTZBDXc8GxjLZejH9DZu6YkM_9K9xa3UNrsAvC-kLlZHL9RwyG-ycynjn4oPNewiQ_QHlSf21fPPZ-zbJk-dSlNqsR8p7FlqePUTHWnkw1TaIN0YLJr=w1338-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczMJEg3lej_eXMMvOsqdwSd_-aNHPbk17ap5TXvBktl4-WjpYn8MKcj6JoID1YEUUIk82On8zoa3CouPliFnZ94pbNMHJBJ1Z7ikGdyqXsv2X0veiNvC8UHeF1JsfNM580eCK383gBXaBdw8632fd8n2=w1340-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczMbVDx6LpgjTL1nwFetWtIuD7KfBpLqGpWMNAfe6TtIJ9BkPg4fNG93lBpXBHB_hM_uCbb_v0kum0Tfg122eURTPVtSHI4Ydv_7QgWQd8UrVQR6NMMR3obocu1b3sC2XAa0YJgROACHhihJwOJXiU9e=w1436-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczPUdymg0RNCz4ItkNZK-YjprW1Quru6bkHw1MiQvltFLPhXXIv2FTRKvOrQWVHXTX8-C5YZ7IyVchRBtj0MsWNm34byPhiqnHCVDzV3ZPe0wrD41EtN-yYn0gujJUfNl4WO1BhmCKXhZ0MfVclqN6fU=w1338-h2008-s-no-gm?authuser=1',
    'https://lh3.googleusercontent.com/pw/AP1GczNHrzPOj8H3xzlUWnkpzQEBBZwa2qH29lPZozxiEei7CFptpo64DpqiPLl7XJ7FgjDSxJcHIHQpZ_wm9Vb6zSoiSea7s8f9mnOSLT6KqGIwJsgIiunP1Gv3i8PZOTgopVT2OJ6vciIqGULrKIRjYcgd=w1340-h2008-s-no-gm?authuser=1'
  ];

  const displayImages = images && images.length > 0 
    ? images.map(img => urlFor(img).width(600).url())
    : defaultImages;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <div className="aspect-[4/5] bg-[#4E5A48]/20 overflow-hidden relative">
      {displayImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Cuisine ${index + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.05
          }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#F79548] scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Cuisine: React.FC = () => {
  const { data: cuisineData, loading } = useCuisinePage();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#4E5A48] flex items-center justify-center">
        <div className="text-white text-lg"></div>
      </div>
    );
  }

  const videoUrl = cuisineData?.videoUrl || "https://player.vimeo.com/video/1105559695?autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0";
  const menuLink = cuisineData?.menuLink || "https://qr.finedinemenu.com/mona-verde/menu/67d054ad3dcba5e21e2bfae5";

  return (
    <div className="min-h-screen bg-[#4E5A48] overflow-hidden">
      {/* Video Hero Section */}
      <section className="relative h-screen overflow-hidden -mt-16 md:mt-0 md:pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={videoUrl}
            className="absolute inset-0 w-full h-full scale-150 sm:scale-125 lg:scale-100"
            style={{ 
              border: 'none',
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              transformOrigin: 'center center',
              top: '-10%'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Mona Verde Cuisine Video Background"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-[#4E5A48]/40 via-transparent to-[#4E5A48]/60" style={{ top: '-10%', height: '120%' }}></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex flex-col items-center justify-center h-full pt-20 md:pt-0">
              {/* Centered Content */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-center text-white max-w-4xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <a
                    href={menuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm uppercase tracking-[0.15em] font-colfax-medium hover:bg-white hover:text-[#4E5A48] transition-all duration-300 group mt-16"
                  >
                    <span>Explore Menu</span>
                    <ExternalLink size={10} className="md:size-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-colfax-regular">Scroll to discover</span>
            <div className="w-px h-12 bg-white/30"></div>
          </div>
        </motion.div>
      </section>

      {/* Cuisine Description */}
      <section className="py-16 bg-white -mt-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-canela text-[#4E5A48]"
              >
                {cuisineData?.title ? cuisineData.title.split(' ').slice(0, 2).join(' ') : "LATIN FUSION"}<br />
                {cuisineData?.title ? cuisineData.title.split(' ').slice(2).join(' ') : "CUISINE"}
              </motion.h2>
              <div className="text-[#4E5A48]/80 text-lg leading-relaxed space-y-6">
                {cuisineData?.description && cuisineData.description.length > 0 ? (
                  cuisineData.description.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    >
                      {paragraph}
                    </motion.p>
                  ))
                ) : (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                      Our menu tells Lisbon's story, a city where cultures mix and mingle. We take Mediterranean flavors and give them a Latin twist, because that's what feels right in this diverse city.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                      You'll find flame-kissed meats alongside fresh ceviches, thoughtful vegetable dishes, and desserts that make you smile. Everything's meant to be shared, the best meals happen when people come together.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    >
                      We work with seasonal ingredients, sourcing locally when possible. It's about finding the sweet spot between simple and intense, elegant but never intimidating. Whether for lunch or dinner, the food just fits.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                      Our cocktails follow the same philosophy: bold when needed, tropical when the mood strikes, always with personality.
                    </motion.p>
                  </>
                )}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                href={menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-[#4E5A48] text-[#4E5A48] px-6 py-3 rounded-none uppercase tracking-wider text-sm font-colfax-regular hover:bg-[#4E5A48] hover:text-white transition-all duration-300 group"
              >
                <span>View Menu</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <CuisineCarousel images={cuisineData?.carouselImages} />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cuisine;