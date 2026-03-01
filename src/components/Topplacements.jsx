import React from 'react';
import rohitPic from '../assets/deepak img.jpeg';
import aakankshaPic from '../assets/photo mine 2.png';
import amitPic from '../assets/pic1.jpeg';
import priyaPic from '../assets/pic2.jpeg';
import rahulPic from '../assets/pic3.jpeg';

// You will replace these placeholders with your actual image imports
const placements = [
  { name: "Rohit Jain", role: "B.TECH CSE", company: "Amazon", salary: "1 Crore", img: rohitPic },
  { name: "Aakanksha", role: "MBA", company: "Google", salary: "50 LPA", img: aakankshaPic },
  { name: "Amit Sharma", role: "B.TECH", company: "Microsoft", salary: "45 LPA", img: amitPic },
  { name: "Priya Singh", role: "LAW", company: "Khaitan & Co", salary: "25 LPA", img: priyaPic },
  { name: "Rahul Verma", role: "B.DES", company: "Adobe", salary: "30 LPA", img: rahulPic },
];

const TopPlacements = () => {
  return (
    <div className="py-20 px-10 bg-white">
      {/* Success Stories Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
          Success Stories
        </div>
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Top Placements</h2>
        <p className="text-gray-600">Our students are making a mark in top global companies with record-breaking packages.</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {placements.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center">
            {/* Profile Picture Placeholder */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
               <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">{p.role}</p>
            <p className="text-blue-600 font-semibold mb-4">{p.company}</p>
            <div className="inline-block px-4 py-1 rounded-lg bg-orange-100 text-orange-700 font-bold text-sm">
              ₹ {p.salary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPlacements;