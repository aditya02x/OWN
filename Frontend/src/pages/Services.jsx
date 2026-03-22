import React from 'react';
import { ExternalLink } from 'lucide-react';

const Services = () => {

  const cardStyle =
    "group bg-[#16171d] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#1c1d25] hover:-translate-y-1 shadow-2xl";

  return (
    <div className="relative bg-[#0b0c10] text-gray-300 p-8 md:p-16 min-h-screen font-sans selection:bg-orange-500/30 overflow-hidden">
      
      {/* 🔥 Orange Gradient Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-600/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 Heading */}
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-12">
          Services That <span className="text-orange-500">Drive Results</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Top Left */}
          <div className={`${cardStyle} md:col-span-2 flex flex-col justify-between`}>
            <div>
              <h2 className="text-white text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                High-Converting Websites
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                I design and develop modern websites that don’t just look good — they drive results. Built with performance, user experience, and conversion in mind, every project is crafted to help your business grow.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xl text-orange-500 font-semibold">
                “Your idea. My execution.”
              </p>
            </div>
          </div>

          {/* Top Right */}
          <div className={cardStyle}>
            
            <h2 className="text-white text-2xl font-bold mb-4">
              Interfaces That Feel Alive
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Smooth animations, clean UI, and lightning-fast performance — I craft interfaces that people enjoy using, not just scrolling through.
            </p>
            <span className="text-xs font-extrabold text-orange-500">
              “If it doesn’t feel smooth, it’s not done.”
            </span >
          </div>

          {/* 🔥 Bottom Left: Updated Profile Section */}
          <div className={`${cardStyle} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Profile Photo Placeholder */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-lg">
                  <img 
                    src="./image/profile.jpeg" // Replace this with your actual photo path
                    alt="Aditya Raj"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold leading-tight">Aditya Raj</h3>
                  <p className="text-orange-400 text-sm font-medium">Full Stack Developer</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-white mb-4">Why me?</h4>
              
              <ul className="text-gray-400 space-y-3 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-orange-500">➔</span> 
                  Code that converts. Average doesn't cut it.
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500">➔</span> 
                  Obsessed with performance. Fast is default.
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500">➔</span> 
                  Strategic development. No fluff, just structure.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Right */}
          <div className={`${cardStyle} md:col-span-2`}>
            <h2 className="text-white text-2xl font-bold mb-2">
              Everything Your Business Needs
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              I don’t just build websites — I craft complete digital experiences. From design to development,
              every detail is focused on performance, usability, and real results.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Responsive Design",
                "Fast Performance",
                "Modern UI/UX",
                "Animations",
                "Authentication",
                "Dashboards",
                "API Integration",
                "SEO Basics",
                "Mobile Optimized",
                "Scalable Structure",
                "Clean Code",
                "User Experience"
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400 
                  transition-all duration-300 cursor-default 
                  hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/30 
                  hover:scale-110 hover:-translate-y-1"
                >
                  {tag}
                </span>
              ))}

            </div>
            <div className="stck mt-10">
             <div className="svg flex justify-center items-center gap-5 ">
                 <img className='h-5 md:h-10' src="/image/react.svg" alt="" />
                 <img className='h-5 md:h-10' src="/image/MongoDB.svg" alt="" />
                 <img className='h-5 md:h-10 ' src="/image/next-js.svg" alt="" />
                 <img className='h-5 md:h-10 ' src="/image/node.js.svg" alt="" />
                 <img className='h-5 md:h-10 ' src="/image/ex.svg" alt="" />
                 <img className='h-5 md:h-10' src="/image/Tailwind CSS.svg" alt="" />
                 <img className='h-5 md:h-10' src="/image/figma.svg" alt="" />
                 <img className='h-5 md:h-10  ' src="/image/gsap.svg" alt="" />

             </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;