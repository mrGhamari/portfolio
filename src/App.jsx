import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <Skills />
        <Projects />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
