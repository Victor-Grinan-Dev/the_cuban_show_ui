import React from 'react';
import style from './homepage.module.css';
import image from '../../assets/logo-texture.jpg';

import NewsCard from '../UI/newsCard/NewsCard';
import {contents} from '../../fakeDB';

const Homepage = () => {
  return (
    <div className={style.homepage}>
      <img src={image} alt="banner" className={style.bannerImg}/>

      <NewsCard props={contents[0]}/>
    </div>
  )
}

export default Homepage;