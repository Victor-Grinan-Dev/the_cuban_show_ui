import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SinglePage = () => {
  const location = useLocation();
  const data =  location.data;

  useEffect(()=>{
    console.log(data)
  },[])

  return (
    <div>
      SinglePage
    </div>
  )
}

export default SinglePage;