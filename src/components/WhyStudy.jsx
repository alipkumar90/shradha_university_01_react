import { FaCheckCircle, FaGlobe, FaIndustry, FaUsers } from 'react-icons/fa';

const WhyStudy = () => {
  return (
    <div className="py-20 px-10 md:px-20 bg-white">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
        
        {/* Left Side: Text List */}
        <div className="md:w-1/2">
          <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-2">Discover Excellence</h4>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Why Study at <br/><span className="text-orange-500">Sharda University?</span>
          </h2>
          
          <ul className="space-y-4">
            {[
              "NAAC A+ Accredited University",
              "100 acres of lush green eco-friendly campus",
              "Top Ranked Among India's Top 50 Universities",
              "40,000+ Alumni Network across the globe",
              "Distinguished faculty with global experience",
              "On-campus 1200+ bed super-specialty hospital"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <FaCheckCircle className="text-blue-600" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Advantages Card with Rich Gradient */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-950 via-slate-900 to-orange-950 text-white p-8 rounded-3xl shadow-2xl border border-white/10">
          <h3 className="text-2xl font-bold mb-8">Sharda Advantages</h3>
          <div className="space-y-6">
            {[
              { icon: <FaGlobe />, title: "Global Exposure", desc: "Tie-ups with 250+ global universities for exchange programs." },
              { icon: <FaIndustry />, title: "Industry Ready", desc: "Curriculum designed by industry experts to ensure employability." },
              { icon: <FaUsers />, title: "Sharda Community", desc: "Students from 95+ countries creating a rich cultural mosaic." }
            ].map((adv, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition border border-white/5">
                <div className="text-blue-400 text-xl mt-1">{adv.icon}</div>
                <div>
                  <h4 className="font-bold text-sm">{adv.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-200 pt-10 text-center">
        {[
          { num: "03", label: "NOBEL LAUREATES" },
          { num: "1023+", label: "PATENTS" },
          { num: "200+", label: "STARTUPS" },
          { num: "7+", label: "STUDENTS" },
          { num: "1100+", label: "FACULTY" }
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-4xl font-extrabold text-blue-900">{stat.num}</div>
            <div className="text-[10px] font-bold text-gray-500 tracking-widest mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyStudy;