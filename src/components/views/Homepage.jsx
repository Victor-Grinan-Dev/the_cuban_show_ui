import React from 'react';
import style from './homepage.module.css';
import image from '../../assets/logo-texture.jpg';
import genStyle from '../../style/styleGeneral.module.css';
const Homepage = () => {
  return (
    <div className={genStyle.view}>
      <div className={style.bannerContainer}>
        <img src={image} alt="banner" className={style.bannerImg}/>
      </div>
      

      {/* <NewsCard props={contents[0]}/>
      <NewsCard props={contents[1]}/>
      <NewsCard props={contents[2]}/> */}
    </div>
  )
}

export default Homepage;