import React from "react";
import { FaHome, FaBriefcase, FaGraduationCap, FaCogs, FaAward } from 'react-icons/fa';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Dock, DockIcon } from "./Dock";
import { IconContext } from "react-icons/lib";
import { Separator } from "./seperator";

export type IconProps = React.HTMLAttributes<HTMLDivElement>;

interface DockDemoProps {
  setActiveSection: (section: string) => void;
}

export function DockDemo({ setActiveSection }: DockDemoProps) {
  return (
    <div className="relative shadow-2xl rounded-xl" style={{ backgroundColor: '#90144c' }}>
      <Dock direction="middle">
        <DockIcon>
          <Icons.home onClick={() => setActiveSection('hero')} />
        </DockIcon>
        <Separator orientation="vertical" className="h-full py-2 bg-white" />
        <DockIcon>
          <Icons.experience onClick={() => setActiveSection('experience')} />
        </DockIcon>
        <DockIcon>
          <Icons.project onClick={() => setActiveSection('projects')} />
        </DockIcon>
        <DockIcon>
          <Icons.education onClick={() => setActiveSection('education')} />
        </DockIcon>
        <DockIcon>
          <Icons.skills onClick={() => setActiveSection('skills')} />
        </DockIcon>
        <DockIcon>
          <Icons.certifications onClick={() => setActiveSection('certifications')} />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Home">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaHome size={24} title="Home" />
      </IconContext.Provider>
    </div>
  ),
  experience: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Experience">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaBriefcase size={24} title="Experience" />
      </IconContext.Provider>
    </div>
  ),
  project: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Projects">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaScrewdriverWrench size={24} title="Projects" />
      </IconContext.Provider>
    </div>
  ),
  education: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Education">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaGraduationCap size={24} title="Education" />
      </IconContext.Provider>
    </div>
  ),
  skills: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Skills">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaCogs size={24} title="Skills" />
      </IconContext.Provider>
    </div>
  ),
  certifications: ({ onClick }: IconProps) => (
    <div onClick={onClick} className="flex items-center hover:text-gray-400 cursor-pointer" aria-label="Certifications">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaAward size={24} title="Certifications" />
      </IconContext.Provider>
    </div>
  ),
};
