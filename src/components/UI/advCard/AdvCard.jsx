import React from "react";
import style from "../newsCard/newsCard.module.css";
const AdvCard = (props) => {
  //const { text, dataAdSlot } = props;
  return (
    <div className={style.advCard}>
      {/* <div className={style.advContent}>{text}</div> */}
      {/* <>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5610388120909625"
          data-ad-slot={dataAdSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </> */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6878852947463746"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6878852947463746"
        data-ad-slot="5470532769"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default AdvCard;
