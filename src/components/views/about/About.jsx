import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./styleAbout.module.css";
import Banner from "../../UI/banner/Banner";

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
      <div className={genStyle.textPage} style={{ paddingBottom: "50px" }}>
        <h1>The cuban Show</h1>
        <br />
        <p className={style.termsConditions}>
          Make sure to read our{" "}
          <Link to={"termsandconditions"} style={{ color: "blue" }}>
            {" "}
            Terms & Conditions.{" "}
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
            Who we are?
            <br />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          reprehenderit beatae ullam quis ex tenetur velit quidem vitae
          dignissimos iusto necessitatibus deserunt recusandae est totam,
          voluptate laboriosam quam delectus assumenda doloremque debitis fugit
          facere nemo. Tempore molestias id incidunt.
        </p>
        <br />
        <br />
        <p>
          {" "}
          <span className={style.aboutSubjects}>
            What we want?
            <br />
          </span>{" "}
          Iure optio cumque saepe, natus reiciendis delectus. Quisquam autem
          illo iure sint sed amet temporibus, accusantium reiciendis incidunt ab
          dicta, necessitatibus ipsam voluptatum numquam nulla similique
          repudiandae non deserunt illum ullam qui vel eum? Quasi aspernatur
          quod quidem necessitatibus consequatur libero delectus maxime facere.
        </p>
        <br />
        <br />
        <p>
          {" "}
          <span className={style.aboutSubjects}>
            {" "}
            How we will get it?
            <br />
          </span>
          Dolores dolorem totam dicta voluptates hic dolore, at eum saepe, nisi
          assumenda, earum praesentium quibusdam explicabo quod ea excepturi
          fugiat minus asperiores magnam enim doloribus.{" "}
        </p>
        <br />
        <br />
        <p>
          {" "}
          <span className={style.aboutSubjects}>
            {" "}
            How you can help?
            <br />
          </span>{" "}
          - The easiest way to help us is by following, liking and subscribing
          in some or all of the social media plattforms. - You could provide
          topics and info for us to include in our program. - you could order
          merchandise from us as a way to support. - you can order adverrtisment
          service from us. - or you could just donate.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}
