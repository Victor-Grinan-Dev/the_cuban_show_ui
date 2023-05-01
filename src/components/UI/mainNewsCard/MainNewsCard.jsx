import React from "react";
import style from "../newsCard/newsCard.module.css";
import testImg from "../../../assets/logo-black.jpg";
import { getReadableTime } from "../../../functions/time";
import { translate } from "../../../translation/translation";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MainNewsCard = ({ props }) => {
  const { id, title, image, date, heading } = props;
  const readableDate = getReadableTime(date);
  const isMobile = false;
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <Link to={`article/${id}`} state={props}>
      <div className={style.mainNewsCardContainer}>
        <div className={style.mainNews}>
          <div className={style.mainNewsContent}>
            <img
              className={style.mainNewsCardImg}
              src={image || testImg}
              alt="newsImage"
            />
            <div className={style.contentContainer}>
              <h3 className={style.mainNewsCardTitle}>
                {title || "test title"}
              </h3>
              <hr className={style.line} />
              {!isMobile && <div className={style.heading}>{heading}</div>}
              <p className={style.date}>
                {translate("Published", currentLang)}:{" "}
                {readableDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainNewsCard;
