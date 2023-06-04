import React from "react";
import style from "./newsCard.module.css";
import testImg from "../../../assets/logo-black.jpg";
import { Link } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import { translate } from "../../../translation/translation";
import { useSelector } from "react-redux";

const NewsCard = ({ props }) => {
  const { id, title, image, date, heading, previewUrl } = props;
  const readableDate = getReadableTime(date);
  const currentLang = useSelector((state) => state.app.currentLang);
  const isMobile = false;

  return (
    <Link to={`article/${id}`} state={props}>
      <div className={style.cardContainer}>
        <div className={style.newsCard}>
          <div className={style.newsCardImgContainer}>
            <img
              className={style.newsCardImg}
              src={image || previewUrl || testImg}
              alt="newsImage"
            />
          </div>

          <div className={style.contentContainer}>
            <h3 className={style.newsCardTitle}>{title || "test title"}</h3>
            <hr className={style.line} />
            {!isMobile && <div className={style.heading}>{heading}</div>}
            <p className={style.date}>
              {translate("Published", currentLang)}:{" "}
              {readableDate.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
