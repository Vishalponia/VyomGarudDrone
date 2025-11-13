import React from "react";
import { motion } from "framer-motion";

export default function Capabilities() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/bgvideo2.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

    
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-8"
        >
          Our <span className="text-[#ff7b00]">Capabilities</span>
        </motion.h2>

      
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-16"
        >
          From high-altitude reconnaissance to autonomous delivery systems,{" "}
          <span className="text-[#ff7b00] font-semibold">VyomGarud</span> is redefining
          aerial capabilities through advanced engineering and intelligent control.
        </motion.p>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Autonomous Flight",
              desc: "Fully AI-driven navigation, obstacle avoidance, and real-time adaptive mission control.",
            },
            {
              title: "Surveillance & Recon",
              desc: "Ultra-HD cameras and thermal sensors for precise data collection in all conditions.",
            },
            {
              title: "Payload Delivery",
              desc: "Custom payload systems for defense, logistics, and disaster management operations.",
            },
            {
              title: "AI Analytics",
              desc: "Intelligent aerial insights powered by onboard machine learning algorithms.",
            },
            {
              title: "Secure Communications",
              desc: "Encrypted drone-to-base communication ensuring data integrity and mission secrecy.",
            },
            {
              title: "Long Range Endurance",
              desc: "Optimized aerodynamics and battery tech for extended operational missions.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-105 hover:bg-white/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-[#ff7b00] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 text-gray-400 text-sm tracking-widest uppercase"
        >
          “Every flight, a mission of precision.”
        </motion.div>
      </div>
    </section>
  );
}
