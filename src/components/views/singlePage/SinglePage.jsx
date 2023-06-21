import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "./singlePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import BackToMain from "../../UI/backToMain/BackToMain";
//import EditDeleteBtn from "../../UI/editDeleteBtn/EditDeleteBtn";

import AdvCard from "../../UI/advCard/AdvCard";

import {
  setAppMemo,
  setDeleteIdMemo,
} from "../../../app/appSlice";
import TagBtn from "../../UI/appBtn/TagBtn";
import { translate } from "../../../translation/translation";
const capitalStart = {
  textTransform: "capitalize",
  width: "80%",
  margin: "10px 0",
};

const SinglePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const appMemo = useSelector((state) => state.app.appMemo);
  const { id, body, date, heading, image, tags, title, author } = appMemo;

  const currentLang = useSelector((state) => state.app.currentLang);
  const readableDate = getReadableTime(date);
  const darkMode = useSelector(state => state.app.darkMode)

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
  return (
    <div className={globalStyle.view}>
      <AdvCard text={"advertisment"}/>
      <div className={style.single}>
        <div className={style.top}>
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
          {/* TODO: ERASE CONTENT BY SAVING THEM SOME WHERE ELSE */}
          {/* {isAuth && (
            Admin
            <div
              style={{
                //TODO: make this a position fixed component
                backgroundColor: "grey",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <AppBtn
                caption={"delete"}
                type={"secundary"}
                fx={() => dispatch(setShowConfirm(true))}
              />
              <AppBtn
                caption={"edit"}
                type={"secundary"}
                fx={() => console.log("bye!")}
              /> 
            </div>
          )} */}
          <AdvCard text={"advertisment"}/>
          <BackToMain />
          
        </div>
      </div>

    </div>
  );
};

export default SinglePage;
