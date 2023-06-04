import React from 'react';
import { useSelector } from 'react-redux';

const ErrorConfirm = () => {

    const error = useSelector(state => state.app.error);

  return (
    <div>
        <p style={{color:"white", fontSize: "25px"}}>{error}</p>
    </div>
  )
}

export default ErrorConfirm;