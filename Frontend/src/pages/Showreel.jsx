import React from 'react';

const Showreel = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-6xl w-full relative">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-2 block">
              Portfolio 2026
            </span>

            <h2 className="text-5xl md:text-7xl font-black font-caveat text-white leading-none italic uppercase">
              Show<span className="text-orange-600">reel</span>
            </h2>
          </div>

          <p className="max-w-xs text-gray-400 text-sm border-l border-orange-500/30 pl-4">
            A curated selection of creative projects, visual stories, and technical implementations.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative group cursor-pointer">
          
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
          
          <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-black to-black flex items-center justify-center">
              
              <div className="relative z-10 w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform duration-500">
                
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
              
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Showreel;