import React from "react";
import style from "./advCard.module.css";
const AdvCard = (props) => {
  const { text } = props;
  return (
    <div className={style.advCard}>
      <div className={style.advContent}>{text}</div>
    </div>
  );
};

export default AdvCard;
