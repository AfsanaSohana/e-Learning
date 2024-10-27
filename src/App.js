import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Skill from './pages/Skill';
import Form from './pages/Form';
import SscHsc from './pages/SscHsc';
import Slider from './pages/Slider';
import './pages/SscHsc/style.css';
import DemoClass1 from './pages/DemoClass1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlineBatch from './pages/OnlineBatch';
import ClassInfo from './pages/ClassInfo';
import PopularCourse from './pages/PopularCourse';
import SclClassInfo from './pages/ClassInfo/SclClassInfo';
import OfferCourseInfo from './pages/ClassInfo/OfferCourseInfo';
import Certificate from './pages/certificate';
import Instructor from './pages/Instructor';
import QuizTest from './pages/QuizTest';
import FormJoin from './pages/FormJoin';
import StudentForm from './pages/StudentForm';
import CourseInterface from './pages/CourseInterface';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Slider" element={<Slider />} />
         <Route path="/PopularCourse" element={<PopularCourse/>} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Instructor" element={<Instructor />} />
        <Route path="/SscHsc" element={<SscHsc />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DemoClass1" element={<DemoClass1 />} />
        <Route path="/OnlineBatch" element={<OnlineBatch />} />
        <Route path="/ClassInfo" element={<ClassInfo />} />
        <Route path="//SclClassInfo" element={<SclClassInfo />} />
        <Route path="" element={<SclClassInfo />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/OfferCourseInfo" element={<OfferCourseInfo />} />
        <Route path="/QuizTest" element={<QuizTest />} />
        <Route path="/FormJoin" element={<FormJoin />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/CourseInterface" element={<CourseInterface />} />
       
      </Routes>
    </BrowserRouter>
  );
}


export default App;
