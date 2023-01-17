import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { ProjectComp } from './components/ProjectsComp';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import React from 'react';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>    
    </>
  );
}

export default App;