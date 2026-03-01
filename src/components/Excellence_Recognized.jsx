import { FaTrophy, FaShieldAlt, FaMedal, FaCrown, FaCalendarAlt, FaUniversity, FaRocket, FaLightbulb } from 'react-icons/fa';

const ExcellenceRecognized = () => {
  const cards = [
    { title: "NIRF Ranking", sub: "TOP 150", desc: "Ranked among top universities in India by Ministry of Education", icon: <FaTrophy />, color: "text-yellow-400", bg: "bg-yellow-400/10", bgsymbol: <FaTrophy /> },
    { title: "NAAC A+", sub: "ACCREDITED", desc: "Highest grade accreditation for quality education and infrastructure", icon: <FaShieldAlt />, color: "text-green-400", bg: "bg-green-400/10", bgsymbol: <FaShieldAlt /> },
    { title: "QS I-Gauge", sub: "GOLD RATING", desc: "Awarded Gold University rating for overall excellence", icon: <FaMedal />, color: "text-blue-400", bg: "bg-blue-400/10", bgsymbol: <FaMedal /> },
    { title: "ASSOCHAM", sub: "BEST UNIVERSITY", desc: "Recognized for excellence in industry interface and placements", icon: <FaCrown />, color: "text-purple-400", bg: "bg-purple-400/10", bgsymbol: <FaCrown /> },
  ];

  const footerStats = [
    { icon: <FaCalendarAlt />, val: "27+", label: "YEAR LEGACY" },
    { icon: <FaUniversity />, val: "250+", label: "PARTNER UNIVERSITIES" },
    { icon: <FaRocket />, val: "100+", label: "STARTUPS INCUBATED" },
    { icon: <FaLightbulb />, val: "500+", label: "PATENTS PUBLISHED" },
  ];

  return (
    <div className="py-20 px-10 md:px-20 bg-[#050714] text-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        {/* Hall of Fame Pill Container */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
          <FaTrophy /> HALL OF FAME
        </div>
        <h2 className="text-5xl font-extrabold mb-6">
          Excellence <span className="text-blue-400">Recognized</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Our commitment to academic quality and student success has been consistently acknowledged by prestigious national and international bodies.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {cards.map((card, i) => (
          <div key={i} className="relative bg-[#0f1228] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition group overflow-hidden">
            {/* Faint Background Symbol (Low Visibility) */}
            <div className="absolute -bottom-4 -right-4 text-[80px] text-white opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              {card.bgsymbol}
            </div>
            
            {/* Icon Circle */}
            <div className={`w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center text-2xl ${card.bg} ${card.color}`}>
              {card.icon}
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-center mb-3">{card.title}</h3>
            <div className={`text-[10px] font-bold text-center tracking-widest ${card.color} mb-6`}>
              {card.sub}
            </div>
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Footer Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
        {footerStats.map((stat, i) => (
          <div key={i} className="flex items-center justify-center gap-4 text-gray-400">
            <div className="text-2xl opacity-50">{stat.icon}</div>
            <div className="text-left">
              <div className="text-2xl font-extrabold text-white">{stat.val}</div>
              <div className="text-[9px] font-bold tracking-widest text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceRecognized;