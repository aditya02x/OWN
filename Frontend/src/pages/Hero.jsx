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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const res = await axios.post(
        "https://osisz.onrender.com/api/contact",
        {
          name: email.split("@")[0] || "User",
          email: email,
          message: "Lead from Hero Section",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("SUCCESS:", res.data);

      if (res.data?.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E85002] text-xs font-bold uppercase tracking-[0.4em] mb-6"
        >
          Idea. Prototype. Live Product.
        </motion.span>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          WE DON’T JUST BUILD{" "}
          <span className="px-3 py-1 border border-[#E85002]/30 rounded-md text-[#E85002]">
            <Typewriter
              words={["WEBSITES", "SAAS", "WEB APP", "BRANDS"]}
              loop
              cursor
            />
          </span>
          <br />
          WE BUILD GROWTH ENGINES
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 max-w-xl text-gray-400 text-sm sm:text-base"
        >
          Your ambition deserves more than a basic website. 
          We build digital experiences that win.
        </motion.p>

        {/* ✅ WORKING FORM */}
        <motion.div className="mt-12 w-full max-w-md">
          <form 
            onSubmit={handleSubmit}
            className="flex items-center p-1 bg-[#0A0A0A] border border-white/10 rounded-full"
          >
            <input 
              type="email" 
              required
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent px-6 py-3 text-white outline-none text-sm"
            />

            <button 
              type="submit"
              className="bg-[#E85002] px-6 py-2.5 rounded-full text-white text-xs font-bold"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Done ✓"
                : status === "error"
                ? "Retry"
                : "Connect"}
            </button>
          </form>
        </motion.div>

        {/* MARQUEE */}
        <div className="mt-20 w-full max-w-2xl overflow-hidden">
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-10"
            >
              {[...techStack, ...techStack].map((item, i) => (
                <span key={i} className="text-white text-xs uppercase tracking-widest">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;