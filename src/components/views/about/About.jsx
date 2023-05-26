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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        reprehenderit beatae ullam quis ex tenetur velit quidem vitae
        dignissimos iusto necessitatibus deserunt recusandae est totam,
        voluptate laboriosam quam delectus assumenda doloremque debitis fugit
        facere nemo. Tempore molestias id incidunt. Iure optio cumque saepe,
        natus reiciendis delectus. Quisquam autem illo iure sint sed amet
        temporibus, accusantium reiciendis incidunt ab dicta, necessitatibus
        ipsam voluptatum numquam nulla similique repudiandae non deserunt illum
        ullam qui vel eum? Quasi aspernatur quod quidem necessitatibus
        consequatur libero delectus maxime facere. Dolores dolorem totam dicta
        voluptates hic dolore, at eum saepe, nisi assumenda, earum praesentium
        quibusdam explicabo quod ea excepturi fugiat minus asperiores magnam
        enim doloribus. Rerum asperiores nemo exercitationem deserunt corporis.
        Laboriosam tempore nostrum alias numquam earum aspernatur quibusdam unde
        labore assumenda iste consequatur molestiae debitis architecto
        voluptates reiciendis ratione deleniti, necessitatibus porro sint?
        Deserunt architecto eum quo ab laudantium? Minus tenetur quas
        necessitatibus, veritatis ad quaerat?
      </p>
    </div>
  );
}
