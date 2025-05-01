import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { resumeURL } from '../data/portfolioData';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 
          ref={headingRef}
          className="section-heading"
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ rotate: [0, -2, 2, 0] }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-8">
            I'm currently looking for new opportunities to apply my skills and grow as a software engineer. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <motion.a 
              href="mailto:jessica.eri@example.com" 
              className="btn btn-primary w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </motion.a>
            
            <motion.a 
              href={resumeURL} 
              className="btn btn-outline w-full md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Download Résumé
            </motion.a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="https://github.com/jessicaeri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/jessicaeri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;