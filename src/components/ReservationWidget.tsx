import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Clock } from 'lucide-react';

interface ReservationWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationWidget: React.FC<ReservationWidgetProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Widget Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-12 2xl:inset-16 z-50 bg-white rounded-none sm:rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-3rem)]"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-between flex-shrink-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-canela text-[#4E5A48]">Reservation</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              >
                <X size={16} className="sm:size-4 md:size-5 text-[#4E5A48]" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden min-h-0">
              <iframe
                src="https://www.sevenrooms.com/reservations/monaverde"
                className="w-full h-full border-none min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
                title="Reservation Mona Verde"
                allow="geolocation"
              />
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 p-2 sm:p-3 md:p-4 text-center flex-shrink-0">
              <p className="text-xs sm:text-sm text-[#4E5A48]/60 font-colfax-regular">
                18h00 - 02h00 • 7j/7 • 2-20 personnes
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationWidget;