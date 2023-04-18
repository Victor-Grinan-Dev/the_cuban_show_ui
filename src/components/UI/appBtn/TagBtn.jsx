import React, { useState } from "react";
// import style from "./tagBtn.module.css";
import AppBtn from "./AppBtn";
import { selectedAppBtn } from "./standardStyle";
const notSelected = {
  borderColor: "black",
  color: "black",
};

const selected = {
  ...selectedAppBtn,
  margin: "0 5px",
};

const TagBtn = ({ fxPrimary, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const isSelectedHandle = () => {
    setIsSelected(!isSelected);
  };
  return (
    // <span className={isSelected? style.selectedTagBtn : style.TagBtn} onClick={(e)=>
    //     {
    //         isSelectedHandle();
    //         fxPrimary(e);
    //     }}>
    //     {label}
    // </span>
    <AppBtn
      type={"terceary"}
      fx={fxPrimary}
      caption={label}
      style={isSelected ? selected : notSelected}
    />
  );
};

export default TagBtn;
