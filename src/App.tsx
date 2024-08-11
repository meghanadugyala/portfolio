import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen app-background">
      <Header setActiveSection={setActiveSection} />
      <div className="flex-grow">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
