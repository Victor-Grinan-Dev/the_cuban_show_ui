import React from 'react';
import style from './newsCard.module.css';
import testImg from '../../../assets/logo-black.jpg';



const NewsCard = ({title, image, body, date}) => {

  return (
    <div className={style.newsCard}>
        <img 
        className={style.newsCardImg}
        src={image || testImg} 
        alt="newsImage" 
        />

        <div>
            <h3 className={style.newsCardTitle}>
                {title || 'test title'}
            </h3>
            <p>{body}</p>
            <p>Published: {date || Date.now()}</p>
        </div>
        
        <button>See More</button>

    </div>
  )
}

export default NewsCard;