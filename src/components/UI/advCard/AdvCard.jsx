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
    </div>
  );
};

export default AdvCard;
