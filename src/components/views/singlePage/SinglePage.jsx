import React from "react";
import { useLocation } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "./singlePage.module.css";
import { createBreakLines } from "../../../functions/text";
import AppBtn from "../../UI/appBtn/AppBtn";
import { useSelector } from "react-redux";
import BackToMain from "../../UI/backToMain/BackToMain";

const capitalStart = {
  textTransform: "capitalize",
};

const SinglePage = () => {
  const location = useLocation();
  const { body, date, heading, image, tags, title } = location.state;
  const readableDate = getReadableTime(date);
  const auth = useSelector((state) => state.app.auth);

  return (
    <div className={globalStyle.view}>
      <BackToMain />
      <p>Published: {readableDate.toDateString()} </p>
      <img
        src={image ? image : defaultImage}
        alt="singleImgage"
        className={style.singleImage}
      />
      <h2 style={capitalStart} className={style.title}>
        "{title}"
      </h2>
      <h3 style={capitalStart} className={style.heading}>
        {heading}
      </h3>
      <span>
        {createBreakLines(body).map((parragraph, i) => (
          <p
            key={i}
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "90vw",
              textTransform: "capitalize",
            }}
          >
            {console.log("p", i, parragraph)}
            {parragraph}
            <br />
            <br />
          </p>
        ))}
      </span>
      <div className={style.singleTags}>
        {tags && tags.map((t, i) => <span key={i}>{t}, </span>)}
      </div>
      {auth && (
        <div className={style.adminTools}>
          <AppBtn caption={"ed"} type={"terceary"} />
          <AppBtn caption={"del"} type={"terceary"} />
        </div>
      )}
    </div>
  );
};

export default SinglePage;
