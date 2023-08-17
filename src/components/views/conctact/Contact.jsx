import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import Banner from "../../UI/banner/Banner";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";

// const page = {
//   backgroundColor: "white",
//   color: "#252525",
//   padding: "0 10px",
//   // backgroundImage: "none",
// };

// const pageDark = {
//   backgroundColor: "#252525",
//   color: "white",
//   padding: "0 5px",
//   // backgroundImage: "none",
// };

export default function Contact() {
  // const darkMode = useSelector((state) => state.app.darkMode);
  const currentLang = useSelector((state) => state.app.currentLang);
  const link = { color: "blue" };
  return (
    <div className={genStyle.view}>
      <Banner />
      <div
      // style={darkMode ? pageDark : page}
      >
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
          <span style={link}>Victor Griñán</span>{" "}
        </p>

        <br />
        <p style={link}>thecubanshow502@gmail.com</p>
      </div>
    </div>
  );
}
