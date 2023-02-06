import React from 'react'; 
import style from './footerStyle.module.css';

import f from '../assets/someIcons/f_logo_RGB-Blue_512.png';

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <div className={style.footer}>
        <div>
          Follow us
        </div>
        <div className={style.some}>
          <a href="https://www.facebook.com/TheCubanShow502/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noreferrer"><div className={style.f} style={{backgroundImage: `url(${f})`}}>f</div></a>
          <a href="https://www.instagram.com/thecubanshow/" target="_blank" rel="noreferrer"><div className={style.ig}>Ig</div></a>
          <a href="https://twitter.com/TheCubanShow502" target="_blank" rel="noreferrer"><div className={style.yt}>twitter</div></a>
          <a href="https://www.youtube.com/channel/UCzjcr4N5avBbjEcywqVax_Q" target="_blank" rel="noreferrer"><div className={style.twitter}>You Tube</div></a>
        </div>
        <div className={style.copyrights}>
          <p>Copyrights© {year}</p>
        </div>
    </div>
  )
}

export default Footer;