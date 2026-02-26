import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

// --- DATA: Collection Images ---
const mainCollectionImages = [
  "/Women/w_1.png",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  "/Women/w_3.png",
];

const secondaryImages = [
  "/Women/w_2.png",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=920&auto=format&fit=crop",
];

const floatingImages = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop",
];

// --- SUB-COMPONENTS ---

const AnimatedButton = ({ children, primary }: { children: React.ReactNode, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`group relative overflow-hidden px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 rounded-full font-medium tracking-wide text-sm ${primary
        ? 'bg-stone-900 text-stone-50 shadow-xl shadow-stone-900/20 hover:shadow-stone-900/30'
        : 'bg-white text-stone-900 border border-stone-200 hover:border-stone-400 hover:bg-stone-50'
      }`}
  >
    <span className="relative z-10">{children}</span>
    {primary && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
  </motion.button>
);

const ImageSlideshow = ({ images, intervalTime = 4000, className = "" }: { images: string[], intervalTime?: number, className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [images.length, intervalTime]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Fashion collection showcase"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeIn" } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---

const DesignerHeroCollection = () => {
  return (
    <section className="relative min-h-[100svh] bg-[#faf9f6] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[120px] mix-blend-multiply opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-[150px] mix-blend-multiply opacity-60 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden z-0">
        <h1 className="text-[25vw] font-serif font-black text-stone-900 whitespace-nowrap leading-none tracking-tighter mix-blend-overlay">
          BE HAPPY
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 lg:pr-10 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 mb-8">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-stone-800 font-semibold tracking-wider text-xs uppercase">
                  Lookbook 2026
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] text-stone-900 mb-6 tracking-tight">
                Fashion <br />
                <span className="italic font-light text-stone-500 pr-4">State of</span>
                Mind.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="max-w-lg mb-10"
            >
              <p className="text-stone-600 text-lg sm:text-xl leading-relaxed font-light">
                Discover the new <span className="font-medium text-stone-900">Be Happy</span> collection. A curated selection of finest fabrics and innovative designs, defining the look of the upcoming season.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <AnimatedButton primary>Shop Collection</AnimatedButton>
          
            </motion.div>

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 pt-8 border-t border-stone-200 flex items-center gap-8"
            >
              <div>
                <p className="text-3xl font-serif text-stone-900">10k+</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Happy Clients</p>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <p className="text-3xl font-serif text-stone-900">Premium</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Quality Materials</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUALS - Bento Style Layout */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center lg:justify-end min-h-[550px] sm:min-h-[650px]">

            {/* Center Main Large Image */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-[4%] sm:right-[15%] lg:right-[10%] w-[260px] sm:w-[340px] h-[360px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <ImageSlideshow
                images={mainCollectionImages}
                intervalTime={5000}
                className="w-full h-full bg-stone-200"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent">
                <p className="text-white font-medium tracking-wide">Spring Essentials</p>
                <p className="text-stone-300 text-sm mt-1">Explore the fits</p>
              </div>
            </motion.div>

            {/* Top Left Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute top-[8%] sm:top-[5%] left-[0%] sm:left-[10%] lg:-left-4 w-[140px] sm:w-[180px] h-[180px] sm:h-[220px] rounded-2xl overflow-hidden shadow-lg z-30 ring-4 ring-white"
            >
              <ImageSlideshow
                images={floatingImages}
                intervalTime={6000}
                className="w-full h-full bg-stone-300"
              />
            </motion.div>

            {/* Bottom Right Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-[2%] sm:bottom-[5%] right-[0%] lg:-right-4 w-[160px] sm:w-[220px] h-[200px] sm:h-[260px] rounded-2xl overflow-hidden shadow-xl z-30 ring-4 ring-white"
            >
              <ImageSlideshow
                images={secondaryImages}
                intervalTime={7000}
                className="w-full h-full bg-stone-200 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Floating Decorative Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-5%] right-[-5%] sm:top-[20%] sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-stone-300 border-dashed z-10 flex items-center justify-center opacity-50"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-stone-200 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerHeroCollection;