import React from 'react';
// Import your logo here: import logo from '../assets/sharda_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#050714] text-gray-400 py-16 px-10 text-center">
      <div className="flex justify-center mb-8">
        {/* Placeholder for the University Logo */}
        <div className="h-16 w-64 bg-white rounded flex items-center justify-center font-bold text-blue-900">
          SHARDA UNIVERSITY LOGO
        </div>
      </div>
      <p className="max-w-3xl mx-auto text-xs leading-relaxed mb-8">
        University Grants Commission has empowered Sharda University to award the degrees under Section 22 of UGC Act 1956. 
        It is a full-fledged University and not a deemed University.
      </p>
      <div className="text-[10px] uppercase tracking-widest text-gray-600">
        © 2025 Sharda University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;