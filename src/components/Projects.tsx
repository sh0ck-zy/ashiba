import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Research Navigator',
    description: 'A platform for researchers to explore, analyze, and organize academic papers using AI.',
    icon: Search,
  },
  {
    id: 2,
    title: 'BetHub',
    description: 'An AI-powered platform that analyzes betting markets, providing smarter predictions and insights for users.',
    icon: TrendingUp,
  },
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl shadow-lg cursor-pointer"
            >
              <project.icon className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};