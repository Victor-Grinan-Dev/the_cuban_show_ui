import React from 'react';
import { useSelector } from 'react-redux';
import style from '../modals.module.css';
const ErrorConfirm = () => {

    const error = useSelector(state => state.app.error);

  return (
    <div className={style.modalContentSize}>
        <p style={{color:"white", fontSize: "25px"}}>{error}</p>
    </div>
  )
}

export default ErrorConfirm;