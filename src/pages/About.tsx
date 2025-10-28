import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#4E5A48]">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                src="https://lh3.googleusercontent.com/pw/AP1GczOhnzdY8bqzBrr7vvWdQFDCcFSW5O1CVJn_uw2mUWf5oXYYJseP4IL5t9pfXw3ExwuCO1K9fIzT_VcZX2xuidxsMVGFwwcZsx6ZzdjBw14TQ0ItArRhi-RR5kGqjj-kkVyIfLct7-UCnVyUAXVDpXqF=w1563-h772-s-no-gm?authuser=1"
                alt="Mona Group Logo"
                className="h-32 w-auto mx-auto mb-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mona Group Section */}
      <section className="pt-0 pb-8 bg-white -mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-8 flex flex-col justify-center h-full -mt-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-canela text-[#4E5A48] mb-8 mt-8 md:-mt-6"
              >
                MONA'S STORY
              </motion.h1>
              <div className="text-[#4E5A48]/80 text-lg leading-relaxed space-y-6 font-colfax-regular -mt-10">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  The Mona Group brings together a collection of special places: each one different, but all sharing our love for good living, genuine connections, and celebrating what makes life beautiful. From restaurants to nightlife, we create spaces that feel like home while taking you somewhere new.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Mona Verde is our rooftop love letter to this philosophy, think of it as our urban jungle where different flavors, cultures, and energies mix to create something that feels both familiar and exciting.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  Coming soon, Mona Libre: our supper club where dinner becomes an intimate celebration. We can't wait to share it with you.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-[#4E5A48]/20 overflow-hidden max-w-sm mx-auto">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMUx3Y_opgbreeJmNAmTVNKj4QNuJb5UWyi4kDz-fX581Q7IhokkheE30PjxT6Eflc4QeLd7MZ9KMzX_US11-kzoJUgSf8A1LGggzvqKnkDhkAFZ0lKpLWgTGxq5Su2Ey3APJuedu49jeIt3S1fvyZG=w1338-h2008-s-no-gm?authuser=1"
                  alt="Mona Group"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#4E5A48] relative overflow-hidden">
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
          {/* Values Grid with Enhanced Spacing */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-center space-y-4 flex flex-col items-center justify-center min-h-[200px] px-4 flex-1 max-w-xs mx-auto"
            >
              {/* Dash with enhanced spacing */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="w-12 h-1 bg-white mb-4"
              ></motion.div>
              
              {/* Title with proper spacing */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-2xl font-pp-haton text-white"
              >
                CELEBRATE
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                Every moment deserves to be celebrated with exceptional food, drinks, and atmosphere.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-center space-y-4 flex flex-col items-center justify-center min-h-[200px] px-4 flex-1 max-w-xs mx-auto"
            >
              {/* Dash with enhanced spacing */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="w-12 h-1 bg-white mb-4"
              ></motion.div>
              
              {/* Title with proper spacing */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-2xl font-pp-haton text-white"
              >
                CONNECT
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                We bring people together through shared experiences and the universal language of hospitality.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center space-y-4 flex flex-col items-center justify-center min-h-[200px] px-4 flex-1 max-w-xs mx-auto"
            >
              {/* Dash with enhanced spacing */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="w-12 h-1 bg-white mb-4"
              ></motion.div>
              
              {/* Title with proper spacing */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-2xl font-pp-haton text-white"
              >
                EXPERIENCE
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                We craft unforgettable experiences that engage all senses and create lasting memories.
              </motion.p>
            </motion.div>
          </div>
          
          {/* Additional bottom spacing for the entire section */}
          <div className="pb-4"></div>
        </div>
      </section>
    </div>
  );
};

export default About;