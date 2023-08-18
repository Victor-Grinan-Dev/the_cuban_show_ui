import React from "react";
import style from "../about/styleAbout.module.css";
import chromeTcs from "../../../assets/install-app/chorme_tcs_page.jpg";
import zoom from "../../../assets/install-app/chrome_tcs_zoom.jpg";
import settings from "../../../assets/install-app/chrome_tcs_settings.jpg";
import modal from "../../../assets/install-app/chrome-confirm-modal.jpg";
import toHomeSc from "../../../assets/install-app/phone-installed-app.jpg";
import complete from "../../../assets/install-app/phone-added-to-home-app.jpg";
import { translate } from "../../../translation/translation";
import { useSelector, useDispatch } from "react-redux";
import genStyle from "../../../style/styleGeneral.module.css";
import AppBtn from "../../UI/appBtn/AppBtn";
import { setIsClipboard } from "../../../app/appSlice.js";

const InstallApp = () => {
  const currentLang = useSelector((state) => state.app.currentLang);
  const darkMode = useSelector((state) => state.app.darkMode);
  const copied = useSelector((state) => state.app.isClipboard);
  const dispatch = useDispatch();

  const clipboard = () => {
    console.log("hello");
    navigator.clipboard.writeText("https://thecubanshow.com/");
    dispatch(setIsClipboard());
  };

  return (
    <div className={genStyle.view}>
      <div className={!darkMode ? genStyle.textPage : genStyle.textPageDark}>
        <h4 className={style.installingTitle}>
          {translate("Installing the App in your mobile", currentLang)}
        </h4>
        <ol className={style.list}>
          <li>
            1.
            {translate(
              "Open the link of this app in your mobilephone with Google Chrome",
              currentLang
            )}
            .
            <p>
              https://thecubanshow.com/
              <AppBtn
                caption={
                  copied
                    ? translate("Copied", currentLang)
                    : translate("Copy URL", currentLang)
                }
                fx={() => clipboard()}
                type={copied ? "active" : "execute"}
              />
            </p>
            ...Or just click
            <a href="https://thecubanshow.com/" style={{ color: "blue" }}>
              {translate(" here", currentLang)}
            </a>
          </li>
          <a href={chromeTcs} target="_blank" rel="noreferrer">
            <img
              src={chromeTcs}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            2.
            {translate(
              "Click the settings in the right upper corner of the Chrome browser",
              currentLang
            )}
            .
          </li>
          <a href={zoom} target="_blank" rel="noreferrer">
            <img
              src={zoom}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            3.
            {translate(
              'Select "install App". Notice that sometimes appears as "Add to home screen"',
              currentLang
            )}
            .
          </li>
          <a href={settings} target="_blank" rel="noreferrer">
            <img
              src={settings}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            4.
            {translate(
              "Install or accept the suggested name in the popup modal",
              currentLang
            )}
            .
          </li>
          <a href={modal} target="_blank" rel="noreferrer">
            <img
              src={modal}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>
            5.
            {translate(
              "(Optional) Add the app to the mobile home screen",
              currentLang
            )}
            .
          </li>
          <a href={toHomeSc} target="_blank" rel="noreferrer">
            <img
              src={toHomeSc}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
          <li>6.{translate("Enjoy the App from your mobile!", currentLang)}</li>
          <a href={complete} target="_blank" rel="noreferrer">
            <img
              src={complete}
              alt="chrome settings"
              className={style.installImg}
            />
          </a>
        </ol>
      </div>
    </div>
  );
};

export default InstallApp;
