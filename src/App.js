import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Skill from './pages/Skill';
import Form from './pages/Form';
import SscHsc from './pages/SscHsc';
import './pages/SscHsc/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './layouts/include/slider';



function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/SscHsc" element={<SscHsc />} />
        <Route path="/Form" element={<Form />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
