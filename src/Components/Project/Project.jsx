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
          <ProjectCard
            imgSrc="/ProjectPhoto/traveltours.png"
            title="Travel & Tours"
            url=""
          />
          <ProjectCard
            imgSrc="/ProjectPhoto/justinflex.png"
            title="JustinFlex (Movie Review)"
            url="https://justinflex.vercel.app/"
          />
          <ProjectCard
            imgSrc="/ProjectPhoto/disbursement.png"
            title="Disbursement"
            url="http://disbursement-jp.infinityfreeapp.com"
          />
          {/* <ProjectCard
            imgSrc="/project2.jpg"
            title="Billing Invoice"
            url="https://example.com/billing"
          /> */}
          <ProjectCard
            imgSrc="/ProjectPhoto/purchaseorder.png"
            title="Purchase Order"
            url="https://purchase-order-jp.infinityfreeapp.com/purchase-order.php"
          />
          <ProjectCard
            imgSrc="/ProjectPhoto/rpsgame.png"
            title="Rock, Paper & Scissor"
            url="https://justincodershub.github.io/Rock-Paper-Scissor/"
          />
          <ProjectCard
            imgSrc="/ProjectPhoto/rgbalpha.png"
            title="RGB Alpha"
            url="https://justincoders-rgb-alpha.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
