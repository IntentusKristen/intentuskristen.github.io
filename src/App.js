import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import NavBar from './components/NavBar';
import React from 'react';
import Experience from './pages/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          </Routes>
      <Footer/>
    </>
  );
}

export default App;