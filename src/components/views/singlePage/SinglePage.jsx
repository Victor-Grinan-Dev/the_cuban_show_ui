import React from 'react';
import { useLocation } from 'react-router-dom';
import { getReadableTime } from '../../../functions/time';
import globalStyle from '../../../style/styleGeneral.module.css';
import defaultImage from '../../../assets/logo-black.jpg';
import style from './singlePage.module.css';

const SinglePage = () => {
  const location = useLocation();
  const {
    body,
    date,
    heading,
    image,
    tags,
    title,
  } =  location.state;
  const readableDate = getReadableTime(date);
  return (
    <div className={globalStyle.view}>
      <p>Published: {readableDate.toDateString()} </p>
      <img src={image ? image : defaultImage} alt="singleImgage" className={style.singleImage} />
      <h2>"{title}"</h2>
      <h3>{heading}</h3>
      <p>{body}</p>
      {
        tags && tags.map((t, i) =>(
          <span key={i}>{t}</span>
        ))
      }
    </div>

  )
}

export default SinglePage;