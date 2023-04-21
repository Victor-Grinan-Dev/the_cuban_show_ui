import React, { useState } from "react";
// import style from "./tagBtn.module.css";
import AppBtn from "./AppBtn";
import { selectedAppBtn } from "./standardStyle";
const notSelected = {
  borderColor: "black",
  color: "black",
  margin: "0 5px",
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
    <AppBtn
      type={"terceary"}
      fx={() => {
        fxPrimary();
        isSelectedHandle();
      }}
      caption={label}
      style={isSelected ? selected : notSelected}
    />
  );
};

export default TagBtn;
