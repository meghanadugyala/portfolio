// src/components/Experience.tsx
import React from 'react';
import BoxReveal from './ui/boxReveal';
import { BlurIn } from './ui/BlurFade';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <BlurIn word="Experience" />
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <div>
                <h3 className="text-xl font-semibold">Data Engineer Intern at Optum</h3>
                <p className="">Eden Prairie, MN | May 2023 – Dec 2023</p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <ul className="list-disc pl-5 mt-2 ">
                <li>Developed reusable data pipelines in Azure Data Factory (ADF) to load the transformed data to SQL Server and Azure Delta Lake tables.</li>
                <li>Developed Databricks PySpark notebooks with Spark SQL for the transformation logic.</li>
                <li>Developed reusable pipeline notification functions for success/failure messages of the pipeline.</li>
                <li>Worked on POC to Snowflake loading and built SNOWPIPES to load data into Snowflake.</li>
                <li>Performed unit testing and provided UAT support for the data pipelines.</li>
                <li>Supported Cloud Azure Data Factory pipelines for production jobs.</li>
                <li>Used Docker containers to test the pipeline locally to avoid cluster usage costs.</li>
                <li>Collaborated with business partners/product owners to design new requirements.</li>
                <li>Applied Agile and Scrum methodologies using JIRA to improve team communication and track and increase workflow efficiency.</li>
              </ul>
            </BoxReveal>
          </div>
          <div className="mb-8">
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <div>
                <h3 className="text-xl font-semibold">Data Engineer at Nike</h3>
                <p className="">Seattle, WA | Aug 2019 – Dec 2021</p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={"#90144c"} duration={1}>
              <ul className="list-disc pl-5 mt-2 ">
                <li>Worked with Product Owners/Architects to define the requirement and design for development.</li>
                <li>Worked on creating Spark jobs that process the true source files and performed various transformations on the source data using Spark DataFrame/Dataset, Spark SQL APIs.</li>
                <li>Improved the performance and optimization of existing algorithms in Hadoop using Spark Context, Spark-SQL, DataFrame, Spark on YARN.</li>
                <li>Created data pipelines using Databricks cluster and loaded data to SQL and Synapse, and created CI/CD pipelines for notebooks.</li>
                <li>Developed ADF pipelines to orchestrate the data pipelines.</li>
                <li>Migrated Hadoop Cloudera Spark and Hive Jobs from CDP Cluster to Delta Lake.</li>
                <li>Utilized stream sets to read data from Kafka topics with high throughput.</li>
                <li>Created data pipelines in Azure for Extract/Load/Transform the data to Storage accounts, Delta Lake, and Azure SQL.</li>
                <li>Created build pipelines and release pipelines for continuous integration and continuous deployment in Azure.</li>
              </ul>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
