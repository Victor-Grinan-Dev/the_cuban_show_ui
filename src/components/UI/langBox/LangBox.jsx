import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLang } from "../../../app/appSlice";
import style from "./langBox.module.css";
import { translate } from "../../../translation/translation";
import settingsStyle from "../settingView/settingStyles.module.css";

const selected = {
  backgroundColor: "green",
};

const LangBox = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className={style.langBox}>
      <p className={settingsStyle.settingsSectionName}>
        {translate("Select language:")}
      </p>
      <div>
        <button
          onClick={() => dispatch(setCurrentLang("en"))}
          style={currentLang === "en" ? selected : null}
        >
          English
        </button>
        <button
          onClick={() => dispatch(setCurrentLang("es"))}
          style={currentLang === "es" ? selected : null}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LangBox;
