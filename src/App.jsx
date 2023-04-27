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

import { useDispatch, useSelector } from "react-redux";

import SettingView from "./components/UI/settingView/SettingView";
import ConfirmModal from "./components/UI/modals/ConfirmModal";
import { useEffect } from "react";
import useCookies from "./hooks/useCookies";
import { setIsAuth } from "./app/appSlice";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.app.isAuth);
  const showSettings = useSelector((state) => state.app.showSettings);
  const showConfirm = useSelector((state) => state.app.showConfirm);
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
          <Route path="contact" element={<Contact />} />
          <Route path="article/:single" element={<SinglePage />} />
          {protectedRoutes()}
        </Route>
        {/* FINALLY */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showSettings && <Modal1 component={<SettingView />} />}
      {showConfirm && <ConfirmModal message={"Hello"} />}
      {/**NOT WORKING SMALL MODAL */}
    </BrowserRouter>
  );
}

export default App;
