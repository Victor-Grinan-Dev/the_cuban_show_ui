import React from 'react';
import style from './newsCard.module.css';
import testImg from '../../../assets/logo-black.jpg';
import { Link } from 'react-router-dom';

const NewsCard = ({props}) => { 
  const {id, title, image, date} = props;
  //const published = date.seconds;
  //date?
  return (
    <Link
      to={`article/${id}`} 
      state={props}
      >
      <div className={style.newsCard}>
          <img 
          className={style.newsCardImg}
          src={image || testImg} 
          alt="newsImage" 
          />
          <div className={style.contentContainer}>
              <h3 className={style.newsCardTitle}>
                  {title || 'test title'}
              </h3>
              <hr className={style.line}/>
              <p className={style.date}>Published: {date?.seconds ? date.seconds : date}</p>
          </div>
      </div>
    </Link>
  )
}

export default NewsCard;