import React from 'react';
import style from "../about/styleAbout.module.css";
import chromeTcs from "../../../assets/install-app/chorme_tcs_page.jpg";
import zoom from "../../../assets/install-app/chrome_tcs_zoom.jpg";
import settings from "../../../assets/install-app/chrome_tcs_settings.jpg";
import modal from "../../../assets/install-app/chrome-confirm-modal.jpg"
import toHomeSc from "../../../assets/install-app/phone-installed-app.jpg"
import complete from "../../../assets/install-app/phone-added-to-home-app.jpg"

const InstallApp = () => {
  return (
    <div>      <h4 className={style.installingTitle}>Installing the App in your mobile</h4>

    <ol className={style.list}>
      <li>
        1. Open the link of this app in your mobilephone with Google Chrome.
      </li>
      <a href={chromeTcs} target="_blank" rel="noreferrer">
        <img
          src={chromeTcs}
          alt="chrome settings"
          className={style.installImg}
        />
      </a>
      <li>
        2. Click the settings in the right upper corner of the Chrome browser
      </li>
      <a href={zoom} target="_blank" rel="noreferrer">
        <img src={zoom} alt="chrome settings" className={style.installImg} />
      </a>
      <li>
        3. Select "install App". Notice that sometimes appears as "Add to home screen"</li>
      <a href={settings} target="_blank" rel="noreferrer">
        <img
          src={settings}
          alt="chrome settings"
          className={style.installImg}
        />
      </a>
      <li>4. Install or accept the suggested name in the popup modal</li>
      <a href={modal} target="_blank" rel="noreferrer">
        <img
          src={modal}
          alt="chrome settings"
          className={style.installImg}
        />
      </a>
      <li>5. (Optional) Add the app to the mobile home screen </li>
      <a href={toHomeSc} target="_blank" rel="noreferrer">
        <img
          src={toHomeSc}
          alt="chrome settings"
          className={style.installImg}
        />
      </a>
      <li>Enjoy the App from your mobile!</li>
      <a href={complete} target="_blank" rel="noreferrer">
        <img
          src={complete}
          alt="chrome settings"
          className={style.installImg}
        />
      </a>
    </ol></div>
  )
}

export default InstallApp