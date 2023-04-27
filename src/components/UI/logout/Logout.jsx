import React from "react";
import { getAuth, signOut } from "firebase/auth";
import AppBtn from "../appBtn/AppBtn";
import { translate } from "../../../translation/translation";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuth,
  setIsAuth,
  setShowSettings,
  setUser,
} from "../../../app/appSlice";
import { useNavigate } from "react-router";
import useCookies from "../../../hooks/useCookies";

const Logout = () => {
  const auth = getAuth();
  const currentLang = useSelector((state) => state.app.currentLang);
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const { removeCookie } = useCookies();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(undefined));
        dispatch(setIsAuth(false));
        dispatch(setAuth(null));
        dispatch(setShowSettings(false));
        removeCookie();
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
