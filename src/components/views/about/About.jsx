import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./styleAbout.module.css";
import Banner from "../../UI/banner/Banner";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translation";

export default function About() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <div className={genStyle.view}>
      <Banner />
      <div className={!darkMode ? genStyle.textPage : genStyle.textPageDark}>
        <h1>The cuban Show</h1>
        <br />
        <p className={style.termsConditions}>
          {translate("Make sure to read our", currentLang)}
          <Link to={"termsandconditions"} style={{ color: "blue" }}>
            {" "}
            {translate("Terms & Conditions", currentLang)}.
          </Link>
        </p>
        <div>
          <Link to={"installapp"}>
            <p style={{ color: "blue" }}>
              {translate("Want to install this app?", currentLang)}
            </p>
          </Link>
        </div>
        <br />
        <p>
          <span className={style.aboutSubjects}>
            {translate("Who we are?", currentLang)}
            <br />
            <br />
          </span>
          {translate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          reprehenderit beatae ullam quis ex tenetur velit quidem vitae
          dignissimos iusto necessitatibus deserunt recusandae est totam,
          voluptate laboriosam quam delectus assumenda doloremque debitis fugit
          facere nemo. Tempore molestias id incidunt`,
            currentLang
          )}
          .
        </p>
        <br />
        <br />
        <p>
          {" "}
          <span className={style.aboutSubjects}>
            {translate("What we want?", currentLang)}
            <br />
          </span>{" "}
        </p>
        <br />
        <p>
          {translate(
            `Aspiramos a construir un espacio en línea donde se promueva contenido
          noticioso imparcial y libre de sesgo político, fomentando el
          pensamiento crítico y la reflexión informada. Nuestro propósito es
          ofrecer una plataforma en la que los individuos puedan acceder a una
          gama diversa de opiniones, análisis y perspectivas sobre temas
          relevantes`,
            currentLang
          )}
          .
        </p>
        <br />
        <br />
        <p>
          <span className={style.aboutSubjects}>
            {translate("How we will get it?", currentLang)}
            <br />
            <br />
          </span>
          {translate(
            `Facilitando el acceso a información equilibrada y objetiva desde
          diversas perspectivas, con la intención de establecer una plataforma
          donde las personas puedan explorar y analizar la actualidad
          socio-política`,
            currentLang
          )}
          .
        </p>
        <br />
        <br />
        <p>
          <span className={style.aboutSubjects}>
            {translate(`How you can help?`, currentLang)}
          </span>
          <br />
          <br />-
          {translate(
            `The easiest way to help us is by following, liking and subscribing in some or all of the social media plattforms`,
            currentLang
          )}
          .
          <br />-
          {translate(
            `You could provide topics and info for us to include in our program`,
            currentLang
          )}
          {/* .<br />-
          {translate(
            `You could order merchandise from us as a way to support`,
            currentLang
          )}*/}
          .<br />-
          {translate(
            `You can order adverrtisment service from us`,
            currentLang
          )}
          .<br />-{translate(`Or you could just donate`, currentLang)}
          .<br />
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}
