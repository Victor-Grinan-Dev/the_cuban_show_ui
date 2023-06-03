import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getReadableTime } from "../../../functions/time";
import globalStyle from "../../../style/styleGeneral.module.css";
import defaultImage from "../../../assets/logo-black.jpg";
import style from "./singlePage.module.css";
import AppBtn from "../../UI/appBtn/AppBtn";
import { useDispatch, useSelector } from "react-redux";
import BackToMain from "../../UI/backToMain/BackToMain";
//import EditDeleteBtn from "../../UI/editDeleteBtn/EditDeleteBtn";
import { deleteContent } from "../../../services/firebaseService";
import { setAppMemo } from "../../../app/appSlice";
const capitalStart = {
  textTransform: "capitalize",
  width:"80%",
  margin:"10px 0"
};

const SinglePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const appMemo =  useSelector(state => state.app.appMemo);
  const { id, body, date, heading, image, tags, title } = appMemo;


  const readableDate = getReadableTime(date);
  const isAuth = useSelector((state) => state.app.isAuth);
 const navegate = useNavigate();

  useEffect(() => {
    if(location.state){
      localStorage.setItem("tcs_memo", JSON.stringify(location.state));
      dispatch(setAppMemo(location.state))
    }else{
      dispatch(setAppMemo( JSON.parse(localStorage.getItem("tcs_memo"))));
    }
    // eslint-disable-next-line
  }, [appMemo]);

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
        {tags && appMemo.tags.map((t, i) => <span key={i}>{t}, </span>)}
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
