import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import Marquee from './components/marquee'
import PopularPrograms from './components/popular_programs'
import WhyStudy from './components/WhyStudy'
import ExcellenceRecognized from './components/Excellence_Recognized'
import GlobalTieup from './components/GlobalTieup'
import TopPlacements from './components/Topplacements'
import Footer from './components/Footer'
function App() {
  return (
    // 'min-h-screen' and 'w-full' correctly set the container to fill the viewport
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />
      <HeroSection />
      {/* Your future sections will go here */}
      <Marquee />
      <PopularPrograms />
      <WhyStudy />
      <ExcellenceRecognized />
      <GlobalTieup />
      <TopPlacements />
      <Footer />
    </div>
  );
}

export default App;