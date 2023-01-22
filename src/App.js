import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import NavBar from './components/NavBar';
import React from 'react';
import Experience from './pages/Experience';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/experience" element={<Experience/>}/>
      </Routes>    
    </>
  );
}

export default App;