import React from "react";
import style from "./banner.module.css";
import image from "../../../assets/logo-texture.jpg";

const Banner = ({img}) => {
  if(!img){
    return <img src={image} alt="banner" className={style.banner} />;
  }
  return <img src={img} alt="banner" className={style.banner} />;
};

export default Banner;
