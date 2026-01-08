import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Philosophy } from './components/Philosophy';
import { Lifestyle } from './components/Lifestyle';
import { CuratorNote } from './components/CuratorNote';
import { Geographies } from './components/Geographies';
import { AcquisitionPath } from './components/AcquisitionPath';
import { Inquiry } from './components/Inquiry';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 selection:bg-stone-200 selection:text-stone-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <FeaturedCollection />
        <Lifestyle />
        <CuratorNote />
        <Geographies />
        <AcquisitionPath />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;
