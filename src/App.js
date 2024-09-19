import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Skill from './pages/Skill'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Skill" element={<Skill />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
