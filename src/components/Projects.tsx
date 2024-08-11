// src/components/Projects.tsx
import React from 'react';
import BoxReveal from './ui/boxReveal';
import { BlurIn } from './ui/BlurFade';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <BlurIn word="Projects" />
        <div className="max-w-4xl mx-auto">
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Online E-Commerce Platform</h3>
              <p className=" ">
                • Designed and implemented an e-commerce platform using Flask. Utilized HTML, CSS, Bootstrap, JavaScript, and built RESTful APIs.<br />
                • Managed development with Git, showcasing strong teamwork skills.
              </p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Data Pipeline and Analytics Platform</h3>
              <p className=" ">
                • Developed a data pipeline using Apache Spark for large datasets.<br />
                • Built ETL processes with Databricks Spark, reducing data processing time by 50%.
              </p>
            </div>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
