import React from "react";
import style from "../Project/ProjectCard.module.css";

const ProjectCard = ({ imgSrc, title, url }) => {
  const { card, image, overlay, cardTitle } = style;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className={card}>
        <img className={image} src={imgSrc} alt={title} />
        <div className={overlay}>
          <h3 className={cardTitle}>{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
