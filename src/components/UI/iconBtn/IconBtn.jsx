import React from "react";
import "./iconsBtn.css";
const IconBtn = ({ iconName }) => {
  const iconBtns = ["delete", "edit", "tune", "settings", "question_mark"];

  const deleteContent = (e) => {
    console.log('hello');
  };

  if (iconBtns.indexOf(iconName) !== -1) {
    return (
      <button
      onclick={(e) => deleteContent(e)}
      className="iconBtn"
      >
        <span
        className="material-symbols-rounded"
      >
        {iconName}
      </span>
      </button>
    );
  }
  return (
    <span className="material-symbols-rounded iconBtn">{iconBtns[iconName]}</span>
  );
};

export default IconBtn;
