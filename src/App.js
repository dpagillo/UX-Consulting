import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="space-y-12 px-6 py-8 max-w-3xl mx-auto">
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}

export default App;