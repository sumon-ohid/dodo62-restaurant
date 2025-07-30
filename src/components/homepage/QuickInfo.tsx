"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function QuickInfo() {
  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Notion-style doodles */}
      <div className="absolute top-8 left-12 z-10">
        <motion.div
          className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-lg"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🍜
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 right-12 z-10">
        <motion.div
          className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center text-sm"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-8 z-10">
        <motion.div
          className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🌶️
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-600">Tue-Sun: 12:00 - 23:00</p>
            <p className="text-gray-600">Closed on Mondays</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Vienna, Austria</p>
            <p className="text-gray-600">City Center</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">+43 1 234 567 890</p>
            <p className="text-gray-600">info@dodo62.at</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 