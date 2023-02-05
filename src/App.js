import { HashRouter , Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Homepage from './components/views/Homepage';
import NotFound from './components/NotFound';
import './style/app.css';

function App() {
  return (
<HashRouter>
  <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        {/* FINALLY */}
        <Route path="*" element={<NotFound/>}/>
      </Route>       
  </Routes>
</HashRouter> 
  );
}

export default App;
