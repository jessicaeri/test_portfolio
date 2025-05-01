import React from 'react';
import { motion } from 'framer-motion';
import { profileImage } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80"></div>
        <motion.div 
          className="absolute -inset-[10%] rounded-full bg-sky-200/30 dark:bg-sky-700/20 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -inset-[10%] translate-x-[40%] translate-y-[20%] rounded-full bg-indigo-200/30 dark:bg-indigo-700/20 blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 50, 0], 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-8/12 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I'm Jessica Eri Fernandez —
              <br />
              <span className="text-sky-600 dark:text-sky-400">Software Engineer.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I solve real-world problems with code.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-4/12 flex justify-center"
          whileHover={{ scale: 1 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={profileImage} 
              alt="Jessica Eri Fernandez" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;