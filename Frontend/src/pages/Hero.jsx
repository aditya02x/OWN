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
    "Subscription Models",
    "Web App",
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

      if (res.data?.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E85002] text-xs font-bold uppercase tracking-[0.4em] mb-6"
        >
          Websites That Generate Revenue
        </motion.span>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-5xl px-2 text-white font-black tracking-tight leading-[0.95]
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          YOUR BUSINESS
          <br />
          NEEDS MORE
          <span className="text-[#E85002]"> CUSTOMERS</span>,
          <br />
          NOT JUST A{" "}
          <span className="text-[#E85002]">
            <Typewriter
              words={["WEBSITE", "SAAS", "WEB APP", "BRAND"]}
              loop
              cursor
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 max-w-2xl text-gray-400 text-base sm:text-lg"
        >
          We build conversion-focused websites and web applications that
          help businesses generate more leads, close more sales, and grow
          faster.
        </motion.p>

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
              className={`px-6 py-2.5 rounded-full text-white text-xs font-bold transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500"
                  : status === "error"
                  ? "bg-red-500"
                  : "bg-[#E85002] hover:bg-[#ff6a1a]"
              }`}
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

        <div className="mt-20 w-full max-w-2xl overflow-hidden font-bold">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-10"
            >
              {[...techStack, ...techStack].map((item, i) => (
                <span
                  key={i}
                  className="text-white text-xs uppercase tracking-widest"
                >
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