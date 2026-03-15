import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ title, description, tech, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0 hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 h-full"
    >
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl h-full w-full rounded-2xl p-6 flex flex-col items-start gap-4">
        <div className="flex-1 w-full">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          {description && (
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.split(',').map((t, i) => (
              <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                {t.trim()}
              </span>
            ))}
          </div>
        </div>
        {link && link !== '#' && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-2"
          >
            View Project <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
