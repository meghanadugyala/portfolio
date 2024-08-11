import React from 'react';
import { DockDemo } from './ui/DockPane';
import { motion } from 'framer-motion';

interface HeaderProps {
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  return (
    <div>
      <div className="col-span-1 md:col-span-3 mt-4 flex justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 1 }}
          >
            <DockDemo setActiveSection={setActiveSection} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
