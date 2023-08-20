import React from "react";
import genStyle from "../newsCard/newsCard.module.css";
import style from "./mainNews.module.css";
import testImg from "../../../assets/logo-black.jpg";
import { getReadableTime } from "../../../functions/time";
import { translate } from "../../../translation/translation";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TagBtn from "../appBtn/TagBtn";
import { selectedAppBtnMini } from "../appBtn/standardStyle";
const MainNewsCard = (props) => {
  const { id, title, image, date, heading, tags, author } = props;
  const readableDate = getReadableTime(date);
  const isMobile = false;
  const currentLang = useSelector((state) => state.app.currentLang);
  return (
    <Link to={`article/${id}`} state={props}>
      <div className={style.mainNewsCardContainer}>
        <div className={style.mainNews}>
          <div className={style.mainNewsContent}>
            <div className={style.maincontentContainer}>
              <h3 className={style.mainNewsCardTitle}>
                {title || "test title"}
              </h3>
              <hr className={genStyle.line} />
              {!isMobile && <div className={genStyle.heading}>{heading}</div>}
              <div className="date-author">
                <p className={style.date}>
                  {translate("Published", currentLang)}:
                  {readableDate.toDateString()}
                </p>
              </div>
            </div>
            <img
              className={style.mainNewsCardImg}
              src={image || testImg}
              alt="newsImage"
            />
          </div>
          <div className="tags">
            <p className={style.date}>
              {translate("Author", currentLang)}:{" "}
              {author ? author : translate("Not specified", currentLang)}
            </p>
            {tags &&
              tags.map((tag, i) => (
                <TagBtn
                  id={i}
                  key={i}
                  type={"display"}
                  style={selectedAppBtnMini}
                  label={translate(`${tag}`, currentLang)}
                />
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainNewsCard;
