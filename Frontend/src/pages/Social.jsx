import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

// ─── Update your links here ───────────────────────────────────────────────────
const SOCIAL_LINKS = [
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/aditya-raj-75b077362?utm_source=share_via&utm_content=profile&utm_medium=member_ios",  label: "LinkedIn"  },
  { Icon: FaInstagram, href: "https://instagram.com/your-handle",     label: "Instagram" },
  { Icon: FaGithub,    href: "https://github.com/aditya02x",      label: "GitHub"    },
  { Icon: FaYoutube,   href: "https://youtube.com/@your-channel",     label: "YouTube"   },
  { Icon: FaTwitter,   href: "https://x.com/adityadevx?s=11",       label: "Twitter"   },
];
// ─────────────────────────────────────────────────────────────────────────────

const Social = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Show bar after user scrolls down a little
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-center gap-3"
        >
          {/* Pill container */}
          <div className="flex flex-col items-center gap-1 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[30px] px-3 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

            {/* Top accent dot */}
            

            {SOCIAL_LINKS.map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.92 }}
                className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-300 group"
                style={{
                  color: hoveredIndex === i ? "#E85002" : "rgba(255,255,255,0.35)",
                }}
              >
                {/* Hover glow bg */}
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="social-glow"
                    className="absolute inset-0 rounded-xl bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}

                <Icon className="w-4 h-4 relative z-10" />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-12 whitespace-nowrap text-[10px] font-mono tracking-widest uppercase text-white bg-black/80 border border-white/10 px-2 py-1 rounded-lg pointer-events-none"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            ))}

            {/* Bottom accent dot */}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Social;
