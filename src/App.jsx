import { HashRouter , Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Homepage from './components/views/Homepage';
import NotFound from './components/NotFound';
import './style/app.css';

import Content from './components/views/contenido/Content';
import About from './components/views/about/About';
import Contact from './components/views/conctact/Contact';

function App() {
  return (
<HashRouter>
  <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='content' element={<Content />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        {/* FINALLY */}
        <Route path="*" element={<NotFound/>}/>
      </Route>       
  </Routes>
</HashRouter> 
  );
}

export default App;
