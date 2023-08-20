import React from "react";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "../singlePage/singlePage.module.css";
import { useSelector } from "react-redux";
import TagBtn from "../../UI/appBtn/TagBtn";
import { translate } from "../../../translation/translation";
import { useNavigate } from "react-router-dom";
import AppBtn from "../../UI/appBtn/AppBtn";

const capitalStart = {
  textTransform: "capitalize",
  width: "80%",
  margin: "10px 0",
};

const singleDarModeTags = {
  borderColor: "white",
  color: "white",
  margin: "0 5px",
};

const Preview = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const darkMode = useSelector((state) => state.app.darkMode);
  const content = useSelector((state) => state.app.content);
  const { body, date, heading, previewUrl, tags, title, author } = content;
  const readableDate = getReadableTime(date);
  const navigate = useNavigate();
  return (
    <div className={globalStyle.view}>
      <div className={style.single}>
        <div className={style.top}>
          {/* TODO: back to create page */}
          <AppBtn
            caption={"<<< Back to add content"}
            type={"primary"}
            fx={() => navigate(-1)}
          />
          <p>Published: {readableDate.toDateString()} </p>
          <img
            src={previewUrl ? previewUrl : defaultImage}
            alt="singleImgage"
            className={style.singleImage}
          />
          <h2 style={capitalStart} className={style.title}>
            "{title}"
          </h2>
          <h3 style={capitalStart} className={style.heading}>
            {heading}
          </h3>
          <div
            className={style.singleBody}
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="author">
            <p className={style.author}>
              {translate("Author", currentLang)}:{" "}
              {author ? author : translate("Not specified", currentLang)}.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="tags">
            {tags &&
              tags.map((tag, i) => (
                <TagBtn
                  key={i}
                  id={i}
                  type={"terceary"}
                  label={translate(`${tag}`, currentLang)}
                  style={darkMode && singleDarModeTags}
                />
              ))}
          </div>
          {/* TODO: back to create page */}
          <AppBtn
            caption={"<<< Back to add content"}
            type={"primary"}
            fx={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
