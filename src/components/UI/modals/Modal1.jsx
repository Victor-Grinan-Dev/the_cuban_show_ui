import React from "react";
import css from "./modals.module.css";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";

const Modal1 = ({ component, message, closeFx }) => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className={css.absoluteCenter}>
      <p className={css.closeX} onClick={closeFx}>
        {translate("Close", currentLang)}
      </p>
      {message && (
        <p
          style={{
            color: "white",
            textTransform: "uppercase",
            fontSize: "40px",
          }}
        >
          {translate(`${message}`, currentLang)}
        </p>
      )}
      {component && component}
    </div>
  );
};

export default Modal1;
