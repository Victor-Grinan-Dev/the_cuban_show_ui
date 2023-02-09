import React from 'react';
import style from './homepage.module.css';
import image from '../../assets/logo-texture.jpg';

import NewsCard from '../UI/newsCard/NewsCard';
import {contents} from '../../fakeDB';

const Homepage = () => {
  return (
    <div className={style.homepage}>
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