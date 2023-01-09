import React from 'react';
import { Route, Routes } from "react-router-dom";
import Aboutme from './Aboutme';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/about' element={<Aboutme />} />
            <Route path="/skills" element={<Skills />}/>
            <Route path='/projects' element={<Projects />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default AllRoute