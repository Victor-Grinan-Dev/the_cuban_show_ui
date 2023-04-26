import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translate } from "../../../translation/translation";
import AppBtn from "../appBtn/AppBtn";

const BackToMain = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    // <Link to="/">{"<<< " + translate("Back to homepage...", currentLang)}</Link>
    <Link to="/">
      <AppBtn
        caption={"<<< " + translate("Back to homepage...", currentLang)}
        type={"primary"}
        style={{ width: "300px" }}
      />
    </Link>
  );
};

export default BackToMain;
