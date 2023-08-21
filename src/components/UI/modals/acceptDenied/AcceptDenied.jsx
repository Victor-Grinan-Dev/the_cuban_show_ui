import React from "react";
import genStyles from "../../../../style/styleGeneral.module.css";
import AppBtn from "../../appBtn/AppBtn";
import { useDispatch, useSelector } from "react-redux";
import terminos_y_condiciones from "../../../../documents/términos_y_condiciones.pdf";
import terms_and_conditions from "../../../../documents/terms_and_conditions.pdf";
import { translate } from "../../../../translation/translation";
import { setIsAccept } from "../../../../app/appSlice";
import LangBox from "../../langBox/LangBox";
import DarkMode from "../../darkMode/DarkMode";

const AcceptDenied = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.app.currentLang);
  const darkMode = useSelector((state) => state.app.darkMode);
  const document =
    currentLang === "es" ? terminos_y_condiciones : terms_and_conditions;

  return (
    <div
      className={genStyles.flexCenter}
      style={{ padding: "20px", color: "white" }}
    >
      <p>{translate("To", currentLang)} "The Cuban Show" web app.</p>
      <p>
        {translate(
          "We do not use cookies, nor collect any data from our users",
          currentLang
        )}
        .
      </p>
      <p>
        {translate(
          "By clicking the Accept button you are accepting our",
          currentLang
        )}{" "}
        <a href={document} target="blank" style={{ color: "lightblue" }}>
          {translate("Terms & Conditions", currentLang)},
        </a>
      </p>
      <br />
      <br /> <LangBox />
      <br />
      <br />
      <AppBtn
        caption="Accept"
        type="primary"
        fx={() => {
          localStorage.setItem(
            "tcs-pref",
            JSON.stringify({
              currentLang: currentLang,
              darkMode: darkMode,
              isAccepted: true,
            })
          );
          dispatch(setIsAccept());
        }}
      />
    </div>
  );
};

export default AcceptDenied;
