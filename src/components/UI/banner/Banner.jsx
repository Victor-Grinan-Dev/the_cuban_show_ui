import React from 'react';
import style from './banner.module.css';
import image from '../../../assets/banner.jpg'
const Banner = () => {
  return (
    <img src={image} alt="banner" className={style.banner}/>
  )
}

export default Banner;