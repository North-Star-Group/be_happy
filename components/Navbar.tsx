import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-stone-200 py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
          
          {/* 1. Brand / Logo Area */}
          <div className="flex items-center justify-start">
            <a href="/" className="relative z-50 group">
              {/* Replace text with your Image component if preferred */}
               <span className={`font-serif text-2xl font-bold tracking-tighter transition-colors duration-300 ${mobileMenuOpen ? 'text-stone-900' : 'text-stone-900'}`}>
                BE HAPPY<span className="text-red-600">.</span>
              </span>
            </a>
          </div>

          {/* 2. Desktop Navigation (Centered) */}
          <div className="hidden md:flex items-center justify-center gap-12">
            {['Woman', 'Man', 'Story'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative group py-2"
              >
                <span className="text-stone-900 text-xs font-bold uppercase tracking-widest group-hover:text-red-600 transition-colors">
                  {item}
                </span>
                {/* Magnetic Underline Effect */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>

          {/* 3. Actions / Icons (Right) */}
          <div className="flex items-center justify-end gap-6">
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6 text-stone-900">
               <button className="hover:text-red-600 transition-colors">
                <Search size={18} />
              </button>
              <div className="h-4 w-[1px] bg-stone-300"></div> {/* Separator */}
              <a href="https://instagram.com" target="_blank" className="hover:text-red-600 transition-colors">
                <Instagram size={18} />
              </a>
              <button className="relative hover:text-red-600 transition-colors">
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-[8px] text-white">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className="md:hidden relative z-50 p-2 -mr-2 text-stone-900 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- Full Screen Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-stone-50 md:hidden flex flex-col pt-32 px-6"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6">
              {['Woman', 'Man', 'Story', 'New Arrivals'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-5xl text-stone-900 hover:text-red-600 transition-colors flex items-center gap-4 group"
                >
                  {item}
                  <span className="h-[1px] w-0 bg-red-600 group-hover:w-12 transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-12"
            >
              <div className="w-full h-[1px] bg-stone-200 mb-8"></div>
              
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2 text-stone-500 text-sm">
                  <span>Losone, Switzerland</span>
                  <a href="mailto:hello@behappy.com" className="hover:text-red-600">hello@behappy.com</a>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 hover:bg-stone-900 hover:text-white transition-all">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;