// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-2">AstroConnect</p> {/* Company Name */}
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} AstroConnect. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
