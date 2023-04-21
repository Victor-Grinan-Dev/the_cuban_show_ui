import React from "react";
import LangBox from "../langBox/LangBox";
import Login from "../login/Login";

import MoreTags from "../moreTags/MoreTags";
import style from "./settingsView.module.css";

const SettingView = () => {
  return (
    <div className={style.settingView}>
      <MoreTags />
      <LangBox />
      <Login />
    </div>
  );
};

export default SettingView;
