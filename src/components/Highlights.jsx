
import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: <Shield className="w-12 h-12 text-[#ff7b00]" />,
      title: "Defense-Grade Reliability",
      desc: "Tested for extreme endurance — from scorching deserts to high-altitude winds.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-[#ff7b00]" />,
      title: "AI-Powered Precision",
      desc: "Neural-core analytics deliver instant data insights and adaptive control in real time.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#ff7b00]" />,
      title: "High Performance Systems",
      desc: "Engineered for speed, agility, and accuracy — every mission, every flight, every time.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-black flex items-center justify-center">
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#000)]">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ff7b00_1px,transparent_1px),linear-gradient(-45deg,#ff7b00_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, #ff7b00, #000000, #ff7b00)",
            "linear-gradient(90deg, #000000, #ff7b00, #000000)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute inset-0 opacity-10"
      ></motion.div>

  
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16"
        >
          Core <span className="text-[#ff7b00]">Highlights</span>
        </motion.h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              whileHover={{ scale: 1.08, rotateY: 5 }}
              className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-10 shadow-[0_0_30px_rgba(255,123,0,0.1)] hover:shadow-[0_0_40px_rgba(255,123,0,0.4)] transition-all duration-500"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#ff7b00] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base">{item.desc}</p>

             
              <motion.div
                className="absolute -inset-[1px] rounded-2xl border border-[#ff7b00]/30"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-gray-400 text-sm tracking-widest uppercase"
        >
          “Where precision meets performance.”
        </motion.div>
      </div>
    </section>
  );
}
