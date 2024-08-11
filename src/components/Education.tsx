// src/components/Education.tsx
import React from 'react';
import BoxReveal from './ui/boxReveal';
import { BlurIn } from './ui/BlurFade';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <BlurIn word="Education" />
        <div className="max-w-4xl mx-auto">
        <BoxReveal boxColor={"#90144c"} duration={1}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Trine University, Angola, IN</h3>
            <p className=" ">Master of Science, Information Studies Aug 2022 – Dec 2023</p>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#90144c"} duration={1}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Vaagdevi College of Engineering</h3>
            <p className=" ">Bachelor of Engineering, Computer Science Jun 2017 – May 2021</p>
          </div>
        </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
