import * as React from "react";
import genStyle from "../../../style/styleGeneral.module.css";
import Banner from "../../UI/banner/Banner";

export default function About() {
  return (
    <div className={genStyle.view}>
      <Banner />
      <h4>Installing the App in your mobile</h4>

      <ol>
        <li>
          open the link of this app in your mobilephone with Google Chrome.
        </li>
        <li>
          Click the settings in the right upper corner of the Chrome browser
        </li>
        <li>Select "Add to home screen" & accept the suggested name</li>
        <li>Enjoy the App from your mobile!</li>
      </ol>

    </div>
  );
}
