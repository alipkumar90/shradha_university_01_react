import React from 'react';
import { FaGlobeAmericas, FaBuilding, FaRegCheckCircle } from 'react-icons/fa';
import libraryImage from '../assets/librarypic.jpeg'; 

const partners = [
  { country: "USA", name: "Harvard Business School", prog: "Online Certification" },
  { country: "UNITED KINGDOM", name: "University of Plymouth", prog: "Student Exchange" },
  { country: "CANADA", name: "Western University", prog: "Research Collaboration" },
  { country: "AUSTRALIA", name: "Curtin University", prog: "Dual Degree" },
];

const PartnerCard = ({ partner }) => {
  const iconColors = {
    USA: 'bg-blue-900 text-white',
    'UNITED KINGDOM': 'bg-blue-100 text-blue-900',
    CANADA: 'bg-gray-100 text-gray-500',
    AUSTRALIA: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center gap-6 border border-gray-100 hover:shadow-lg transition">
      <div className={`p-4 rounded-2xl text-xl ${iconColors[partner.country] || 'bg-gray-100'}`}>
        <FaBuilding />
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{partner.country}</p>
        <p className="text-lg font-bold text-gray-950">{partner.name}</p>
        <p className="text-xs text-gray-500">{partner.prog}</p>
      </div>
      <div className="text-xl text-red-500">•</div>
    </div>
  );
};

const LibraryCard = ({ image }) => (
  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
    {/* Base Image */}
    <img src={image} alt="Library" className="w-full h-[550px] object-cover" />
    
    {/* Dark Overlay for text contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
    
    {/* White Bottom Glow Effect */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.2),transparent_70%)]" />

    {/* Top-Right Badges */}
    <div className="absolute top-6 right-6 flex gap-2 z-20">
      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] flex items-center gap-2 font-bold text-white">
        <FaBuilding /> USA
      </span>
      <span className="px-3 py-1 rounded-full bg-blue-900 text-[10px] font-bold text-white">EST. 2018</span>
    </div>

    {/* Main Text Content */}
    <div className="absolute top-1/2 -translate-y-1/2 left-10 text-white z-10">
      <h3 className="text-5xl font-extrabold mb-3 leading-tight">Harvard Business<br />School</h3>
      <p className="text-sm text-gray-100 max-w-sm">Executive education programs and case study methodologies for business students.</p>
    </div>

    {/* Bottom Badges: 15+ Programs and Verified */}
    <div className="absolute bottom-10 left-10 flex gap-4 text-white z-20">
      <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-3xl font-bold">15+</div>
        <div className="text-[10px] font-bold tracking-wider text-gray-300">
          PROGRAMS<br />ACTIVE
        </div>
      </div>
      <div className="px-4 py-2 rounded-2xl bg-black/40 border border-green-400 text-green-400 text-[10px] font-bold flex items-center gap-2">
        <FaRegCheckCircle className="text-sm" /> VERIFIED<br />STATUS
      </div>
    </div>
  </div>
);

const GlobalTieups = () => {
  return (
    <div className="py-20 px-10 md:px-20 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-bold text-[10px] uppercase tracking-widest mb-6">
            <FaGlobeAmericas /> GLOBAL TIE-UPS
          </div>
          
          {/* Headline with Gradient Text */}
          <h2 className="text-5xl font-extrabold text-gray-950 mb-10 leading-tight">
            Connecting You to <br />
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500 bg-clip-text text-transparent">
              The World's Best.
            </span>
          </h2>
          
          <div className="space-y-4">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2">
          <LibraryCard image={libraryImage} />
        </div>
      </div>
    </div>
  );
};

export default GlobalTieups;