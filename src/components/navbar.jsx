import React from 'react';

const Navbar = () => {
  return (
    // Removed px-10 to allow it to touch the edges, 
    // added px-8 for internal breathing room without shrinking the bar.
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Brand Name */}
      <div className="text-2xl font-bold text-blue-900 tracking-wider">
        SHARDA UNIVERSITY
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-gray-700 font-semibold text-sm uppercase">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#" className="hover:text-blue-600 transition">About Us</a>
        <a href="#" className="hover:text-blue-600 transition">Programs</a>
        <a href="#" className="hover:text-blue-600 transition">Admissions</a>
        <a href="#" className="hover:text-blue-600 transition">Global Opportunities</a>
        <a href="#" className="hover:text-blue-600 transition">Placements</a>
      </div>

      {/* Call to Action Button */}
      <button className="bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-bold shadow-lg">
        Apply Now
      </button>
    </nav>
  );
};

export default Navbar;