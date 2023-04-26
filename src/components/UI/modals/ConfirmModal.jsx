import React from "react";
import css from "./modals.module.css";
import { translate } from "../../../translation/translation";
import { useDispatch, useSelector } from "react-redux";
import { setShowConfirm } from "../../../app/appSlice";

const ConfirmModal = ({ component, message }) => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const dispatch = useDispatch();
  return (
    <div className={css.absoluteCenter} style={{ backgroundColor: "black" }}>
      <p className={css.closeX} onClick={() => dispatch(setShowConfirm())}>
        {translate("Close", currentLang)}
      </p>
      {component && component}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ConfirmModal;
