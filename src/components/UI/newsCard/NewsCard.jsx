import React from "react";
import style from "./newsCard.module.css";
import testImg from "../../../assets/logo-black.jpg";
import { Link } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import { translate } from "../../../translation/translation";
import { useSelector } from "react-redux";

const NewsCard = ({ props }) => {
  const { id, title, image, date, heading } = props;
  const readableDate = getReadableTime(date);
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <Link to={`article/${id}`} state={props}>
      <div className={style.newsCard}>
        <img
          className={style.newsCardImg}
          src={image || testImg}
          alt="newsImage"
        />
        <div className={style.contentContainer}>
          <h3 className={style.newsCardTitle}>{title || "test title"}</h3>
          <hr className={style.line} />
          <div className={style.heading}>{heading}</div>
          <p className={style.date}>
            {translate("Published", currentLang)}: {readableDate.toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
