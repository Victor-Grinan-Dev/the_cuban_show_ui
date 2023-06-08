import React from "react";
import LangBox from "../../langBox/LangBox";
import Login from "../../login/Login";
import Logout from "../../logout/Logout";

import style from "./settingsView.module.css";
import { useSelector } from "react-redux";
import DarkMode from "../../darkMode/DarkMode";

const SettingView = () => {
  const isAuth = useSelector((state) => state.app.isAuth);
  return (
    <div className={style.settingView}>
      <LangBox />
      <DarkMode/>
      {isAuth ? <Logout /> : <Login />}
    </div>
  );
};

export default SettingView;
