import { Typewriter } from "react-simple-typewriter";
import Line from "../Design/Line.jsx";
import Skill from "../Design/Skill.jsx";
import style from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  const {
    about,
    aboutHeader,
    aboutMe,
    picContainer,
    myPic,
    aboutMyself,
    technicalSkill,
    whoIAm,
    SkillSet,
    skillWrapper
  } = style;

  const frontEndSkill = [
    { label: "HTML", bgColor: "#e34c26" },
    { label: "CSS", bgColor: "#264de4" },
    { label: "Bootstrap", bgColor: "#7952b3" },
    { label: "JavaScript (ES6+)", bgColor: "#f7df1e" },
    { label: "React.js", bgColor: "#61dafb" }
  ];

  const versionControl = [
    { label: "Github", bgColor: "#181717" },
    { label: "Git", bgColor: "#f05032" }
  ];

  const tools = [
    { label: "Visual Studio Code", bgColor: "#007acc" },
    { label: "Chrome Dev Tools", bgColor: "#4285F4" },
    { label: "Hostinger (Deployment)", bgColor: "#673de6" }
  ];

  const softSkills = [
    { label: "Adaptability", bgColor: "#81c784" },
    { label: "Time Management", bgColor: "#4fc3f7" },
    { label: "Problem Solving", bgColor: "#ffb74d" },
    { label: "Team Collaboration", bgColor: "#ba68c8" }
  ];

  return (
    <div className={about} id="about">
      <div className={aboutHeader}>
        <h1>About Me</h1>
        <Line />
      </div>

      <div className={aboutMe}>
        <div className={picContainer}>
          <img className={myPic} src="myself.jpg" alt="My Photo" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            gap: "20px"
          }}
        >
          {/* About MySelf */}
          <div>
            <h1 className={whoIAm}>
              <Typewriter
                words={["Who am I?"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h1>
            <p className={aboutMyself}>
              I’m Justin Padilla, an aspiring web developer with a love for
              building websites and learning new technologies. I enjoy solving
              problems, improving my skills, and creating useful digital
              experiences. My goal is to grow as a front-end developer and work
              on real-world projects that make an impact. I’m motivated,
              focused, and excited to continue learning in this field.
            </p>
          </div>

          {/* My Skills */}
          <div>
            <motion.h2
              className={technicalSkill}
              style={{ marginBottom: "10px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {/* Front-end */}
              <div className={SkillSet}>
                <p style={{ fontSize: "1.1rem" }}>Front-end:</p>
                <div className={skillWrapper}>
                  {frontEndSkill.map((skill, index) => (
                    <Skill
                      key={index}
                      label={skill.label}
                      bgColor={skill.bgColor}
                      textColor={
                        ["HTML", "CSS", "Bootstrap"].includes(skill.label)
                          ? "#fff"
                          : undefined
                      }
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </div>

              {/* Version Control */}
              <div className={SkillSet}>
                <p style={{ fontSize: "1.1rem" }}>Version Control:</p>
                <div className={skillWrapper}>
                  {versionControl.map((skill, index) => (
                    <Skill
                      key={index}
                      label={skill.label}
                      bgColor={skill.bgColor}
                      textColor="#fff"
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className={SkillSet}>
                <p style={{ fontSize: "1.1rem" }}>Tools:</p>
                <div className={skillWrapper}>
                  {tools.map((skill, index) => (
                    <Skill
                      key={index}
                      label={skill.label}
                      bgColor={skill.bgColor}
                      textColor="#fff"
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className={SkillSet}>
                <p style={{ fontSize: "1.1rem" }}>Soft Skills:</p>
                <div className={skillWrapper}>
                  {softSkills.map((skill, index) => (
                    <Skill
                      key={index}
                      label={skill.label}
                      bgColor={skill.bgColor}
                      delay={index * 0.15}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
