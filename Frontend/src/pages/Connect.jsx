import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

const Connect = () => {
  return (
    <section id="contact" className="w-full bg-[#ffffff]">

      {/* 🔥 UPPER - Video Background with Glassmorphism Form */}
      <div className="relative min-h-[70vh] w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Full-width Video Background */}
        <video 
          src="/videos/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 blur-[2px]"
        />

        {/* LEFT - Heading */}
        <div className="w-full md:w-1/2 h-[35vh] md:h-auto relative z-10 flex items-start justify-start">
          <h1 className="text-[21vw] md:text-[8vw] font-extrabold tracking-tighter md:leading-[1.1] leading-none p-6 md:p-10 text-black">
            Get In <br /> Touch
          </h1>
        </div>

        {/* RIGHT - Glassmorphism Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-8 py-10 md:py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-[30px] p-8 md:p-10 shadow-2xl"
          >
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border-b border-black/30 bg-transparent outline-none py-2 placeholder:text-black/50 text-black" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border-b border-black/30 bg-transparent outline-none py-2 placeholder:text-black/50 text-black" 
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full border-b border-black/30 bg-transparent outline-none py-2 resize-none placeholder:text-black/50 text-black" 
              />
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="bg-[#E85002] text-white font-bold py-4 rounded-xl uppercase tracking-widest shadow-lg shadow-[#E85002]/20"
              >
                Let’s Build This →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 🔥 LOWER - No changes made here as requested */}
      <div className="relative w-full bg-black rounded-t-[60px] border-t border-white/10 px-8 md:px-20 py-16 overflow-hidden">
        
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <h1 className="text-[20vw] md:text-[10vw] font-black text-white uppercase tracking-tighter leading-none">
            OASIS<span className="text-[15vw] md:text-[10vw] text-orange-500">.</span>
          </h1>

          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E85002] transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-[13px] font-mono uppercase">Email Me</p>
                  <p className="text-white font-medium">adityaraj34@icloud.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#E85002]" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-mono uppercase">Location</p>
                  <p className="text-white font-medium">Ranchi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 text-white/40 text-2xl">
              <a href="#" className="hover:text-[#E85002] hover:scale-125 transition-all"><FaLinkedin /></a>
              <a href="#" className="hover:text-[#E85002] hover:scale-125 transition-all"><FaInstagram /></a>
              <a href="#" className="hover:text-[#E85002] hover:scale-125 transition-all"><FaGithub /></a>
              <a href="#" className="hover:text-[#E85002] hover:scale-125 transition-all"><FaYoutube /></a>
              <a href="#" className="hover:text-[#E85002] hover:scale-125 transition-all"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase">
          <p>© 2026 Osisz. Crafted with passion. All rights reserved..</p>
          <p></p>
        </div>
      </div>

    </section>
  );
};

export default Connect;