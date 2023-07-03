import React from 'react';
import { useSelector } from 'react-redux';
import SignImage from '../../signImage/SignImage';
import style from '../modals.module.css';
const MessageConfirm = () => {
    const message = useSelector(state => state.app.message);
  return (
    <div className={style.modalContentSize}>
        <SignImage sign="right" />
        <p style={{color:"white", fontSize: "25px"}}>{message }</p>
    </div>
  )
}

export default MessageConfirm;