import React, { useEffect, useState } from 'react';
import style from './tagBtn.module.css';

const TagBtn = ({fxPrimary, label}) => {
    const [isSelected, setIsSelected] = useState(false);

    const isSelectedHandle = () => {
        setIsSelected(!isSelected)
    };
  return (
    <span className={isSelected? style.selectedTagBtn : style.TagBtn} onClick={(e)=>
        {
            isSelectedHandle();
            fxPrimary(e);
        }}>
        {label}
    </span>
  )
}

export default TagBtn;