import React from 'react';
import style from './newsCard.module.css';
import testImg from '../../../assets/logo-black.jpg';
import { Link } from 'react-router-dom';

const NewsCard = ({props}) => { 
  const {id, title, data} = props;
  //date?
  return (
    <Link
      to={`articleId/${id}`} 
      state={{data:data}}
      >
      <div className={style.newsCard}>
          <img 
          className={style.newsCardImg}
          src={props?.image || testImg} 
          alt="newsImage" 
          />
          <div className={style.contentContainer}>
              <h3 className={style.newsCardTitle}>
                  {title || 'test title'}
              </h3>
              <hr className={style.line}/>
              {/* <p>{body}</p> */}
              <p className={style.date}>Published: {Date.now()}</p>
          </div>
      </div>
    </Link>
  )
}

export default NewsCard;