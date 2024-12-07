import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zen">
      <div className="absolute inset-0 bg-grid-pattern" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4 max-w-4xl"
      >
        <div className="mb-8">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-32 h-32 mx-auto mb-6"
          >
            <div className="w-full h-full rounded-full border-2 border-zen-gold flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-zen-black"></div>
            </div>
          </motion.div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          Ashiba Labs
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Scaffolding Innovation for a Better World
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-zen-black text-white rounded-lg hover:bg-opacity-90 transition-colors border border-zen-gold"
        >
          Explore Our Vision
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-8 h-8 text-zen-gold" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-32 h-32 border-l-2 border-t-2 border-zen-gold opacity-50" />
        <div className="absolute right-0 bottom-0 w-32 h-32 border-r-2 border-b-2 border-zen-gold opacity-50" />
      </div>
    </section>
  );
};