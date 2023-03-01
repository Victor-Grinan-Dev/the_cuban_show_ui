import React from 'react';
import style from './newsCard.module.css';
import testImg from '../../../assets/logo-black.jpg';

const NewsCard = ({props}) => { 
  const {title} = props;
  //date?
  return (
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
  )
}

export default NewsCard;