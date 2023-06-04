import React from 'react';
import { useSelector } from 'react-redux';

const MessageConfirm = () => {
    const message = useSelector(state => state.app.message);
  return (
    <div>
        <p style={{color:"white", fontSize: "25px"}}>{message }</p>
    </div>
  )
}

export default MessageConfirm;