import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center font-sans select-none px-4 sm:px-6">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#E85002] opacity-0 blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#E85002] opacity-10 blur-[100px]"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <motion.h2 
          animate={{ x: [0, -150, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[20vw] sm:text-[15vw] font-black uppercase whitespace-nowrap"
          style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}
        >
          OASIS OASIS OASIS
        </motion.h2>
      </div>

      {/* Floating Circle */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="hidden sm:flex absolute top-[15%] left-[5%] w-28 h-28 md:w-56 md:h-56 border border-[#E85002]/30 rounded-full items-center justify-center"
      >
        <div className="w-full h-[1px] bg-[#E85002]/30 rotate-45" />
        <div className="w-[1px] h-full bg-[#E85002]/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E85002] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6"
        >
          Idea. Prototype. Live Product.
        </motion.span>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#F9F9F9] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
        >
          WE DON’T JUST BUILD{" "}
          
          <span className="inline-block px-2 sm:px-4 py-1 mx-1 sm:mx-2 border border-[#E85002]/30 rounded-md">
            <span className="text-[#E85002] drop-shadow-[0_0_8px_#E85002]">
              <Typewriter
                words={["WEBSITES", "SAAS", "WEB APP", "BRANDS"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={40}
                delaySpeed={800}
              />
            </span>
          </span>

          <br className="hidden sm:block" />
          WE BUILD GROWTH ENGINE
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 sm:mt-5 max-w-xl text-[#A7A7A7] text-xs sm:text-sm md:text-lg leading-relaxed"
        >
          Your ambition deserves more than a basic website. We build digital experiences that win.
        </motion.p>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-20 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">
          
          <p className="max-w-[280px] text-[#555555] text-[10px] font-bold uppercase tracking-[0.3em] leading-loose border-l border-[#333333] pl-6 text-left">
            [01] Strategy Architecture <br />
            [02] Scalable Infrastructure <br />
            [03] High-Fidelity Deployment
          </p>

          <motion.button 
            initial="initial"
            whileHover="hover"
            className="relative group overflow-hidden px-8 sm:px-12 md:px-16 py-4 sm:py-6 border border-[#F9F9F9]/20 hover:border-[#E85002]"
          >
            <motion.div 
              variants={{
                initial: { x: "-105%" },
                hover: { x: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#E85002]"
            />
            <span className="relative z-10 text-[#F9F9F9] group-hover:text-black font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.4em] flex items-center gap-3 sm:gap-6">
              Start The Engine
              <span className="text-lg sm:text-xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default Hero;