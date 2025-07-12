import style from "./Line.module.css";

const Line = ({ color = "#202020" }) => {
  return (
    <div>
      <div
        className={style.line}
        style={{ borderBottom: `3px solid ${color}` }}
      ></div>
      <div
        className={style.line}
        style={{ borderBottom: `3px solid ${color}` }}
      ></div>
    </div>
  );
};

export default Line;
