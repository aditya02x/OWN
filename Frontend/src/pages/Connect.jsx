import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Connect = () => {
  return (
    <section id="contact" className="w-full bg-[#ffffff]">

      {/* 🔥 UPPER */}
      <div className="min-h-[70vh] w-full flex flex-col md:flex-row">

        {/* LEFT */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
          <video
            src="/videos/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <h1 className="absolute top-0 left-0 w-full text-[21vw] md:text-[8vw] font-extrabold tracking-tighter md:leading-25 leading-18 p-6 md:p-10 text-black">
            Get In <br /> Touch
          </h1>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 bg-[#ffff]/90 flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
          <form className="w-full max-w-md flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-black bg-transparent outline-none py-2"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-black bg-transparent outline-none py-2"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border-b-2 border-gray-400 bg-transparent outline-none py-2 resize-none"
            />

            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[#E85002] text-black font-bold py-4 uppercase tracking-widest"
            >
              Let’s Build This →
            </motion.button>

          </form>
        </div>

      </div>

      {/* 🔥 LOWER */}
      <div className="relative w-full bg-black min-h-[50vh] rounded-t-[60px] border-t border-white/10 px-10 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT — OUTLINE LOGO */}
        <h1
          className="text-[12vw] md:text-[10vw] font-extrabold uppercase tracking-tighter text-white"
          style={{
            WebkitTextStroke: "5px #F9F9F9",
            color: "transparent",
          }}
        >
          OSISZ<span className="text-orange-500">.</span>
        </h1>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-6 text-sm">

          {/* Email + Location */}
          <div className="text-[#A7A7A7] text-center text-2xl md:text-right">
            <p> <span className="text-white font-bold">Email-</span> hello@oasis.com</p>
            <p>Ranchi, India</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-[#F9F9F9] text-3xl">

            <a href="#" className="transition-all duration-300 hover:text-[#E85002] hover:scale-125">
              <FaLinkedin />
            </a>

            <a href="#" className="transition-all duration-300 hover:text-[#E85002] hover:scale-125">
              <FaInstagram />
            </a>

            <a href="#" className="transition-all duration-300 hover:text-[#E85002] hover:scale-125">
              <FaGithub />
            </a>

            <a href="#" className="transition-all duration-300 hover:text-[#E85002] hover:scale-125">
              <FaYoutube />
            </a>

            <a href="#" className="transition-all duration-300 hover:text-[#E85002] hover:scale-125">
              <FaTwitter />
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Connect;