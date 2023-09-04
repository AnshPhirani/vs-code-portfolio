import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import covidTrackerImage from "../../assets/project-images/covid-tracker.png";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import encodeImage from "../../assets/project-images/encode.png";

const projectsData = [
  {
    id: 1,
    name: "Encode",
    image: encodeImage,
    description:
      "A platform for programmers to run their code online in any web browser.",
    tags: ["javascript", "react", "react-redux", "bootstrap", "codemirror"],
    source_code: "https://github.com/anshphirani/encode",
    demo: "https://anshphirani.github.io/encode/",
  },
  {
    id: 2,
    name: "VSCode Portfolio",
    image: vsCodePortfolioImage,
    description:
      "A themeable and developer-centric portfolio with a sleek VS Code theme to showcase my work and skills.",
    tags: ["javascript", "react", "css-modules"],
    source_code: "https://github.com/anshphirani/vs-code-portfolio",
    demo: "https://anshphirani.github.io/vs-code-portfolio/",
  },
  {
    id: 3,
    name: "Covid Tracker",
    image: covidTrackerImage,
    description:
      "A user-friendly web application that fetches real-time country-wise COVID data from API",
    tags: ["javascript", "react", "chart.js", "axios"],
    source_code: "https://github.com/anshphirani/covidtracker",
    demo: "https://anshphirani.github.io/covidtracker/",
  },
  // {
  //   id: 4,
  //   name: "Amazn Clone",
  //   image: covidTrackerImage,
  //   description:
  //     "a amazon clone with full e-commerce functionality and stripe payment gateway integration",
  //   tags: ["javascript", "react", "stripe"],
  //   source_code: "https://github.com/anshphirani/amazon-clone",
  // },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
