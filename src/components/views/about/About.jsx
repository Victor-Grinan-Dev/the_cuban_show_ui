import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./styleAbout.module.css";
import Banner from "../../UI/banner/Banner";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={genStyle.view} style={{}}>
      <Banner />
      <h1>The cuban Show</h1>
      
      <p className={genStyle.splitParragraph}>
        <span className={style.aboutSubjects}>Who we are?</span><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          reprehenderit beatae ullam quis ex tenetur velit quidem vitae
          dignissimos iusto necessitatibus deserunt recusandae est totam,
          voluptate laboriosam quam delectus assumenda doloremque debitis fugit
          facere nemo. Tempore molestias id incidunt. <br />  <br />
        <span className={style.aboutSubjects}>What we want?</span> <br /> Iure optio
        cumque saepe, natus reiciendis delectus. Quisquam autem illo iure sint
        sed amet temporibus, accusantium reiciendis incidunt ab dicta,
        necessitatibus ipsam voluptatum numquam nulla similique repudiandae non
        deserunt illum ullam qui vel eum? Quasi aspernatur quod quidem
        necessitatibus consequatur libero delectus maxime facere. <br />
        <span className={style.aboutSubjects}> <br /> How we will get it?</span> <br /> Dolores
        dolorem totam dicta voluptates hic dolore, at eum saepe, nisi assumenda,
        earum praesentium quibusdam explicabo quod ea excepturi fugiat minus
        asperiores magnam enim doloribus. <br />
        <span className={style.aboutSubjects}> <br /> How you can help?</span> <br />
        - The easiest way to help us is by following, liking and subscribing in some or all of the social media plattforms.
        <br />
        - You could provide topics and info for us to include in our program.
        - you could order merchandise from us as a way to support.
        - you can order adverrtisment service from us.
        - or you could just donate.
      </p>
    
      <div><p>Make sure to read our <Link to={"termsandconditions"}> <h4>Terms & Conditions</h4> </Link></p></div>
      <div><Link to={"termsandconditions"}> <h4>How to install the App in android phones</h4> </Link></div>


    </div>
  );
}
