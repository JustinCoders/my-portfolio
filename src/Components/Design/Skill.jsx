import style from "./Skill.module.css";
import { motion } from "framer-motion";

const Skill = ({
  label,
  bgColor = "#f5f5f5",
  fontDefault = "0.8rem",
  textColor = "#000",
  delay = 0
}) => {
  const { skillHover } = style;

  return (
    <motion.kbd
      className={skillHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{
        fontSize: fontDefault,
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      {label}
    </motion.kbd>
  );
};

export default Skill;
