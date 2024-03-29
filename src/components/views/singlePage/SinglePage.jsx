import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "./singlePage.module.css";
import { useDispatch, useSelector } from "react-redux";
// import BackToMain from "../../UI/backToMain/BackToMain";
//import EditDeleteBtn from "../../UI/editDeleteBtn/EditDeleteBtn";

import AdvCard from "../../UI/advCard/AdvCard";

import {
  setAppMemo,
  setDeleteIdMemo,
  setShowConfirm,
} from "../../../app/appSlice";
import TagBtn from "../../UI/appBtn/TagBtn";
import { translate } from "../../../translation/translation";
import AppBtn from "../../UI/appBtn/AppBtn";
const capitalStart = {
  textTransform: "capitalize",
  width: "80%",
  margin: "10px 0",
};

const SinglePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const appMemo = useSelector((state) => state.app.appMemo);
  const { id, body, date, heading, image, tags, title, author } = appMemo;
  const isAuth = useSelector((state) => state.app.isAuth);
  const currentLang = useSelector((state) => state.app.currentLang);
  const readableDate = getReadableTime(date);
  const darkMode = useSelector((state) => state.app.darkMode);

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("tcs_memo", JSON.stringify(location.state));
      dispatch(setAppMemo(location.state));
    } else {
      dispatch(setAppMemo(JSON.parse(localStorage.getItem("tcs_memo"))));
    }
    // eslint-disable-next-line
  }, [appMemo]);

  useEffect(() => {
    dispatch(setDeleteIdMemo(id));

    // eslint-disable-next-line
  }, [appMemo]);
  const singleDarModeTags = {
    borderColor: "white",
    color: "white",
    margin: "0 5px",
  };

  useEffect(() => {
    window.scrollTo((0, 0), 200);
    // eslint-disable-next-line
  }, [appMemo]);

  return (
    <div className={globalStyle.view}>
      <div className={darkMode ? style.newsPageDark : style.newsPage}>
        <AdvCard text={"advertisment"} />
        <AppBtn
          caption={"<<< Back to Content"}
          type="primary"
          fx={() => navigate(-1)}
        />
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
        <div className={style.tags}>
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
        {isAuth && (
          <div
            style={{
              backgroundColor: "grey",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <AppBtn
              caption={translate("Delete", currentLang)}
              type={"danger"}
              fx={() => dispatch(setShowConfirm(true))}
            />
            {/* <AppBtn
                caption={"edit"}
                type={"secundary"}
                fx={() => console.log("bye!")}
            />  */}
          </div>
        )}
        <AdvCard text={"advertisment"} />
        <AppBtn
          caption={"<<< Back to Content"}
          type="primary"
          fx={() => navigate(-1)}
        />

        {/* 
          <BackToMain />
        <div className={style.top}>
          <div className="bottom"></div>
          {/* TODO: ERASE CONTENT BY SAVING THEM SOME WHERE ELSE 

        </div>
         */}
      </div>
    </div>
  );
};

export default SinglePage;
