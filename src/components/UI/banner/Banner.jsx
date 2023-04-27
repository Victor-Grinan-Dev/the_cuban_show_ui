import React from "react";
import style from "./banner.module.css";
import image from "../../../assets/logo-texture.jpg";
const Banner = () => {
  return <img src={image} alt="banner" className={style.banner} />;
};

export default Banner;
