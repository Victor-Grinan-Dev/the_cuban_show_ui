import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./styleAbout.module.css";
import Banner from "../../UI/banner/Banner";

import chromeTcs from "../../../assets/install-app/chorme_tcs_page.jpg";
import zoom from "../../../assets/install-app/chrome_tcs_zoom.jpg";
import settings from "../../../assets/install-app/chrome_tcs_settings.jpg";
import modal from "../../../assets/install-app/chrome-confirm-modal.jpg";
import toHomeSc from "../../../assets/install-app/phone-installed-app.jpg";
import complete from "../../../assets/install-app/phone-added-to-home-app.jpg";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";

const aboutPage = {
  backgroundColor: "white",
  color: "#252525",
};

const aboutPageDark = {
  backgroundColor: "#252525",
  color: "white",
};

export default function About() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className={genStyle.view} style={darkMode ? aboutPageDark : aboutPage}>
      <Banner />
      <h1>The cuban Show</h1>
      <div>
        <p className={style.termsConditions}>
          Make sure to read our{" "}
          <Link to={"termsandconditions"}> Terms & Conditions </Link>
        </p>
      </div>
      <p className={genStyle.splitParragraph}>
        <span className={style.aboutSubjects}>Who we are?</span>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        reprehenderit beatae ullam quis ex tenetur velit quidem vitae
        dignissimos iusto necessitatibus deserunt recusandae est totam,
        voluptate laboriosam quam delectus assumenda doloremque debitis fugit
        facere nemo. Tempore molestias id incidunt. <br /> <br />
        <span className={style.aboutSubjects}>What we want?</span> <br /> Iure
        optio cumque saepe, natus reiciendis delectus. Quisquam autem illo iure
        sint sed amet temporibus, accusantium reiciendis incidunt ab dicta,
        necessitatibus ipsam voluptatum numquam nulla similique repudiandae non
        deserunt illum ullam qui vel eum? Quasi aspernatur quod quidem
        necessitatibus consequatur libero delectus maxime facere. <br />
        <span className={style.aboutSubjects}>
          {" "}
          <br /> How we will get it?
        </span>{" "}
        <br /> Dolores dolorem totam dicta voluptates hic dolore, at eum saepe,
        nisi assumenda, earum praesentium quibusdam explicabo quod ea excepturi
        fugiat minus asperiores magnam enim doloribus. <br />
        <span className={style.aboutSubjects}>
          {" "}
          <br /> How you can help?
        </span>{" "}
        <br />
        - The easiest way to help us is by following, liking and subscribing in
        some or all of the social media plattforms.
        <br />- You could provide topics and info for us to include in our
        program. - you could order merchandise from us as a way to support. -
        you can order adverrtisment service from us. - or you could just donate.
      </p>

      <div>
        {" "}
        <h4 className={style.installingTitle}>
          {translate("Installing the App in your mobile", currentLang)}
        </h4>
        <ol className={style.list}>
          <li>
            1.
            {translate(
              "Open the link of this app in your mobilephone with Google Chrome",
              currentLang
            )}
            .
          </li>
          <a href={chromeTcs} target="_blank" rel="noreferrer">
            <img
              src={chromeTcs}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            2.
            {translate(
              "Click the settings in the right upper corner of the Chrome browser",
              currentLang
            )}
            .
          </li>
          <a href={zoom} target="_blank" rel="noreferrer">
            <img
              src={zoom}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            3.
            {translate(
              'Select "install App". Notice that sometimes appears as "Add to home screen"',
              currentLang
            )}
            .
          </li>
          <a href={settings} target="_blank" rel="noreferrer">
            <img
              src={settings}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            4.
            {translate(
              "Install or accept the suggested name in the popup modal",
              currentLang
            )}
            .
          </li>
          <a href={modal} target="_blank" rel="noreferrer">
            <img
              src={modal}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            {translate(
              "(Optional) Add the app to the mobile home screen",
              currentLang
            )}
            .
          </li>
          <a href={toHomeSc} target="_blank" rel="noreferrer">
            <img
              src={toHomeSc}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>{translate("Enjoy the App from your mobile!", currentLang)}</li>
          <a href={complete} target="_blank" rel="noreferrer">
            <img
              src={complete}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
        </ol>
      </div>

      {/* <div><Link to={"installapp"}><p>How to install this ap in androids</p></Link></div> */}
    </div>
  );
}
