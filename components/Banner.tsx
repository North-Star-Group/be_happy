import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Percent } from 'lucide-react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-50 bg-stone-900 text-stone-50 overflow-hidden"
        >
          <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between md:justify-center relative">

            {/* Left Decorative Element (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 absolute left-6 opacity-50">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest">Losone Store</span>
            </div>

            {/* Main Content */}
            <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-medium tracking-wide w-full md:w-auto justify-center">
              <span className="hidden md:inline text-stone-400">
                End of Season Sale
              </span>

              <div className="flex items-center gap-2">
                <span className="uppercase">Get up to</span>
                <span className="bg-red-600 text-white px-2 py-0.5 text-[10px] font-bold rounded-sm flex items-center gap-1">
                  60% OFF <Percent size={10} />
                </span>
              </div>

              <button
                onClick={() => window.open('https://www.facebook.com/p/Be-Happy-100068963659334/', '_blank')}
                className="group flex items-center gap-1 hover:text-red-400 transition-colors border-b border-stone-600 hover:border-red-400 pb-0.5"
              >
                <span>Shop the sale</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 md:right-6 p-1 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-white"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;