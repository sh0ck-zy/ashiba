import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cog, Rocket } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'We provide tailored consulting services to help businesses integrate AI into their workflows.',
  },
  {
    icon: Code,
    title: 'AI Development',
    description: 'From prototyping to production, we build AI-driven tools and platforms to solve complex problems.',
  },
  {
    icon: Cog,
    title: 'Automation Solutions',
    description: 'Our team creates automated processes that save time, reduce costs, and enhance efficiency.',
  },
  {
    icon: Rocket,
    title: 'Future Ventures',
    description: 'Ashiba Labs is constantly exploring new fields and opportunities for growth.',
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <service.icon className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};