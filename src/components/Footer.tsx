import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Jessica Eri Fernandez. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
          Made with React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;