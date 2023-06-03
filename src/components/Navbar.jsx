import React from "react";
import style from "./navbarStyle.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSettings } from "../app/appSlice";
import { translate } from "../translation/translation";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.app.isAuth);
  const showSettings = useSelector((state) => state.app.showSettings);
  const currentLang = useSelector((state) => state.app.currentLang);

  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
      <Link to="/">
        <div className={style.logo} />
      </Link>
        
        <div className={style.title}>
          <h1
            style={{
              textAlign: "center",
            }}
            >
           {/* <span className="orgTitle">"The Cuban Show"</span> <br/> */}
            {translate("Nothing but the truth", currentLang)}
          </h1>
        </div>
        <div
          className={showSettings ? style.menuOn : style.menu}
          onClick={() => dispatch(setShowSettings())}
        ></div>
      </div>
      <ul className={style.navigator}>
        <li>
          <Link to="/">{translate("Content", currentLang)}</Link>
        </li>
        <li>
          <Link to="about">{translate("About", currentLang)}</Link>
        </li>
        <li>
          <Link to="contact">{translate("Contact", currentLang)}</Link>
        </li>
        <li>
          {isAuth ? (
            <Link to="addContent">{translate("Add", currentLang)}</Link>
          ) : (
            <p className={style.deactivated}>{translate("Add", currentLang)}</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
