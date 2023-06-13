import React from "react";
import style from "../newsCard/newsCard.module.css";
const AdvCard = (props) => {
  const { text, dataAdSlot } = props;
  return (
    <div className={style.advCard}>
      <div className={style.advContent}>{text}</div>
      <>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5610388120909625"
          data-ad-slot={dataAdSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </>
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5610388120909625"
        crossorigin="anonymous"
      ></script> */}
      {/* <ins
        class="adsbygoogle"
        style={{display:"block", textAlign:"center",}}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5610388120909625"
        data-ad-slot="9160054892"
      ></ins> */}
      {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
    </div>
  );
};

export default AdvCard;
