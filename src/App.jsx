import { HashRouter , Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
//import Homepage from './components/views/Homepage';
import NotFound from './components/NotFound';
import './style/app.css';

import Content from './components/views/contenido/Content';
import About from './components/views/about/About';
import Contact from './components/views/conctact/Contact';

import AddContent from './components/views/addContent/AddContent';
import SinglePage from './components/views/singlePage/SinglePage';

function App() {

  return (
<HashRouter>
  <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Content/>}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>

        <Route path='addcontent' element={<AddContent />}/>
        <Route path="article/:single" element={<SinglePage />} />

        {/* FINALLY */}
        <Route path="*" element={<NotFound/>}/>
      </Route>       
  </Routes>
</HashRouter> 
  );
}

export default App;
