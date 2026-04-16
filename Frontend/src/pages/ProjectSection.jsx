import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Landing Pages", image: "/image/bg.png", link: "https://pro-1-delta.vercel.app/" },
  { id: 2, title: "Landing Pages", image: "/image/bgtwosvg.svg", link: "https://landing-page-yezf.vercel.app/" },
  { id: 3, title: "Ed-Tech", image: "/images/project3.jpg", link: "#" },
  { id: 4, title: "E-Commerce", image: "/images/project4.jpg", link: "#" },
];

const ProjectCard = ({ project, i, progress, total }) => {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 0.85]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          scale,
          top: `calc(8vh + ${i * 32}px)`,
          zIndex: i,
        }}
        className="relative w-full max-w-5xl h-[70vh] md:h-[75vh] rounded-[48px] bg-white p-4 md:p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] border border-black/10 will-change-transform overflow-hidden block"
      >

        {/* Image Container with padding */}
        <div className="w-full h-full rounded-[36px] overflow-hidden relative">
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Optional dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content on image */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 text-white">
            
            {/* Top */}
            <div className="flex justify-between items-start">
              <h3 className="text-6xl md:text-8xl font-black text-white/10">
                0{project.id}
              </h3>
            </div>

            {/* Bottom */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {project.title}
              </motion.h2>

              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8 }}
                className="h-[2px] bg-orange-500/70"
              />
            </div>

          </div>
        </div>

      </motion.a>
    </div>
  );
};

const ProjectSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative bg-black md:min-h-[500vh]">
      
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-24">
        
        {/* Heading */}
        <div className="mb-24 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-light tracking-tight"
          >
            Selected <span className="text-[#E85002] italic font-serif">Projects</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[1px] bg-[#E85002] mx-auto mt-8"
          />
        </div>

        {/* Cards */}
        <div className="relative pb-[10vh]">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.id}
              project={project}
              i={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="h-[20vh]" />
      </div>
    </div>
  );
};

export default ProjectSection;