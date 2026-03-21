import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Showreel from './pages/Showreel';

// Placeholder for remaining sections
const Section = ({ id, title, bgColor, zIndex, num }) => (
  <section 
    id={id} 
    className={`snap-start h-screen w-full flex items-center justify-center sticky top-0 ${bgColor} z-[${zIndex}] border-t border-white/5`}
  >
    <h2 className="text-[10vw] font-black uppercase italic text-white/5 select-none absolute">
      {title}
    </h2>
    <div className="relative z-10 text-center">
      <span className="text-[#E85002] font-black tracking-[1em] uppercase text-[10px] mb-4 block">
        Section // 0{num}
      </span>
      <h3 className="text-[#F9F9F9] text-4xl font-bold uppercase tracking-tighter">
        {title} <br /> <span className="text-white/20 italic text-2xl">Coming Soon</span>
      </h3>
    </div>
  </section>
);

function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black hide-scrollbar">
      <Navbar />

      {/* 01. HERO SECTION */}
      <section id="home" className="snap-start h-screen w-full sticky top-0 z-10">
        <Hero />
      </section>

      {/* 02. SHOWREEL SECTION (Real Component) */}
      <section id="showreel" className="snap-start h-screen w-full sticky top-0 z-20 bg-black">
        <Showreel />
      </section>

      {/* 03. SERVICES SECTION */}
      <Section id="services" title="Services" bgColor="bg-[#0a0a0a]" zIndex={30} num="3" />

      {/* 04. PROJECTS SECTION */}
      <Section id="projects" title="Projects" bgColor="bg-[#000000]" zIndex={40} num="4" />

      {/* 05. CONTACT SECTION */}
      <Section id="contact" title="Contact" bgColor="bg-[#080808]" zIndex={50} num="5" />
      
    </main>
  );
}

export default App;