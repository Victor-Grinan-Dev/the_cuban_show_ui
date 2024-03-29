import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import Banner from "../../UI/banner/Banner";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";

export default function Contact() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const currentLang = useSelector((state) => state.app.currentLang);
  const link = { color: "blue", cursor: "pointer" };
  return (
    <div className={genStyle.view}>
      <Banner />
      <div className={!darkMode ? genStyle.textPage : genStyle.textPageDark}>
        <h2 style={{ textTransform: "uppercase" }}>
          {translate("contact us", currentLang)}:
        </h2>
        <br />

        <p>
          {translate("Production and direction", currentLang)}:{" "}
          <span style={link}>Vladimir Aguilar</span>
        </p>
        <br />
        <p>
          {translate("Contents", currentLang)}:<span style={link}> ... </span>
        </p>
        <br />
        <p>
          {translate("Web app creation and maintenance", currentLang)}:{" "}
          <a
            href="https://victor-grinan-dev.github.io/Portfolio/"
            target="blank"
            style={link}
          >
            Victor Griñán
          </a>{" "}
        </p>

        <br />
        <p style={link}>thecubanshow502@gmail.com</p>
      </div>
    </div>
  );
}
