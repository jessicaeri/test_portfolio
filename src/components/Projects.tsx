import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { capstone, miniCapstone, otherProjects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Feature Projects */}
        <div className="mb-16">
          <ProjectCard 
            title={capstone.title}
            description={capstone.description}
            techStack={capstone.techStack}
            image={capstone.image}
            imageAlt={capstone.imageAlt}
            liveUrl={capstone.liveUrl}
            repoUrl={capstone.repoUrl}
            isLarge={true}
          />
          
          <ProjectCard 
            title={miniCapstone.title}
            description={miniCapstone.description}
            techStack={miniCapstone.techStack}
            image={miniCapstone.image}
            imageAlt={miniCapstone.imageAlt}
            liveUrl={miniCapstone.liveUrl}
            repoUrl={miniCapstone.repoUrl}
            reversed={true}
            isLarge={true}
          />
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-center mb-10">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;