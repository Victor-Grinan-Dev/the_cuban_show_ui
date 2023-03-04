import React from 'react';
import { useLocation } from 'react-router-dom';
import globalStyle from '../../../style/styleGeneral.module.css';

import style from './singlePage.module.css';

const SinglePage = () => {
  const location = useLocation();
  const {
    body,
    date,
    heading,
    id,
    image,
    tags,
    title,
  } =  location.state;

  return (
    <div className={globalStyle.view}>
      <p>Article id: {id}</p>
      <p>Published: {date?.seconds || date} </p>
      <img src={image} alt="singleImgage" className={style.singleImage} />
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