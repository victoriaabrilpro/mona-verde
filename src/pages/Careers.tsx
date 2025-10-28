import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Crown as Growth, Heart, Mail, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#4E5A48]">

      {/* Decorative Bar */}
      <section className="h-6 bg-[#4E5A48] relative overflow-hidden mt-16">
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

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
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
                JOIN THE MONA<br />EXPERIENCE
              </motion.h2>
              <div className="text-[#4E5A48]/80 text-lg leading-relaxed space-y-6 font-colfax-regular">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  Mona Verde is more than just a workplace, we're a tight-knit group of people who genuinely care about hospitality and creating moments that matter. If that sounds like your kind of place, we'd love to meet you.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Whether you've been in hospitality for years or you're just starting out, we'll give you the training and support you need to thrive in our world of elevated dining.
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-[#4E5A48]/80 text-lg leading-relaxed font-colfax-regular"
              >
                Send your resume to{' '}
                <a 
                  href="mailto:jobs@monaexperience.com" 
                  className="text-[#4E5A48] hover:text-[#4E5A48]/80 transition-colors duration-300"
                >
                  jobs@monaexperience.com
                </a>
              </motion.p>

              <div className="space-y-4">
                
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  href="https://pt.linkedin.com/company/monaexperience"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#4E5A48] uppercase tracking-wider font-colfax-regular hover:text-[#4E5A48]/80 transition-colors duration-300 group"
                >
                  <span>View Open Positions</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-[#4E5A48]/20 overflow-hidden max-w-md mx-auto">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczM2z7YyxKphZRWy2RzJSaWSUx3D-i8cCILWkv_ZM02tWxnzEYuJs-4Xblpkc1tm5B7nIfZnLOVMUIjBzG5R86-wC4LGd9Rain_gFSkwGyRbQeM_1Ws2SGOJYkLlQz4vrH8jyI0vCS5nlDm39nd7PxTM=w1080-h1397-s-no-gm?authuser=1"
                  alt="Team Working Together"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-8 bg-[#4E5A48] flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Values Grid with Enhanced Spacing */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-12">
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
                GROWTH
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                Career development opportunities within the Mona Group ecosystem.
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
                EXCELLENCE
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                Work in an environment with the highest standards of hospitality.
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
                BENEFITS
              </motion.h3>
              
              {/* Description with enhanced bottom spacing */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="text-white/90 leading-relaxed font-colfax-regular text-center pb-4"
              >
                Competitive compensation, health benefits, and exclusive employee perks.
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

export default Careers;