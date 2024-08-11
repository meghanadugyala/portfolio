import React from 'react';
import dynamic from 'next/dynamic';
import BoxReveal from './ui/boxReveal';
import { BlurIn } from './ui/BlurFade';

const DynamicIconCloud = dynamic(() => import('./IconCloud'), { ssr: false });

const slugs = [
  "python",
  "pyspark",
  "sql",
  "aws",
  "azure",
  "terraform",
  "docker",
  "ansible",
  "puppet",
  "grafana",
  "yaml",
  "json",
  "jenkins",
  "gitlab",
  "maven",
  "mysql",
  "mongodb",
  "postgresql",
  "snowflake",
  "tcpip",
  "dns",
  "dhcp",
  "ssh",
  "http",
  "https",
  "imap4",
  "linux",
  "windows",
  "macos",
  "rhel",
  "centos",
  "ubuntu",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <BlurIn word="Skills" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <p className=" ">Python, PySpark, SQL</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Cloud Platforms</h3>
              <p className=" ">AWS (S3, EC2, API Gateway, Cloud Watch), Azure</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">IaC, DevOps Tools</h3>
              <p className=" ">Terraform, Docker, Ansible, Puppet, Grafana, YAML, JSON</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Build and CI/CD Tools</h3>
              <p className=" ">Jenkins, GitLab CI, Maven</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Databases</h3>
              <p className=" ">MySQL, MongoDB, PostgreSQL, SNOWFLAKE</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Networking</h3>
              <p className=" ">TCP/IP, DNS, DHCP, SSH, HTTP, HTTPS, IMAP4</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Operating Systems</h3>
              <p className=" ">Linux, Windows, Mac OS, RHEL, CentOS, Ubuntu</p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#90144c"} duration={1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Professional Competencies</h3>
              <p className=" ">Agile Development, Scrum Methodologies, Teamwork, Leadership</p>
            </div>
          </BoxReveal>
          </div>
          <div className="flex" style={{ transform: 'scale(0.7)' }}> {/* Add the scaling here */}
            <DynamicIconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
