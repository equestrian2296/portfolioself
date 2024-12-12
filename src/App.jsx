import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/about';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Certificates from './components/certificates';

export const App = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Certificates />
      </div>
    </div>
  );
};

export default App;
