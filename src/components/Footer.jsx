import React from "react";
import style from "./footerStyle.module.css";

import f from "../assets/someIcons/f_logo_RGB-Blue_512.png";
import ig from "../assets/someIcons/Instagram_Glyph_Gradient.png";
import twitter from "../assets/someIcons/2021 Twitter logo - blue.png";
import yt from "../assets/someIcons/yt_icon_rgb.png";

import { translate } from "../translation/translation";
import { useSelector } from "react-redux";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  // const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div className={style.darkFooter}>
      <div>{translate("Follow us", currentLang)}</div>
      <div className={style.some}>
        <a
          href="https://www.facebook.com/TheCubanShow502/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.f} src={f} alt="icon" />
        </a>

        <a
          href="https://www.instagram.com/thecubanshow/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.ig} src={ig} alt="icon" />
        </a>

        <a
          href="https://twitter.com/TheCubanShow502"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.twitter} src={twitter} alt="icon" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCzjcr4N5avBbjEcywqVax_Q"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.yt} src={yt} alt="icon" />
        </a>
      </div>
      <div className={style.copyrights}>
        <p>Copyrights© {year}</p>
      </div>
    </div>
  );
};

export default Footer;
