import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { ProjectComp } from './components/ProjectsComp';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { render } from '@testing-library/react';
import NavBar from './components/NavBar';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div className="content">
            <Routes>
              <Route exact path="/" element={ <Home/> } />
              <Route exact path="/aboutme" element={ <AboutMe/>} />
              <Route exact path="/contact" element={ <Contact/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
