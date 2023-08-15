import './App.css';
import LandingPage from './Components/LandingPage';
import Layout from './Components/Layout/Layout';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import NotFound from './Components/NotFound';
import Result from './Components/Layout/ResultLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/layout" element={<Layout/>} />
        
        <Route path="/result" element={<Result/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Toaster />
      
    </BrowserRouter>
  );
}

export default App;
