import React from "react";
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

const TagBtn = ({ fxPrimary, label, style, isSelected }) => {

  return (
    <AppBtn
      type={"terceary"}
      fx={() => {
        fxPrimary();
      }}
      caption={label}
      style={style ? style : isSelected ? selected : notSelected}
    />
  );
};

export default TagBtn;
