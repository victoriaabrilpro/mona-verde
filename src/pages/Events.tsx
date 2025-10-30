import React from 'react';
import { motion } from 'framer-motion';
import { useEventsPage } from '../hooks/useSanity';
import { urlFor } from '../lib/sanity';

const Events: React.FC = () => {
  const { data: eventsData, loading } = useEventsPage();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#4E5A48] flex items-center justify-center">
        <div className="text-white text-lg"></div>
      </div>
    );
  }

  const events = eventsData?.events || [];
  const pageTitle = eventsData?.pageTitle || "MONA VERDE'S EVENTS";

  // Default events as fallback
  const defaultEvents = [
    {
      title: "LATIN NIGHT",
      date: "15 FÉVRIER • 20H00",
      image: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    },
    {
      title: "WINE TASTING",
      date: "28 FÉVRIER • 19H00",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    },
    {
      title: "CHEF'S TABLE",
      date: "8 MARS • 19H30",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    },
    {
      title: "ROOFTOP SESSIONS",
      date: "12 MARS • 21H00",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    },
    {
      title: "SUNSET APERITIVO",
      date: "25 MARS • 18H30",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    },
    {
      title: "LIVE JAZZ NIGHT",
      date: "5 AVRIL • 20H30",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
    }
  ];

  // Use Sanity events if available, otherwise use default events
  const displayEvents = events.length > 0 ? events : defaultEvents;

  return (
    <div className="min-h-screen bg-[#4E5A48]">
      {/* Hero Section */}
      <section className="pt-20 pb-4 md:pt-24 md:pb-6 bg-white">
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className=""
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#4E5A48] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-canela text-[#4E5A48] mb-8"
            >
              {pageTitle}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="pt-2 pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map((event, index) => {
              // Get image URL - either from Sanity or use default
              const imageUrl = event.image && typeof event.image === 'object' && 'asset' in event.image
                ? urlFor(event.image).width(600).height(450).fit('crop').url()
                : typeof event.image === 'string'
                ? event.image
                : defaultEvents[index]?.image || '';

              return (
                <motion.div
                  key={event._key || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 + (index * 0.05), ease: "easeOut" }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                    <img
                      src={imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                      {event.date && (
                        <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                          {event.date}
                        </div>
                      )}
                      <h3 className="text-xl font-canela tracking-wide">
                        <span className="font-normal uppercase">{event.title}</span>
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;