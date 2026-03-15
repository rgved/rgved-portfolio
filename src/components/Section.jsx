import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, delay = 0 }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
