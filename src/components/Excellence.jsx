const Excellence = () => {
  const ranks = [
    { title: "NIRF Ranking", subtitle: "TOP 50", desc: "Ranked among top universities in India by Ministry of Education" },
    { title: "NAAC A+", subtitle: "ACCREDITED", desc: "Highest grade accreditation for quality education and infrastructure" },
    { title: "QS I-Gauge", subtitle: "GOLD RATING", desc: "Awarded Gold University rating for overall excellence" },
    { title: "ASSOCHAM", subtitle: "BEST UNIVERSITY", desc: "Recognized for excellence in industry interface and placements" },
  ];

  return (
    <div className="py-20 px-10 md:px-20 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-bold text-center mb-4">Excellence Recognized</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Our commitment to academic quality and student success has been consistently acknowledged by prestigious national and international bodies.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ranks.map((item, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            {/* Image Placeholder */}
            <div className="w-16 h-16 bg-gray-600 rounded-full mb-6 flex items-center justify-center">
              <span className="text-xs text-gray-300">IMG</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <span className="inline-block bg-blue-900 text-blue-300 text-[10px] font-bold px-3 py-1 rounded mb-4 uppercase">
              {item.subtitle}
            </span>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Excellence;