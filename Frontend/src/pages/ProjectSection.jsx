import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Design System", color: "#f97316", desc: "Orange Focus" },
  { id: 2, title: "Cloud Platform", color: "#10b981", desc: "Emerald Focus" },
  { id: 3, title: "E-Commerce", color: "#3b82f6", desc: "Blue Focus" },
  { id: 4, title: "Analytics App", color: "#a855f7", desc: "Purple Focus" },
];

const ProjectCard = ({ project, i, progress, total }) => {
  // Card starts scaling down as the scroll progresses past its position
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 0.8]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          backgroundColor: project.color,
          // Creates the visual "stack" at the top
          top: `calc(10vh + ${i * 25}px)`,
          zIndex: i,
        }}
        className="relative w-[92%] md:w-[80%] h-[65vh] md:h-[80vh] rounded-[40px] p-8 md:p-12 shadow-[0_-20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between border border-white/10 will-change-transform"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-5xl md:text-7xl font-black text-black/10 select-none">
            0{project.id}
          </h3>
          <div className="px-4 py-1 rounded-full border border-white/20 bg-white/5 text-white text-[10px] font-mono uppercase tracking-widest">
            {project.desc}
          </div>
        </div>

        <div className="text-white">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            {project.title}
          </motion.h2>
          <div className="w-16 h-1 bg-white/40 rounded-full" />
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
    <div ref={containerRef} className="relative bg-[#0b0c10] md:min-h-[400vh]">
      
      {/* 🔥 Fixed Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Intro Space */}
        <div className="h-[20vh] md:h-[40] flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-5xl  md:text-7xl font-bold tracking-tighter uppercase">
            Selected <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-gray-500 mt-5 font-mono text-xs md:text-2xs tracking-[0.3em] uppercase">
           Real projects built with purpose — designed to perform, scale, and stand out.
          </p>
        </div>

        {/* The Stack Layout */}
        <div className="relative">
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
        
        {/* Bottom Spacer */}
        <div className=" h-[10vh] md:h-[30vh]" />
      </div>
    </div>
  );
};

export default ProjectSection;