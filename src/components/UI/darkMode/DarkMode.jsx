import React, { useEffect } from "react";

import { setDarkMode } from "../../../app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import AppBtn from "../appBtn/AppBtn";
import modalStyle from "../modals/modals.module.css";
import style from "./darkMode.module.css";
import { translate } from "../../../translation/translation";
import useLocalStorage from "../../../hooks/useLocalStorage";

const DarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);
  const currentLang = useSelector((state) => state.app.currentLang);
  const [pref, setPref] = useLocalStorage("tcs-pref", {
    darkMode: darkMode,
    currentLang: currentLang,
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.backgroundColor = "#252530";
      document.documentElement.style.color = "white";
    } else {
      document.documentElement.style.backgroundColor = "white";
      document.documentElement.style.color = "#252525";
    }
  }, [darkMode]);

  useEffect(() => {
    if(pref.darkMode !== darkMode){
      setPref({ ...pref, darkMode: darkMode });
    }
    
     // eslint-disable-next-line
  }, [darkMode]);

  return (
    <div className={style.darkMode}>
      <p className={modalStyle.sectionName}>
        {translate("Dark mode", currentLang)}
      </p>
      <AppBtn
        caption={
          darkMode
            ? translate("On", currentLang)
            : translate("Off", currentLang)
        }
        type={darkMode ? "active" : "secondary"}
        fx={() => {
          dispatch(setDarkMode(!darkMode));
        }}
      />
    </div>
  );
};

export default DarkMode;
