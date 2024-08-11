// src/components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto flex items-center justify-center">
        <span className="mr-2">Meghana Dugyala | Portfolio | </span>
        <a
          href="https://www.instagram.com/dugyala_meghana/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-2xl flex items-center"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
