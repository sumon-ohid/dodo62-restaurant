"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function QuickInfo() {
  return (
    <section className="py-12 md:py-16 bg-white relative">
      {/* Notion-style doodles */}
      <div className="absolute top-4 left-4 md:top-8 md:left-12 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🍜
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-12 z-10">
        <motion.div
          className="text-base md:text-lg"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-4 md:left-8 z-10">
        <motion.div
          className="text-sm md:text-base"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🌶️
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            className="text-center p-6 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-black" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-handwriting">Opening Hours</h3>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">Tue-Sun: 12:00 - 23:00</p>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">Closed on Mondays</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-black" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-handwriting">Location</h3>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">Vienna, Austria</p>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">City Center</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Phone className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-black" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 font-handwriting">Contact</h3>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">+43 1 234 567 890</p>
            <p className="text-gray-600 text-sm md:text-base font-handwriting">info@dodo62.at</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 