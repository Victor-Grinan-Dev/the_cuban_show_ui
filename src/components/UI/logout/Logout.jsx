import React from "react";
import { getAuth, signOut } from "firebase/auth";
import AppBtn from "../appBtn/AppBtn";
import { translate } from "../../../translation/translation";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setShowSettings, setUser } from "../../../app/appSlice";
import { useNavigate } from "react-router";

const Logout = () => {
  const auth = getAuth();
  const currentLang = useSelector((state) => state.app.currentLang);
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(undefined));
        dispatch(setIsAuth(false));
        dispatch(setShowSettings(false));
        navegate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const btnStyle = {
    fontSize: "25px",
    marginBottom: "100px",
  };

  return (
    <AppBtn
      id={"logout"}
      name={"logout"}
      caption={translate("Logout", currentLang)}
      fx={handleLogout}
      type={"primary"}
      style={btnStyle}
    />
  );
};

export default Logout;
