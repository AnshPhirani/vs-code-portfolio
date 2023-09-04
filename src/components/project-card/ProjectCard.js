import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card} key={project.id}>
      <img src={project.image} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.source_code && (
            <a href={project.source_code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
