import React from 'react';
import Navbar from './container/Navbar';
import Home from './container/Home/Home';
import Projects from './container/Projects/Projects';
import About from './container/About/About';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Particles from './components/Particles';
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <div id='App'>
        <Particles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;