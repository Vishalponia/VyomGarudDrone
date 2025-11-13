
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
    
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./video/bgimage.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>

    
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

     
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 max-w-6xl mx-auto text-center">
       
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="text-[#ff7b00]">About</span> VyomGarud
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          VyomGarud pioneers next-gen unmanned aerial systems — merging{" "}
          <span className="text-[#ff7b00] font-semibold">
            AI, robotics, and defense-grade design
          </span>{" "}
          to deliver unmatched performance in surveillance, mapping, and tactical operations.
        </motion.p>

      
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Autonomous Systems",
              desc: "AI-powered drones capable of self-navigation and dynamic decision-making in critical missions.",
            },
            {
              title: "Precision Engineering",
              desc: "Every frame and circuit is crafted for stability, endurance, and military-grade reliability.",
            },
            {
              title: "Strategic Intelligence",
              desc: "Empowering defense and industrial operations with high-accuracy aerial data and insights.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-[#ff7b00] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-gray-400 text-sm tracking-widest uppercase"
        >
          “In the silence of the skies, precision speaks.”
        </motion.div>
      </div>
    </section>
  );
}
