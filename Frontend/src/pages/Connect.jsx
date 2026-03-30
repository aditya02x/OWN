import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Mail, MapPin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const SOCIAL_LINKS = [
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/aditya-raj-75b077362?utm_source=share_via&utm_content=profile&utm_medium=member_ios",  label: "LinkedIn"  },
  { Icon: FaInstagram, href: "https://instagram.com/your-handle",     label: "Instagram" },
  { Icon: FaGithub,    href: "https://github.com/aditya02x",      label: "GitHub"    },
  { Icon: FaYoutube,   href: "https://youtube.com/@your-channel",     label: "YouTube"   },
  { Icon: FaTwitter,   href: "https://x.com/adityadevx?s=11",       label: "Twitter"   },
];

const Connect = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("https://osisz.onrender.com/api/contact", formData);
      if (response.data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="w-full bg-black">

      <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden border-b border-white/5">
        
        <div className="absolute inset-0 z-0">
          <video 
            src="/videos/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center p-8 md:p-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[18vw] md:text-[8vw] font-black tracking-tighter leading-none text-white">
              GET IN <br /> 
              <span className="text-[#E85002]">TOUCH</span>
            </h1>
            <p className="mt-6 text-gray-500 max-w-sm text-sm md:text-base font-light leading-relaxed">
              Have a vision? We have the engine. Let's collaborate to build something that disrupts the ordinary.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E85002]/20 rounded-full blur-[80px] group-hover:bg-[#E85002]/30 transition-all duration-700" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#E85002] font-bold">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 outline-none py-2 text-white focus:border-[#E85002] transition-colors placeholder:text-white/10" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#E85002] font-bold">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 outline-none py-2 text-white focus:border-[#E85002] transition-colors placeholder:text-white/10" 
                  placeholder="john@oasis.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#E85002] font-bold">Message</label>
                <textarea 
                  rows="3" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 outline-none py-2 resize-none text-white focus:border-[#E85002] transition-colors placeholder:text-white/10" 
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.02, backgroundColor: status === "success" ? "#10b981" : "#ff5e0a" }} 
                whileTap={{ scale: 0.98 }}
                className={`w-full font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-2xl ${
                    status === "success" ? "bg-emerald-500" : "bg-[#E85002]"
                } text-white transition-colors duration-300`}
              >
                {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                    <>Sent Successfully <CheckCircle2 className="w-4 h-4" /></>
                ) : status === "error" ? (
                    "Try Again"
                ) : (
                    <>Launch Project <ArrowRight className="w-4 h-4" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full bg-black px-8 md:px-20 py-24 overflow-hidden">
        
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#E85002]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.h1 
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            className="text-[18vw] md:text-[10vw] font-black text-white uppercase tracking-tighter leading-none"
          >
            OSISZ<span className="text-[#E85002]">.</span>
          </motion.h1>

          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#E85002] group-hover:rotate-12 transition-all duration-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase mb-1">Inquiry</p>
                  <p className="text-white font-medium text-sm">adityaraj34@icloud.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#E85002] group-hover:-rotate-12 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase mb-1">HQ</p>
                  <p className="text-white font-medium text-sm">Ranchi, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 text-white/30 text-2xl">
              {SOCIAL_LINKS.map(({ Icon, href, label }, i) => (
                <motion.a 
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -5, color: "#E85002" }}
                  className="transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[9px] font-mono tracking-[0.3em] uppercase opacity-50">
          <p>© 2026 Osisz. Crafted with passion. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Connect;