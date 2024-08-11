import React from "react";
import { FaHome, FaBriefcase, FaGraduationCap, FaCogs, FaAward } from 'react-icons/fa';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Separator } from "./seperator";
import { Dock, DockIcon } from "./Dock";
import { IconContext } from "react-icons/lib";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative shadow-2xl rounded-xl"  style={{ backgroundColor: '#90144c' }}>
      <Dock direction="middle">
        <DockIcon>
          <Icons.home className="size-6" />
        </DockIcon>
        <Separator orientation="vertical" className="h-full py-2 bg-white" />
        <DockIcon>
          <Icons.experience className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.project className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.education className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.skills className="size-6" />
        </DockIcon>
        <DockIcon>
          <Icons.certifications className="size-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: (_props: IconProps) => (
    <Link to="/" className="flex items-center hover:text-gray-400" aria-label="Home">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaHome size={24} title="Home" />
      </IconContext.Provider>
    </Link>
  ),
  experience: (_props: IconProps) => (
    <Link to="/experience" className="flex items-center hover:text-gray-400" aria-label="Experience">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaBriefcase size={24} title="Experience" />
      </IconContext.Provider>
    </Link>
  ),
  project: (_props: IconProps) => (
    <Link to="/projects" className="flex items-center hover:text-gray-400" aria-label="Projects">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaScrewdriverWrench size={24} title="Projects" />
      </IconContext.Provider>
    </Link>
  ),
  education: (_props: IconProps) => (
    <Link to="/education" className="flex items-center hover:text-gray-400" aria-label="Education">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaGraduationCap size={24} title="Education" />
      </IconContext.Provider>
    </Link>
  ),
  skills: (_props: IconProps) => (
    <Link to="/skills" className="flex items-center hover:text-gray-400" aria-label="Skills">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaCogs size={24} title="Skills" />
      </IconContext.Provider>
    </Link>
  ),
  certifications: (_props: IconProps) => (
    <Link to="/certifications" className="flex items-center hover:text-gray-400" aria-label="Certifications">
      <IconContext.Provider value={{ color: 'white' }}>
        <FaAward size={24} title="Certifications" />
      </IconContext.Provider>
    </Link>
  ),
};

