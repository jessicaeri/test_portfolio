import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { funFacts } from '../data/portfolioData';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          About Me
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-center mb-12"
          >
            Buenas yan Hafa Adai! My name is Jessica Eri Fernanadez and I have a strong background in STEM. 
            I have 5+ years as a marine biologist and 2+ years of STEM grant management. 
            Now, I am gaining experience as a software engineer!
          </motion.p>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Fun Facts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 dark:text-gray-300">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;