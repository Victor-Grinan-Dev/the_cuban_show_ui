import React from "react";
import AppBtn from "./AppBtn";
import { selectedAppBtn } from "./standardStyle";
import { useSelector } from "react-redux";

const notSelected = {
  borderColor: "black",
  color: "black",
  margin: "0 5px",
};

const darkNotSelected = {
  borderColor: "white",
  color: "white",
  margin: "0 5px",
};

const selected = {
  ...selectedAppBtn,
  margin: "0 5px",
};

const TagBtn = ({ fxPrimary, label, style, isSelected }) => {
  const darkMode = useSelector(state => state.app.darkMode);
  return (
    <AppBtn
      type={"terceary"}
      fx={() => {
        fxPrimary();
      }}
      caption={label.toUpperCase()}
      style={style ? style : isSelected ? selected : !darkMode ? notSelected : darkNotSelected}
    />
  );
};

export default TagBtn;
