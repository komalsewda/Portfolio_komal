import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Hero />
        
        <About />
        <Education />
        <Dashboard />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;