import React from "react";
import style from "../newsCard/newsCard.module.css";
import testImg from "../../../assets/logo-black.jpg";
import { Link } from "react-router-dom";
import { translate } from "../../../translation/translation";
import { useSelector } from "react-redux";
import TagBtn from "../appBtn/TagBtn";
import { selectedAppBtnMini } from "../appBtn/standardStyle";
const NewsCardPreview = () => {
  const content = useSelector((state) => state.app.content);
  const currentLang = useSelector((state) => state.app.currentLang);
  const date = Date();

  return (
    <Link to={"preview"} state={content}>
      <div className={style.cardContainer}>
        <div className={style.newsCard}>
          <div className={style.newsCardImgContainer}>
            <img
              className={style.newsCardImg}
              src={content.previewUrl || testImg}
              alt="newsImage"
            />
          </div>

          <div className={style.contentContainer}>
            <h3 className={style.newsCardTitle}>
              {content.title || "test title"}
            </h3>
            <hr className={style.line} />
            <div className={style.heading}>{content.heading}</div>
            <div className="date-author">
              <p className={style.date}>
                {translate("Published", currentLang)}:{date}
              </p>
              <p className={style.author}>
                Author:
                {content.author || "Not specified"}
              </p>
            </div>
            <div className="tags">
              {content.tags &&
                content.tags.map((tag, i) => (
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
      </div>
    </Link>
  );
};

export default NewsCardPreview;
