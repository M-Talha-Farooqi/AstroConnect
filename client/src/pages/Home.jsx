// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col overflow-hidden"> {/* Added overflow-hidden */}
      <HeroSection />
    </div>
  );
}

export default Home;
