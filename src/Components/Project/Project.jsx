import style from "../Project/Project.module.css";
import Line from "../Design/Line.jsx";
import ProjectCard from "./ProjectCard.jsx";

const Project = () => {
  const { project, projectHeader, cardContainer, cardWrapper } = style;
  return (
    <div className={project} id="project">
      <div className={projectHeader}>
        <h1>Projects</h1>
        <Line color="#fff" />
      </div>

      <div className={cardContainer}>
        <div className={cardWrapper}>
          <ProjectCard
            imgSrc="/ProjectPhoto/jlqaccounting.png"
            title="Accounting Services"
            url="https://jlqaccountingservices.com/"
          />
          <ProjectCard imgSrc="/ProjectPhoto/" title="Travel & Tours" url="" />
          <ProjectCard
            imgSrc="/project2.jpg"
            title="Disbursment"
            url="https://example.com/billing"
          />
          <ProjectCard
            imgSrc="/project2.jpg"
            title="Billing Invoice"
            url="https://example.com/billing"
          />
          <ProjectCard
            imgSrc="/project3.jpg"
            title="Purchase Order"
            url="https://example.com/purchase"
          />
          <ProjectCard
            imgSrc="/ProjectPhoto/rpsgame.png"
            title="Rock, Paper & Scissor"
            url="https://justincodershub.github.io/Rock-Paper-Scissor/"
          />
          <ProjectCard
            imgSrc="/project5.jpg"
            title="RGB Alpha"
            url="https://example.com/rgb"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
