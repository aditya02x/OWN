import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ FIX

export default function Navbar() {
  const [active, setActive] = useState("HOME"); // ✅ match with navItems
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const map = {
      HOME: "home",
      SHOWREEL: "showreel",
      SERVICES: "services",
      PROJECT: "projects",
      HIRE: "connect"
    };

    const targetId = map[id] || id.toLowerCase();
    setActive(id);
    setMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["HOME", "SHOWREEL", "Projects","Services", "HIRE"];

  return (
    <>
      {/* Floating Navbar Wrapper */}
      <div className="fixed top-6 w-full flex justify-center z-[100] px-4">
        <nav
          className={`flex justify-between items-center px-8 transition-all duration-500 ease-in-out
          ${scrolled ? "py-3 w-full md:w-[90%] bg-black/80" : "py-4 w-full md:w-[60%] bg-[#333333]/10"}
          backdrop-blur-xl border border-white/5 rounded-full shadow-2xl shadow-black/50`}
        >
          {/* Logo */}
          <h1
            onClick={() => scrollTo("HOME")}
            className="text-[#F9F9F9] font-black text-xl cursor-pointer tracking-tighter group"
          >
            OSISZ<span className="text-[#E85002] group-hover:italic transition-all">.</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative transition-all duration-300 ${
                  active === item ? "text-[#E85002]" : "text-[#A7A7A7] hover:text-white"
                }`}
              >
                {item}
                {active === item && (
                  <motion.span 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#E85002] shadow-[0_0_8px_#22C55E]" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110]"
          >
            <div className={`w-6 h-[2px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-[2px] bg-white ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-[2px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-6">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#E85002] blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#166534] blur-[120px]" />
          </div>

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-4xl font-black text-white hover:text-[#E85002] hover:italic uppercase tracking-tighter transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}