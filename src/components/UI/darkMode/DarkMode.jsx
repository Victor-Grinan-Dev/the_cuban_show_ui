import React, { useEffect } from 'react';
import { setDarkMode } from '../../../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import AppBtn from "../appBtn/AppBtn";
import modalStyle from "../modals/modals.module.css";
import style from './darkMode.module.css';
import { translate } from '../../../translation/translation';

const DarkMode = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.app.darkMode);
    const currenLang = useSelector(state => state.app.currentLang);

    useEffect(() => {
        if(darkMode){
            document.documentElement.style.backgroundColor = '#252530';
            document.documentElement.style.color = 'white';
        }else{
            document.documentElement.style.backgroundColor = 'white';
            document.documentElement.style.color = '#252525';
        }
    }, [darkMode]);

  return (
    <div className={style.darkMode}>
        <p className={modalStyle.sectionName}>{translate("Dark mode", currenLang)}</p> 
        <AppBtn caption={darkMode ? translate("On", currenLang) : translate("Off", currenLang) } type={darkMode ? "active" : "secondary"} fx={()=>{dispatch(setDarkMode())}}/>
    </div>
  )
}

export default DarkMode;