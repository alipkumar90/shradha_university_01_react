import React from 'react';
import { FaTrophy, FaGlobe, FaBriefcase } from 'react-icons/fa';

// Replace this with your actual image path
import heroFormImg from '../assets/heropic.jpg'; 

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-10 md:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Headline & Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-gray-800 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> ADMISSIONS OPEN 2025-26
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-950 leading-tight">
            Empowering <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-900 via-blue-700 to-red-600 bg-clip-text text-transparent">
                Future Leaders
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300/50 -rotate-1 rounded-sm z-0" />
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            Join a vibrant community where <strong>innovation meets tradition.</strong> We foster academic excellence and holistic development for students from over 95 countries.
          </p>

          <div className="grid grid-cols-3 gap-8 pt-6">
            <div className="flex flex-col gap-2">
              <FaTrophy className="text-blue-900 text-xl" />
              <div className="text-2xl font-extrabold text-gray-950">#1 <span className="text-sm font-normal text-gray-500">Private</span></div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ranking</div>
            </div>
            <div className="flex flex-col gap-2">
              <FaGlobe className="text-red-500 text-xl" />
              <div className="text-2xl font-extrabold text-gray-950">95+ <span className="text-sm font-normal text-gray-500">Nations</span></div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Diversity</div>
            </div>
            <div className="flex flex-col gap-2">
              <FaBriefcase className="text-yellow-500 text-xl" />
              <div className="text-2xl font-extrabold text-gray-950">100% <span className="text-sm font-normal text-gray-500">Support</span></div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Placement</div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:w-[400px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="h-40 bg-gray-200 relative">
            <img src={heroFormImg} alt="Students" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
              ★ PREMIUM EDUCATION
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="font-bold text-xl text-gray-950 mb-6">Start Your Journey</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-500">
                  <option>Select Program</option>
                </select>
                <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-500">
                  <option>Select State</option>
                </select>
              </div>
              <button className="w-full py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition">
                Get Started Now
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-4">
                By registering, you agree to our <strong>Terms & Conditions</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;