import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#1a1a1a,_#000)]">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ff7b00_1px,transparent_1px),linear-gradient(-45deg,#ff7b00_1px,transparent_1px)] bg-[length:70px_70px]" />
      </div>

  
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, #ff7b00, transparent)",
            "linear-gradient(270deg, #ff7b00, transparent)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute inset-0 opacity-10"
      ></motion.div>

    
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-[#ff7b00] mb-3">
            Vyom<span className="text-white">Garud</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pioneering next-gen UAV systems with defense-grade precision and
            intelligent autonomy — made in India for the world.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#ff7b00]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["About", "Capabilities", "Highlights", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#ff7b00] transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-[#ff7b00]">
            Connect
          </h3>
          <div className="flex gap-5 mb-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#ff7b00]/20 transition"
              >
                <Icon className="w-5 h-5 text-[#ff7b00]" />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">contact@vyomgarud.com</p>
          <p className="text-gray-400 text-sm">+91 88814 44693</p>
        </motion.div>
      </div>

     
      <div className="relative z-10 border-t border-[#ff7b00]/20 mx-6"></div>

  
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center py-6 text-gray-500 text-xs tracking-widest uppercase"
      >
        © {new Date().getFullYear()} VyomGarud — Crafted with Precision ⚙️
      </motion.div>
    </footer>
  );
}
