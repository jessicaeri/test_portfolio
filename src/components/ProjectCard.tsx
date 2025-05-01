import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string;
  reversed?: boolean;
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  image,
  imageAlt,
  liveUrl,
  repoUrl,
  reversed = false,
  isLarge = false
}) => {
  return isLarge ? (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md h-64 md:h-96"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Globe size={18} className="mr-2" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-3 py-1.5"
            >
              <Globe size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline text-sm px-3 py-1.5"
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;