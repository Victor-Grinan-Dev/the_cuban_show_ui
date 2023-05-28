import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import style from "./styleAbout.module.css";
import Banner from "../../UI/banner/Banner";

import chromeTcs from "../../../assets/install-app/chorme_tcs_page.jpg";
import zoom from "../../../assets/install-app/chrome_tcs_zoom.jpg";
import settings from "../../../assets/install-app/chrome_tcs_settings.jpg";

export default function About() {
  return (
    <div className={genStyle.view} style={{}}>
      <Banner />
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
        <span className={style.aboutSubjects}> <br /> How you can help?</span> <br /> Rerum
        asperiores nemo exercitationem deserunt corporis. Laboriosam tempore
        nostrum alias numquam earum aspernatur quibusdam unde labore assumenda
        iste consequatur molestiae debitis architecto voluptates reiciendis
        ratione deleniti, necessitatibus porro sint? Deserunt architecto eum quo
        ab laudantium? Minus tenetur quas necessitatibus, veritatis ad quaerat?
      </p>
      <h4 className={style.installingTitle}>Installing the App in your mobile</h4>

      <ol>
        <li>
          open the link of this app in your mobilephone with Google Chrome.
        </li>
        <a href={chromeTcs} target="_blank" rel="noreferrer">
          <img
            src={chromeTcs}
            alt="chrome settings"
            className={style.installImg}
          />
        </a>
        <li>
          Click the settings in the right upper corner of the Chrome browser
        </li>
        <a href={zoom} target="_blank" rel="noreferrer">
          <img src={zoom} alt="chrome settings" className={style.installImg} />
        </a>
        <li>Select "Add to home screen" & accept the suggested name</li>
        <a href={settings} target="_blank" rel="noreferrer">
          <img
            src={settings}
            alt="chrome settings"
            className={style.installImg}
          />
        </a>
        <li>Enjoy the App from your mobile!</li>
      </ol>
    </div>
  );
}
