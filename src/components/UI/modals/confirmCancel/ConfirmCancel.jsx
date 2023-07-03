import React from "react";
import genStyles from "../../../../style/styleGeneral.module.css";
import AppBtn from "../../appBtn/AppBtn";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setShowConfirm, setShowMessage } from "../../../../app/appSlice";
import { deleteContent } from "../../../../services/firebaseService";
import { useNavigate } from "react-router";
import SignImage from "../../signImage/SignImage";

const ConfirmCancel = () => {
    const dispatch = useDispatch();
    const navegate = useNavigate();
    const message = useSelector(state => state.app.message);
    const deleteIdMemo = useSelector(state => state.app.deleteIdMemo);

  return (
    <div className={genStyles.flexCenter}>
      <SignImage sign="warningRed" />
      <div>
        <AppBtn caption={"Confirm"} type="danger" fx={() => {
            deleteContent(deleteIdMemo);
            navegate("/");
            dispatch(setShowConfirm(false));
            dispatch(setMessage("Item " + deleteIdMemo + " deleted"));
            dispatch(setShowMessage(true));
          }}/>
        <AppBtn caption={"Cancel"} type="active" fx={()=>dispatch(setShowConfirm(false))}/>
      </div>
      <div>
          <p style={{color:"white"}}>{message}</p>
      </div>
    </div>
  );
};

export default ConfirmCancel;
