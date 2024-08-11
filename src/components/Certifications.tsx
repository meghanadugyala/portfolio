import React from 'react';
import BoxReveal from './ui/boxReveal';
import { BlurIn } from './ui/BlurFade';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20">
      <div className="container mx-auto">
        <BlurIn word="Certifications" />
        <div className="max-w-4xl mt-4 mx-auto">
          <div className="mt-2  ">
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <div>
                <h3 className="text-xl font-semibold">Certification in Data Science</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/learning/certificates/31c4540d0cb6eb0570a4e8fc9115794ecd3e2fa4b0dcff60808c05a07a49c331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    LinkedIn Learning Certificate
                  </a>
                </p>
              </div>
            </BoxReveal>
            <br />
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <div>
                <h3 className="text-xl font-semibold">Certification in Python Programming</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/learning/certificates/31c4540d0cb6eb0570a4e8fc9115794ecd3e2fa4b0dcff60808c05a07a49c331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    LinkedIn Learning Certificate
                  </a>
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
