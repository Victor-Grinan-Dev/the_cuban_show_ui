import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
//import Homepage from './components/views/Homepage';
import NotFound from "./components/views/notFound404/NotFound";
import "./style/app.css";

import Content from "./components/views/contenido/Content";
import About from "./components/views/about/About";
import Contact from "./components/views/conctact/Contact";

import AddContent from "./components/views/addContent/AddContent";
import SinglePage from "./components/views/singlePage/SinglePage";
import Modal1 from "./components/UI/modals/Modal1";
import MoreTags from'./components/UI/moreTags/MoreTags';
import { useDispatch, useSelector } from "react-redux";

import SettingView from "./components/UI/modals/settingView/SettingView";
import { useEffect } from "react";
import useCookies from "./hooks/useCookies";
import { setAllTags, setContents, setCurrentLang, setDarkMode, setError, setIsAuth, setIsLoading, setMessage, setShowConfirm, setShowError, setShowMessage, setShowMoreTags, setShowSettings } from "./app/appSlice";
import Cookies from "js-cookie";
import ConfirmCancel from "./components/UI/modals/confirmCancel/ConfirmCancel";
import MessageConfirm from "./components/UI/modals/messageConfirm/MessageConfirm";
import ErrorConfirm from "./components/UI/modals/errorCopnfirm/ErrorConfirm";
import TermsAndConditions from "./components/views/termsAndConditions/TermsAndConditions";
import InstallApp from "./components/views/installApp/InstallApp";
import { getAllTags, getContents } from "./services/firebaseService";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.app.isAuth);
  const showSettings = useSelector((state) => state.app.showSettings);
  const showConfirm = useSelector((state) => state.app.showConfirm);
  const showMoreTags = useSelector((state) => state.app.showMoreTags);
  const showMessage = useSelector((state) => state.app.showMessage);
  const showError = useSelector((state) => state.app.showError);

  const { cookieValue } = useCookies();

  useEffect(() => {
    if (cookieValue) {
      if (
        toString(cookieValue) ===
        toString(process.env.REACT_APP_FIREBASE_CONTENT_KEY)
      ) {
        dispatch(setIsAuth(true));
      } else {
        //security risk
        Cookies.remove("tcs");
        dispatch(setIsAuth(false));
        /* todo create user data and auth data? 
        - populate in the local storage with preferences (language, dark mode)*/
      }
    }
  }, [cookieValue, dispatch]);

  useEffect(() => {
   const pref = JSON.parse( localStorage.getItem('tcs-pref'));
   console.log(pref)
   if(pref){
    dispatch(setCurrentLang(pref.currentLang));
    dispatch(setDarkMode(pref.darkMode));
   }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setIsLoading(true));
    getContents()
      .then((data) => dispatch(setContents(data)))
    getAllTags()
      .then((data) => dispatch(setAllTags(data)))
      .then(dispatch(setIsLoading(false)));
    // eslint-disable-next-line
  }, []);

  const protectedRoutes = () => {
    if (isAuth) {
      return <Route path="addcontent" element={<AddContent />} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="about" element={<About />} />
          <Route path="about/:termsandconditions" element={<TermsAndConditions />} />
          <Route path="about/:installapp" element={<InstallApp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:single" element={<SinglePage />} />

          {protectedRoutes()}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showSettings && (
        <Modal1
          component={<SettingView />}
          closeFx={() =>{ 
            dispatch(setShowSettings());
          }}
          message={"settings"}
        />
      )}
      {showConfirm && (
        <Modal1
          component={<ConfirmCancel />}
          closeFx={() =>{ 
            dispatch(setShowConfirm(false));
          }}
          message={"Are you sure?"}
        />
      )}
      {showMoreTags && (
        <Modal1
          component={<MoreTags />}
          closeFx={() =>{ 
            dispatch(setShowMoreTags(false));
          }}
        />
      )}
      {showMessage && (
        <Modal1
          component={<MessageConfirm />}
          closeFx={() =>{ 
            dispatch(setShowMessage(false));         
            dispatch(setMessage(""));         
          }}
          message={"Success!"}
        />
      )}
      {showError && (
        <Modal1
          component={<ErrorConfirm />}
          closeFx={() =>{ 
            dispatch(setShowError(false));         
            dispatch(setError(""));         
          }}
          message={"ERROR!!"}
        />
      )}

    </BrowserRouter>
  );
}

export default App;
