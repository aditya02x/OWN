import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Design System", color: "#f97316", desc: "Orange Focus" },
  { id: 2, title: "Cloud Platform", color: "#10b981", desc: "Emerald Focus" },
  { id: 3, title: "E-Commerce", color: "#3b82f6", desc: "Blue Focus" },
  { id: 4, title: "Analytics App", color: "#a855f7", desc: "Purple Focus" },
];

const ProjectCard = ({ project, i, progress, total }) => {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 0.85]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div
        style={{
          scale,
          backgroundColor: project.color,
          // Refined the top stack spacing for better visibility of previous cards
          top: `calc(8vh + ${i * 32}px)`, 
          zIndex: i,
        }}
        className="relative w-full max-w-5xl h-[70vh] md:h-[75vh] rounded-[48px] p-10 md:p-16 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] flex flex-col justify-between border border-white/10 will-change-transform"
      >
        {/* Top Section: Aligned to corners */}
        <div className="flex justify-between items-start w-full">
          <h3 className="text-6xl md:text-8xl font-black text-black/10 leading-none -mt-4 -ml-2 select-none">
            0{project.id}
          </h3>
          <div className="px-5 py-1.5 rounded-full border border-black/10 bg-black/5 text-black/60 text-[10px] font-bold uppercase tracking-[0.2em]">
            {project.desc}
          </div>
        </div>

        {/* Bottom Section: Left-aligned for a modern look */}
        <div className="text-white max-w-lg">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter leading-[1.1]"
          >
            {project.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-white/60 rounded-full" 
          />
        </div>
      </motion.div>
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
    <div ref={containerRef} className="relative bg-[#000000] md:min-h-[500vh]">
      
      {/* Fixed Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-24">
        {/* Intro Heading - Centered and Refined */}
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

        {/* The Stack Layout */}
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
        
        {/* Spacer for scroll completion */}
        <div className="h-[20vh]" />
      </div>
    </div>
  );
};

export default ProjectSection;