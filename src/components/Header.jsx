import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="min-h-[80vh] flex flex-col justify-center items-center text-center relative z-10 px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8 relative group"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/50 overflow-hidden relative backdrop-blur-sm bg-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          {/* Fallback avatar if profile.jpg is missing */}
          <span className="text-4xl text-blue-400 font-bold tracking-wider">RK</span>
          <img 
            src="/profile.jpg" 
            alt="Rgved Kulkarni" 
            className="w-full h-full object-cover absolute inset-0 z-10"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight"
      >
        Rgved Kulkarni
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-400 mb-6 font-medium max-w-2xl px-4"
      >
        B.Tech IT Undergrad @ NMIMS Mumbai | Graduating 2027
      </motion.h2>
      

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 md:gap-6"
      >
        <a href="https://github.com/rgved" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-md border border-white/10">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rgved-kulkarni-b36a34259" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600/20 hover:bg-blue-600/40 rounded-full text-blue-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] backdrop-blur-md border border-blue-500/20">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:rgvedk@gmail.com" className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-full text-purple-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] backdrop-blur-md border border-purple-500/20">
          <FaEnvelope size={24} />
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
