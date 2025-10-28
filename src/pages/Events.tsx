import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Users, Sparkles } from 'lucide-react';

const Events: React.FC = () => {
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
              MONA VERDE'S EVENTS
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="pt-2 pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Latin Night */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Latin Night"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    15 FÉVRIER • 20H00
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">LATIN NIGHT</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Wine Tasting */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Wine Tasting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    28 FÉVRIER • 19H00
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">WINE TASTING</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Chef's Table */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Chef's Table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    8 MARS • 19H30
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">CHEF'S TABLE</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Rooftop Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Rooftop Sessions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    12 MARS • 21H00
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">ROOFTOP SESSIONS</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Sunset Aperitivo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Sunset Aperitivo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    25 MARS • 18H30
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">SUNSET APERITIVO</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Live Jazz Night */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Live Jazz Night"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-sm font-colfax-medium uppercase tracking-wider mb-2">
                    5 AVRIL • 20H30
                  </div>
                  <h3 className="text-xl font-canela tracking-wide">
                    <span className="font-normal uppercase">LIVE JAZZ NIGHT</span>
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Events;