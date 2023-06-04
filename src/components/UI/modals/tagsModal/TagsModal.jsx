import React from 'react';
import MoreTags from "../moreTags/MoreTags";
import style from "./settingsView.module.css";

const TagsModal = () => {
    return (
        <div className={style.settingView}>
          <MoreTags />
        
        </div>
      );
}

export default TagsModal;