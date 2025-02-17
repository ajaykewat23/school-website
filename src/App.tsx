import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Academics } from './components/Academics/Academics';
import { Announcements } from './components/Announcements/Announcements';
import { Admissions } from './components/Admissions/Admissions';
import { Features } from './components/Features/Features';
import { Programs } from './components/Programs/Programs';
import { Gallery } from './components/Gallery/Gallery';
import { StudentsCorner } from './components/StudentsCorner/StudentsCorner';
import { Career } from './components/Career/Career';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Announcements />
      <About />
      <Academics />
      <Admissions />
      <Features />
      <Programs />
      <Gallery />
      <StudentsCorner />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;