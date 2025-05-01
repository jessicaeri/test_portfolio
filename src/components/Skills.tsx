import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          Skills
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="skill-pill"
              whileHover={{ 
                y: -3,
                backgroundColor: 'rgb(2, 132, 199)',
                color: 'white'
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;