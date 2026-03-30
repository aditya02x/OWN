import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const techStack = [
    "Landing Page",
    "Websites",
    "Ecommerce",
    "SAAS",
    "Creative Website",
    "Backend",
    "Subscription_Models",
    "Web_APP",
    "UI/UX",
  ];

  // ✅ CONNECT EMAIL TO BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await axios.post(
        "https://osisz.onrender.com/api/contact",
        {
          name: "Homepage User",
          email: email,
          message: "User connected from Hero section",
        }
      );

      if (res.data.success) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center font-sans select-none px-4 sm:px-6 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E85002] text-[12px] sm:text-xs font-bold uppercase tracking-[0.4em] mb-6"
        >
          Idea. Prototype. Live Product.
        </motion.span>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[#F9F9F9] text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          WE DON’T JUST BUILD{" "}
          <span className="inline-block px-2 sm:px-4 py-1 mx-1 sm:mx-2 border border-[#E85002]/30 rounded-md">
            <span className="text-[#E85002]">
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
          WE BUILD GROWTH ENGINES
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-[#A7A7A7] text-sm sm:text-base md:text-lg"
        >
          Your ambition deserves more than a basic website. 
          We build digital experiences that win.
        </motion.p>

        {/* 🔥 CONNECT FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 w-full max-w-md"
        >
          <form 
            onSubmit={handleSubmit}
            className="flex items-center p-1 bg-[#0A0A0A] border border-white/10 rounded-full focus-within:border-[#E85002]/50 transition-all duration-300"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your email" 
              className="w-full bg-transparent px-6 py-3 text-white outline-none placeholder:text-gray-600 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button 
              type="submit"
              className="bg-[#E85002] text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#ff6a1a] transition-colors"
            >
              {status === "loading"
                ? "..."
                : status === "success"
                ? "Done"
                : status === "error"
                ? "Retry"
                : "Connect"}
            </button>
          </form>
        </motion.div>

        {/* MARQUEE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 w-full max-w-2xl relative overflow-hidden group"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
        >
          <div className="flex whitespace-nowrap py-2">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center"
            >
              {[...techStack, ...techStack].map((item, index) => (
                <span 
                  key={index} 
                  className="text-white text-[12px] sm:text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#E85002]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;