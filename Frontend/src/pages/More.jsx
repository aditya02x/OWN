import React from "react";
import { motion } from "framer-motion";

const More = () => {
  const offerings = [
    { title: "Landing Pages", tag: "Conversion" },
    { title: "SaaS Platforms", tag: "Systems" },
    { title: "Brand Identity", tag: "Design" },
    { title: "Web Applications", tag: "Performance" },
  ];

  return (
    <section className="bg-black py-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* --- NEW MAIN HEADING --- */}
        <div className="mb-32 text-center space-y-4">
       
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl md:text-6xl font-light tracking-tight"
          >
            What we <span className="text-[#E85002] italic font-serif">build</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-[#E85002] mx-auto mt-4"
          />
        </div>

        {/* The Stack */}
        <div className="space-y-32 w-full">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.05, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8 }} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group text-center"
            >
              {/* Spotlight glow behind the text */}
              <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-white text-5xl md:text-8xl font-light tracking-tight transition-all duration-700 group-hover:tracking-normal cursor-default">
                  {item.title.split("").map((char, i) => (
                    <span 
                      key={i} 
                      className="hover:text-[#E85002] transition-colors duration-200"
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              </div>
              
              {/* Vertical line connector */}
              {index !== offerings.length - 1 && (
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-16 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-40 text-gray-700 text-[10px] uppercase tracking-[0.4em] font-light"
        >
          Built for the ambitious.
        </motion.p>
      </div>
    </section>
  );
};

export default More;