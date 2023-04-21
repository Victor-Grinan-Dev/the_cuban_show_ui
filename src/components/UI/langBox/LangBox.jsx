import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLang } from "../../../app/appSlice";
import style from "./langBox.module.css";

import AppBtn from "../appBtn/AppBtn";
import modalStyle from "../modals/modals.module.css";
import { translate } from "../../../translation/translation";

const selected = {
  backgroundColor: "green",
};

const LangBox = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className={style.langBox}>

      <p className={modalStyle.sectionName}>
        {translate("Language", currentLang)}:
      </p>
      <div>
        <AppBtn
          caption={"English"}
          style={currentLang === "en" ? selected : null}
          fx={() => dispatch(setCurrentLang("en"))}
          type={"secondary"}
        />
        <AppBtn
          caption={"Español"}
          style={currentLang === "es" ? selected : null}
          fx={() => dispatch(setCurrentLang("es"))}
          type={"secondary"}
        />
      </div>
    </div>
  );
};

export default LangBox;
