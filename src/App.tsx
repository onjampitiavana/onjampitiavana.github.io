import './App.css'
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './interface/components/Layout.js';
import Section from './interface/pages/Section';
import Virus from './interface/pages/Virus.js';
//import AnimatedBackground from './interface/components/AnimatedBackground.js';
function App() {
  return ( 
    <div className='bg-amber-50 min-h-screen relative overflow-hidden'>
      <StrictMode>
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Virus/>}></Route>
        <Route element={<Layout/>}>
        <Route path='/home' element={<Section/>}> </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </StrictMode>
    </div>
   );
}

export default App;