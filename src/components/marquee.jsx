const Marquee = () => {
  // These are the items from your PDF
  const items = [
    { text: "GLOBAL OPPORTUNITIES", symbol: "●" },
    { text: "ADMISSIONS OPEN 2025", symbol: "●" },
    { text: "NAAC A+ ACCREDITED", symbol: "●" },
  ];

  return (
    <div className="w-full bg-black text-white py-3 overflow-hidden flex">
      {/* 'animate-marquee' is the custom class we defined in your CSS.
        'whitespace-nowrap' keeps the text on one continuous line.
      */}
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {/* We map the items twice to ensure a seamless infinite loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase">
            <span>{item.text}</span>
            <span className="text-blue-500">{item.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;