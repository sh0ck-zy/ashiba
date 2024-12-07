import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full aspect-square relative"
            >
              <div className="absolute inset-0 border-2 border-zen-gold rounded-full" />
              <div className="absolute inset-4 border-2 border-zen-black rounded-full" />
              <div className="absolute inset-8 border-2 border-zen-gold rounded-full" />
              <div className="absolute inset-12 border-2 border-zen-black rounded-full" />
            </motion.div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Philosophy</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Ashiba Labs is built on the belief that technology, especially AI, can transform industries
                and improve the world. Like scaffolding, our approach provides the structure for ideas to
                grow, connecting creativity, technology, and impact.
              </p>
              <p>
                The word 'Ashiba' means scaffold in Japanese, symbolizing our mission to support and
                elevate innovation. With expertise in AI and a drive for multi-disciplinary solutions,
                Ashiba Labs is a philosophy, a platform, and a vision for the future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};