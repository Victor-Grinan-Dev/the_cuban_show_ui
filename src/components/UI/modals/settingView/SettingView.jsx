import React from "react";
import LangBox from "../../langBox/LangBox";
import Login from "../../login/Login";
import Logout from "../../logout/Logout";
// import MoreTags from "../moreTags/MoreTags";

import style from "./settingsView.module.css";
import { useSelector } from "react-redux";

const SettingView = () => {
  const isAuth = useSelector((state) => state.app.isAuth);
  return (
    <div className={style.settingView}>
      {/* <MoreTags /> */}
      <LangBox />

      {isAuth ? <Logout /> : <Login />}
    </div>
  );
};

export default SettingView;
