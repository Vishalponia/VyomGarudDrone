import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/drone.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-600">
          VyomGarud
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Precision. Power. <span className="text-primary">Performance.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Next-Gen Autonomous UAV Systems by VyomGarud
        </p>
           <div className="flex justify-center gap-4">
           <button className="border border-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-gradient-to-r from-[#c5c9d4] to-[#e26328] transition">
            Explore Drones 
          </button>  
          <button className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:bg-white hover:bg-gradient-to-r from-[#c6cbd8] to-[#da571a] transition">
            Contact Us <Link to="contact" smooth={true} duration={800} offset={-70}></Link>
          </button> 
        </div> 
      </motion.div>
    </section>
  );
}
