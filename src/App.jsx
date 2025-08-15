import React, { lazy, Suspense } from 'react';
import './styles/global.css';
import './App.css';

const Hero = lazy(() => import('./components/sections/Hero'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

const Loading = () => (
  <div className="loading">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <div className="app">
      <main>
        <Suspense fallback={<Loading />}>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
