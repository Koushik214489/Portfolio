import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Custom cursor logic
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const cursorFollower = document.getElementById('cursor-follower');

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div className="gradient-bg"></div>

      <div id="custom-cursor"></div>
      <div id="cursor-follower"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
