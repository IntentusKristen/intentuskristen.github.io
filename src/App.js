import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { ProjectComp } from './components/ProjectsComp';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
      </Routes>
          
    </>
  );
}

export default App;
