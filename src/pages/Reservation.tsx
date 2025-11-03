import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import ReservationWidget from '../components/ReservationWidget';
import { useReservationPage, useContactInfo } from '../hooks/useSanity';
import { urlFor } from '../lib/sanity';

const Reservation: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = React.useState(false);
  const { data: reservationData, loading: reservationLoading } = useReservationPage();
  const { data: contactData, loading: contactLoading } = useContactInfo();

  // Show loading state
  if (reservationLoading || contactLoading) {
    return (
      <div className="min-h-screen bg-[#4E5A48] flex items-center justify-center">
        <div className="text-white text-lg"></div>
      </div>
    );
  }

  const bookingSection = reservationData?.bookingSection;
  const eventsSection = reservationData?.eventsSection;
  const eventTypes = reservationData?.eventTypes || [];

  // Default event types
  const defaultEventTypes = [
    {
      title: 'Corporate',
      description: 'Professional gatherings, business dinners, and networking events with panoramic city views.'
    },
    {
      title: 'Celebrations',
      description: 'Birthday parties, anniversaries, and milestone celebrations in our exclusive rooftop setting.'
    },
    {
      title: 'Special Events',
      description: 'Themed dinners, wine tastings, and exclusive culinary experiences with our chef.'
    }
  ];

  const displayEventTypes = eventTypes.length > 0 ? eventTypes : defaultEventTypes;

  return (
    <div className="min-h-screen bg-[#4E5A48] overflow-x-hidden">

      <section className="pt-32 sm:pt-20 pb-0 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
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
          className="text-2xl md:text-3xl font-canela text-[#4E5A48] mb-8"
        >
          {bookingSection?.title ? bookingSection.title.split(' ').slice(0, 2).join(' ') : 'BOOK YOUR'}<br />
          {bookingSection?.title ? bookingSection.title.split(' ').slice(2).join(' ') : 'EXPERIENCE'}
        </motion.h2>
        <div className="text-[#4E5A48]/80 text-lg leading-relaxed space-y-6">
          {bookingSection?.paragraphs && bookingSection.paragraphs.length > 0 ? (
            bookingSection.paragraphs.map((paragraph, index) => (
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
                Book a table with us and get ready for something special. Our rooftop is perfect for date nights, business dinners, or any time you want to celebrate life a little.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                We suggest booking ahead to get your favorite time and spot. Just let us know about any dietary needs or special requests, we're happy to help.
              </motion.p>
            </>
          )}
        </div>

        <div className="space-y-4 mb-4">
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            onClick={() => setIsReservationOpen(true)}
            className="inline-flex items-center space-x-2 border border-[#4E5A48] text-[#4E5A48] px-6 py-3 rounded-none uppercase tracking-wider text-sm font-colfax-regular hover:bg-[#4E5A48] hover:text-white transition-all duration-300 group w-full sm:w-auto justify-center"
          >
            <Calendar size={14} />
            <span>Reserve Table</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-[#4E5A48]/80"
          >
            <Mail size={16} className="text-[#4E5A48] hidden sm:block" />
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
              <span className="text-sm sm:text-base">Questions? Contact us at</span>
              <a 
                href={`mailto:${contactData?.bookingEmail || 'booking@monaexperience.com'}`}
                className="text-[#4E5A48] hover:text-[#4E5A48]/80 transition-colors duration-300 text-sm sm:text-base break-all sm:ml-1"
              >
                {contactData?.bookingEmail || 'booking@monaexperience.com'}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative mt-8 lg:mt-0"
      >
        <div className="aspect-[4/5] bg-[#4E5A48]/20 overflow-hidden">
          <img
            src={bookingSection?.image ? urlFor(bookingSection.image).width(600).url() : "https://lh3.googleusercontent.com/pw/AP1GczNb4PLuygeKoIERnj5pS64_MzFejUXFxWssuBrHeFfUC2AgwJON1Ib9Dv__KHlAoAd0QQmEB5gLKJvYWL9x3z2R75ok5JiNN7K3-yDPLz71SAhe-prLttGwoiGp47s4vGCvnk-1dgIVokNMeLxOGIkV=w1590-h2008-s-no-gm?authuser=1"}
            alt="Rooftop Dining"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Events Section */}
      <section className="pt-8 pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] bg-[#4E5A48]/20 overflow-hidden">
                <img
                  src={eventsSection?.image ? urlFor(eventsSection.image).width(600).url() : "https://lh3.googleusercontent.com/pw/AP1GczNim40CHz01du_o8nqahaVs_9XtuSZTtdzBYFoLSs9WyEwFD_lfcBKovTTsXL9y6FALqWLiPyP7TQHCQYuVelLrj3X0ImuCCxnMCFIpnBFYWc9A5fSTVTe4nuSV6-c_VQddDEBhwAZqaI5CpADn9q34=w1338-h2008-s-no-gm?authuser=1"}
                  alt="Private Events"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-8 order-1 lg:order-2"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-canela text-[#4E5A48] mb-8"
              >
                {eventsSection?.title || 'EVENT AND PRIVATIZATION'}
              </motion.h2>
              <div className="text-[#4E5A48]/80 text-lg leading-relaxed space-y-6">
                {eventsSection?.paragraphs && eventsSection.paragraphs.length > 0 ? (
                  eventsSection.paragraphs.map((paragraph, index) => (
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
                      Planning something special? Our rooftop makes any occasion feel extraordinary: whether it's a corporate event, private party, or celebrating a big milestone.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                      From small, intimate gatherings to big celebrations, our events team works with you to create exactly what you're dreaming of, with custom menus and service that's all about you.
                    </motion.p>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-[#4E5A48]/80"
                >
                  <Mail size={16} className="text-[#4E5A48] hidden sm:block" />
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
                    <span className="text-sm sm:text-base">Events inquiries:</span>
                    <a 
                      href={`mailto:${contactData?.eventsEmail || 'events@monaexperience.com'}`}
                      className="text-[#4E5A48] hover:text-[#4E5A48]/80 transition-colors duration-300 text-sm sm:text-base break-all sm:ml-1"
                    >
                      {contactData?.eventsEmail || 'events@monaexperience.com'}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plan Your Event Section */}
      <section className="py-16 md:py-24 bg-[#4E5A48] relative overflow-hidden flex items-center min-h-[400px]" style={{ marginTop: '0.05cm' }}>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10 w-full">
            {displayEventTypes.map((eventType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center space-y-6 px-4"
              >
                <div className="space-y-4 flex flex-col items-center justify-center h-full">
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="text-2xl font-bold text-white tracking-wide"
                  >
                    {eventType.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                    className="text-white/90 leading-relaxed font-colfax-regular max-w-xs"
                  >
                    {eventType.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
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

export default Reservation;