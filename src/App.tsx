import Header from './interface/components/Header.js';
import './App.css'
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './interface/components/Layout.js';
import Home from './interface/pages/Home.js';
function App() {
  return ( 
    <StrictMode>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}> </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </StrictMode>
   );
}

export default App;