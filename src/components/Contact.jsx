

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen text-white bg-black overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a,_#000)]">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ff7b00_1px,transparent_1px),linear-gradient(-45deg,#ff7b00_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

    
      <motion.div
        animate={{
          background: [
            "linear-gradient(120deg, #ff7b00 0%, transparent 100%)",
            "linear-gradient(240deg, #ff7b00 0%, transparent 100%)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 opacity-10"
      />

      <div className="relative z-10 max-w-6xl w-full px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-12"
        >
          Get In <span className="text-[#ff7b00]">Touch</span>
        </motion.h2>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 text-left"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-[#ff7b00]" />
              <div>
                <h4 className="text-lg font-semibold text-[#ff7b00]">Email</h4>
                <p className="text-gray-300">contact@vyomgarud.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#ff7b00]" />
              <div>
                <h4 className="text-lg font-semibold text-[#ff7b00]">Phone</h4>
                <p className="text-gray-300">+91 88814 44693</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#ff7b00]" />
              <div>
                <h4 className="text-lg font-semibold text-[#ff7b00]">Location</h4>
                <p className="text-gray-300">Bangalore, India</p>
              </div>
            </div>
          </motion.div>

        
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_30px_rgba(255,123,0,0.2)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-b border-gray-500 focus:border-[#ff7b00] outline-none text-white py-2 px-2 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border-b border-gray-500 focus:border-[#ff7b00] outline-none text-white py-2 px-2 transition-all"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-transparent border-b border-gray-500 focus:border-[#ff7b00] outline-none text-white py-2 px-2 mb-6 transition-all"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full bg-[#ff7b00] text-black font-semibold py-3 rounded-xl shadow-[0_0_15px_rgba(255,123,0,0.4)] hover:shadow-[0_0_25px_rgba(255,123,0,0.8)] transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </motion.form>
        </div>

      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 text-gray-400 text-sm tracking-widest uppercase"
        >
         
        </motion.div>
      </div>
    </section>
  );
}
