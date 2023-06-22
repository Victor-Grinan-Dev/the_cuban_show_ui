import React from "react";
import "./appBtn.css";
const types = {
  //primary
  primary: "primary", //big and long submit

  //secundary
  secondary: "secondary", // half sized
  active:"secondary-active",
  execute:"secondary-execute",
  warning:"secondary-warning",
  danger:"secondary-danger",

  //terceary
  terceary: "terceary", //tiny like tags btn
  tercearyA: "terceary-active", //green version
  notSelected:"terceary-not-selected",
  selected:"terceary-selected",
  disply:"terceary-display",
};

const AppBtn = ({ caption, fx, type, style, name, id }) => {
  /**
   * type: accepts strings: primary, secondary, terceary, active, warning or danger
   */
  const classStyle = types[type];
  return (
    <button
      id={id}
      name={name}
      onClick={fx}
      className={`${classStyle}`}
      style={style}
    >
      {caption}
    </button>
  );
};

export default AppBtn;
