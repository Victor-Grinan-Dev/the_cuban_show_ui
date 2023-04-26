import React from "react";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";
import BackToMain from "../../UI/backToMain/BackToMain";

const NotFound = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div>
      <h2>404</h2>
      <p>{translate("Page not found", currentLang)}</p>
      <BackToMain />
    </div>
  );
};

export default NotFound;
