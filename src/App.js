import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Skill from './pages/Skill';
import Form from './pages/Form';
import SscHsc from './pages/SscHsc';
import Slider from './pages/Slider';
import './pages/SscHsc/style.css';
import DemoClass1 from './pages/DemoClass1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IctOnlineBatch from './pages/IctOnlineBatch';
import ClassInfo from './pages/ClassInfo';
import PopularCourse from './pages/PopularCourse';
import SclClassInfo from './pages/ClassInfo/SclClassInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Slider" element={<Slider />} />
         <Route path="/PopularCourse" element={<PopularCourse/>} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/SscHsc" element={<SscHsc />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DemoClass1" element={<DemoClass1 />} />
        <Route path="/IctOnlineBatch" element={<IctOnlineBatch />} />
        <Route path="/ClassInfo" element={<ClassInfo />} />
        <Route path="//SclClassInfo" element={<SclClassInfo />} />
    

      </Routes>
    </BrowserRouter>
  );
}


export default App;
