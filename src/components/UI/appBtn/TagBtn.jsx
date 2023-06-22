import React from "react";
import AppBtn from "./AppBtn";
import { selectedAppBtn } from "./standardStyle";
import { useSelector } from "react-redux";

const notSelected = {
  borderColor: "black",
  color: "black",
  margin: "5px",
};
const darkNotSelected = {
  borderColor: "white",
  color: "white",
  margin: "5px",
  backgroundColor:"rgb(42,42,42)"
};

const selected = {
  ...selectedAppBtn,
  margin: "5px",
};

const TagBtn = ({ fxPrimary, label, style, isSelected }) => {
  const darkMode = useSelector(state => state.app.darkMode)
  return (
    <AppBtn
      type={"terceary"}
      fx={() => {
        fxPrimary();
      }}

      caption={label.toUpperCase()}
      style={isSelected ? selected : !darkMode ? notSelected : darkNotSelected}
    />
  );
};

export default TagBtn;
