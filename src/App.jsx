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

import { useSelector } from "react-redux";

import SettingView from "./components/UI/settingView/SettingView";

function App() {
  const isAuth = useSelector((state) => state.app.isAuth);
  const showSettings = useSelector((state) => state.app.showSettings);

  /**Todo
   * read isAuth from cookies.
   */

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
    </BrowserRouter>
  );
}

export default App;
