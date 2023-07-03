import React from 'react';

import wrong from '../../../assets/answer-wrong.png';
import right from '../../../assets/answer-right.png';
import warningRed from '../../../assets/warning_red.png';
import warningYellow from '../../../assets/warning_yellow.png';
import style from './signImage.module.css';

const SignImage = ({sign}) => {

    const signs = {
        wrong:wrong,
        right:right,
        warningRed:warningRed,
        warningYellow:warningYellow,
    }

  return (
    <div className={style.signImageContainer}>
        <img src={signs[sign]} alt="sign_image" className={style.signImage}/>
    </div>
   
  )
}

export default SignImage;