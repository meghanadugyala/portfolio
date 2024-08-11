import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TypingAnimation from './ui/TypingAnimation';
import BoxReveal from './ui/boxReveal';
import BlurFade, { WordPullUp, WordRotate } from './ui/BlurFade';
import profile from '../../public/mena.png'

const HeroSection: React.FC = () => {

  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-3 mt-10">
      <div className="intro text-left p-4 flex flex-col justify-center">
        <TypingAnimation texts={['Hi, I am', 'Meghana Dugyala']} />
        <div className="mt-8 flex space-x-4">
          <a
            href="https://www.linkedin.com/in/meghana-dugyala-9724ba20b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:dugyalameghana17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 text-2xl"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="photo flex justify-center items-center bg-transparent">
        <BlurFade key={'/mena.png'} delay={1} inView>
          <img
            src={profile}
            alt="Meghana Dugyala"
            className="object-cover bg-transparent"
          />
        </BlurFade>
      </div>
      <div className="summary text-center p-4 flex items-center justify-center">
        <div className={`w-full max-w-2xl text-left mb-4 `}>
          <WordPullUp
            className="text-2xl flex font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
            words="Software Engineer"
          />
          <WordRotate
            className="text-3xl font-bold "
            words={["Backend Engineer", "Frontend Engineer", "Data Engineer"]}
          />
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <p className="text-xl font-bold mt-2 flex items-center box-reveal-text">
              <FontAwesomeIcon icon={faMapPin} className="text-red-500 mr-2" />
              Seattle, Washington
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <p className="mt-4 box-reveal-text">
              Results-driven Data Engineer with a Master's in Information Studies and extensive experience in developing data pipelines in the Azure cloud. Proficient in Python, Databricks, PySpark, SQL Server, and cloud platforms. Demonstrated expertise in building data pipelines in Azure and Databricks using CI/CD, and in data analytics with Spark. Committed to continuous learning and effective problem-solving, ready to contribute to dynamic software development and data engineering teams.
            </p>
          </BoxReveal>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
