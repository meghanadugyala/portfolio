// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  return (
    <Router>
      <div className="flex flex-col min-h-screen app-background">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
