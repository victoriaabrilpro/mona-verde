import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

          {/* Widget Container - Responsive with narrow width and taller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-8 z-50 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-w-[700px] mx-auto"
          >
            {/* Header - Minimal */}
            <div className="bg-white border-b border-gray-100 px-3 py-2 md:px-4 md:py-2.5 flex items-center justify-between flex-shrink-0">
              <h2 className="text-sm md:text-base font-canela text-[#4E5A48]">Reservation</h2>
              <button
                onClick={onClose}
                className="w-6 h-6 md:w-7 md:h-7 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label="Close reservation"
              >
                <X size={14} className="text-[#4E5A48]" />
              </button>
            </div>

            {/* Content - iframe fills completely with minimal bottom space */}
            <div className="flex-1 min-h-0">
              <iframe
                src="https://www.sevenrooms.com/reservations/monaverde"
                className="w-full h-full border-none block m-0 p-0"
                style={{ display: 'block' }}
                title="Reservation Mona Verde"
                allow="geolocation"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationWidget;