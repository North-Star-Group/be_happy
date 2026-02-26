'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const VisitUs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background elegant element */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-stone-50 rounded-bl-[150px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase">Come Say Hi</span>
                    </div>

                    <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6 leading-tight">
                        Visit Our <br />
                        <span className="italic text-stone-400 font-light">Boutique</span>
                    </h2>

                    <p className="text-stone-600 mb-10 text-lg leading-relaxed font-light">
                        Experience our curated collections in person. Our style experts are here to help you find the perfect outfit that makes you feel beautiful and comfortable every day.
                    </p>

                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-5 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="font-sans font-semibold text-stone-900 text-lg mb-1 tracking-wide">Location</h3>
                                <p className="text-stone-500 font-light">Via Emmaus 10<br />Losone, Switzerland</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-5 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                <Clock size={22} />
                            </div>
                            <div>
                                <h3 className="font-sans font-semibold text-stone-900 text-lg mb-1 tracking-wide">Opening Hours</h3>
                                <p className="text-stone-500 font-light">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.a
                        href="https://maps.google.com/?q=Via+Emmaus+10,+Losone,+Switzerland"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-10 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-red-600 transition-colors shadow-lg shadow-stone-200"
                    >
                        Get Directions
                    </motion.a>
                </motion.div>

                {/* Image Grid */}
                <div className="relative h-[700px] w-full hidden lg:block">

                    {/* Main Large Image */}
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute top-20 right-0 w-[70%] h-[450px] rounded-3xl overflow-hidden shadow-2xl z-20"
                    >
                        <div className="absolute inset-0 bg-stone-900/10 z-10 transition-opacity hover:opacity-0 duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop"
                            alt="Store Interior"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Secondary Floating Image */}
                    <motion.div
                        style={{ y: y2 }}
                        className="absolute bottom-10 left-0 w-[55%] h-[350px] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-[10px] border-white"
                    >
                        <div className="absolute inset-0 bg-stone-900/10 z-10 transition-opacity hover:opacity-0 duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
                            alt="Clothing Detail"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Third Decorative Image */}
                    <motion.div
                        style={{ y: y3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="absolute top-10 left-10 w-40 h-40 rounded-full overflow-hidden shadow-xl z-10 border-8 border-stone-50"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
                            alt="Store Details"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Background Decorative Blobs */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[80px] -z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
