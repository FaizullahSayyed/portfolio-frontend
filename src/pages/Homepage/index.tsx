import type React from 'react';

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import EngineeringApproach from '../../components/EngineeringApproach';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Homepage = (): React.JSX.Element => {
  return (
    <div className="homepage">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringApproach />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;