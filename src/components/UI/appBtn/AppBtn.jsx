import React from "react";
import "./appBtn.css";
const types = {
  primary: "primary", //big and long submit
  secondary: "secondary", // half sized
  terceary: "terceary", //tiny like tags btn
  active:"secondary-active",
  warning:"secondary-warning",
  danger:"secondary-danger",
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
