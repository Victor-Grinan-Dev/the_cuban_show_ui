import React from "react";
import IconBtn from "../iconBtn/IconBtn";
import style from "./editDelete.module.css";
import { useSelector } from "react-redux";

const hide = {display:"none"};

const EditDeleteBtn = () => {
    const isAuth = useSelector(state => state.app.isAuth);
  return (
    <div className={style.editDelete} style={isAuth ? null : hide }>
      <IconBtn iconName="edit" />
      <IconBtn iconName="delete" />
    </div>
  );
};

export default EditDeleteBtn;
