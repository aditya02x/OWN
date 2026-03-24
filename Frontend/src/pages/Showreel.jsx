import React from 'react';
import { motion } from 'framer-motion'; // ✅ FIX: added this import

const Showreel = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-6xl w-full relative">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
          
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#E85002] text-[10px] font-bold uppercase tracking-[0.5em]"
            >
              Portfolio 2026
            </motion.p>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-5xl md:text-7xl font-light tracking-tight leading-none"
            >
              Our <span className="text-[#E85002] italic font-serif">Showreel</span>
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-[1px] bg-[#E85002] mt-4"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-xs text-gray-500 text-sm border-l border-white/10 pl-6 leading-relaxed font-light"
          >
            A curated selection of creative projects, visual stories, and technical implementations.
          </motion.p>
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