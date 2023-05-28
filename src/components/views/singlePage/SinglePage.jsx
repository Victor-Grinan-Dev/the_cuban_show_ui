import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "./singlePage.module.css";
import AppBtn from "../../UI/appBtn/AppBtn";
import { useSelector } from "react-redux";
import BackToMain from "../../UI/backToMain/BackToMain";
//import EditDeleteBtn from "../../UI/editDeleteBtn/EditDeleteBtn";
import { deleteContent } from "../../../services/firebaseService";

const capitalStart = {
  textTransform: "capitalize",
  width:"80%",
  margin:"10px 0"
};

const SinglePage = () => {
  const location = useLocation();
  const { id, body, date, heading, image, tags, title } = location.state;
  const readableDate = getReadableTime(date);
  const isAuth = useSelector((state) => state.app.isAuth);
 const navegate = useNavigate();
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
      <div className={style.singleBody} dangerouslySetInnerHTML={{__html: body}} />
      <div className={style.singleTags}>
        {tags && tags.map((t, i) => <span key={i}>{t}, </span>)}
      </div>
      {
        isAuth && <div style={{
        //TODO: make this a position fixed component
        backgroundColor:"grey",
        padding:"20px",
        borderRadius:"5px"
      }}>
        <AppBtn
          caption={"delete"}
          type={"secundary"}
          fx={() => {
            deleteContent(id);
            navegate("/");
          }}
        />
        <AppBtn
          caption={"edit"}
          type={"secundary"}
          fx={() => console.log("bye!")}
        />
      </div>}
      <BackToMain />
    </div>
  );
};

export default SinglePage;
