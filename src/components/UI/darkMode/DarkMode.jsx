import React, { useEffect } from 'react';
import modalStyle from "../modals/modals.module.css";
import { translate } from "../../../translation/translation";
import { useDispatch, useSelector } from 'react-redux';
import AppBtn from '../appBtn/AppBtn';
import { setDarkMode } from '../../../app/appSlice';
import style from '../langBox/langBox.module.css'

const DarkMode = () => {
    const dispatch = useDispatch();
    const currentLang = useSelector((state) => state.app.currentLang);
    const darkMode = useSelector((state) => state.app.darkMode);
    
    const selected = {
        backgroundColor: "green",
      };

     
      useEffect(() => {
        if(darkMode){
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "white";
        }else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        } 
      }, [darkMode]);

  return (
    <div className={style.langBox}>

      <p className={modalStyle.sectionName}>
        {translate("Dark Mode", currentLang)}:
      </p>
      <div>
        <AppBtn
          caption={darkMode ? "ON" : "OFF"}
          style={darkMode ? selected : null}
          fx={() => dispatch(setDarkMode())}
          type={"secondary"}
        />
      </div>
    </div>
  )
}

export default DarkMode;
