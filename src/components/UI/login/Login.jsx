import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setShowSettings, setUser } from "../../../app/appSlice";
import style from "./login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import modalStyle from "../modals/modals.module.css";
import { translate } from "../../../translation/translation";
const Login = () => {
  const [error, setError] = useState("");
  const [submitform, setSubmitform] = useState({});
  const currentLang = useSelector((state) => state.app.currentLang);

  const auth = getAuth();

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSubmitform({ ...submitform, [name]: value });
    setError("");
  };

  const clearInputs = () => {
    /** todo */
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = submitform;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
        dispatch(setIsAuth(true));
        dispatch(setShowSettings(false));
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(errorCode, errorMessage);
      })
      .finally(() => {
        clearInputs();
      });
  };

  return (
    <div className="view">
      <p className={modalStyle.sectionName}>
        {translate("Admin", currentLang)}:
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={translate("Email", currentLang)}
          className={style.email}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder={translate("Password", currentLang)}
          className={style.password}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="submit"
          name="submit"
          id="submit"
          value={translate("Submit", currentLang)}
          className={style.submit}
        />
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
};

export default Login;
