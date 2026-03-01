import { programs } from '../data/program'; // Ensure your data file exports the array
import computerpic from '../assets/computerpic.jpeg';
import electronicspic from '../assets/electronicspic.jpeg';
import mechpic from '../assets/mechpic.jpeg';

// Mapping images to an array for easy access by index
const programImages = [computerpic, electronicspic, mechpic];

const PopularPrograms = () => {
  return (
    <div className="py-20 px-10 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Popular Programs</h2>
      <p className="text-center text-gray-600 mb-12">Explore our diverse range of industry-aligned programs designed to launch your career.</p>
      
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
        {['Engineering', 'Management', 'Law', 'Medical', 'Sciences'].map((tab) => (
          <button 
            key={tab} 
            className="px-6 py-2 rounded-full border transition duration-300 bg-white text-gray-700 hover:bg-blue-600 hover:text-black"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition">
            
            {/* Top Symbol Icon & Image Container */}
            <div className="relative mb-6">
              {/* Icon from data */}
              <div className="absolute -top-4 left-4 bg-blue-900 text-white p-3 rounded-xl shadow-lg text-xl z-10">
                {prog.icon}
              </div>
              {/* Card Image */}
              <div className="h-48 overflow-hidden rounded-2xl">
                <img 
                  src={programImages[index]} 
                  alt={prog.title} 
                  className="h-full w-full object-cover" 
                />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">{prog.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{prog.specialization}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {prog.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">{tag}</span>
              ))}
            </div>
            
            <button className="w-full text-blue-900 font-bold border-t pt-4 flex justify-between">
              View Details <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPrograms;