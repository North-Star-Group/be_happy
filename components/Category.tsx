import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';


interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

// Reusing your Section wrapper for consistency
const Section = ({ children, className = "" }: SectionProps) => (
  <section className={`px-4 md:px-8 lg:px-12 py-20 ${className}`}>
    {children}
  </section>
);


interface CategoryCardProps {
  title: string;
  image: string;
  links: string[];
  badge?: string;
}


const CategoryCard = ({ title, image, links, badge }: CategoryCardProps) => {
  return (
    <motion.div
      className="group relative flex-1 h-[600px] overflow-hidden cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* 1. Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
      </motion.div>

      {/* 2. Floating Badge (e.g. "New Season") */}
      {badge && (
        <div className="absolute top-6 right-6 z-20 bg-red-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Star size={14} fill="white" className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">
            {badge}
          </span>
        </div>
      )}

      {/* 3. Main Content Wrapper */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">

        {/* The Title - Moves up on hover */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: -20 } // Slightly moves up to make room
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">
            Collection 2026
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-2">
            {title}
          </h2>
        </motion.div>

        {/* 4. The Hidden "Quick Links" Menu */}
        <motion.div
          className="overflow-hidden"
          variants={{
            rest: { height: 0, opacity: 0 },
            hover: { height: "auto", opacity: 1 }
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="pt-4 border-t border-white/30 flex flex-col gap-3">
            {links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-between text-stone-200 hover:text-white group/link"
              >
                <span className="text-lg font-medium">{link}</span>
                <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-red-500" />
              </a>
            ))}

            {/* Main CTA */}
            <div className="mt-4 pt-4">
              <button className="bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors w-max">
                Shop All {title} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <Section className="bg-white">
      {/* Header for the section */}
      <div className="mb-12 flex justify-between items-end px-4">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900">
            Shop by Category
          </h3>
          <p className="text-stone-500 mt-2 max-w-md">
            Explore our latest arrivals tailored for every occasion.
          </p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-red-600 hover:border-red-600 transition-colors">
          View All <ArrowRight size={14} />
        </a>
      </div>

      {/* The Cards Layout */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[700px]">

        {/* Women - Larger / More details */}
        <div className="flex-[1.4]">
          <CategoryCard
            title="WOMAN"
            image="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop"
            badge="New Season"
            links={["New Arrivals", "Dresses & Jumpsuits", "Blouses", "Accessories"]}
          />
        </div>

        {/* Men - Standard */}
        <div className="flex-1">
          <CategoryCard
            title="MAN"
            image="https://images.unsplash.com/photo-1516257984-b1b4d8c9230c?q=80&w=1000&auto=format&fit=crop"
            links={["New Arrivals", "Suits & Blazers", "Casual Wear"]}
          />
        </div>

      </div>
    </Section>
  );
};

export default Categories;