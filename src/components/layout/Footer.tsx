"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white relative">
      {/* Notion-style doodles */}
      <div className="absolute top-2 left-4 md:top-4 md:left-8 z-10">
        <motion.div
          className="text-xs md:text-sm"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🍜
        </motion.div>
      </div>
      
      <div className="absolute top-1 right-4 md:top-2 md:right-12 z-10">
        <motion.div
          className="text-xs md:text-sm"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center mb-3 md:mb-4">
              <img 
                src="/logo.png" 
                alt="dodo62 logo" 
                className="h-12 md:h-16 w-auto mr-4"
              />
            </div>
            <p className="text-sm text-gray-600 mb-3 md:mb-4 font-handwriting">
              Authentic Korean cuisine in the heart of Vienna. 
              Experience the flavors of Korea with every bite.
            </p>
            <div className="flex space-x-4">
              <motion.span 
                className="text-xl md:text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                🇰🇷
              </motion.span>
              <motion.span 
                className="text-xl md:text-2xl"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.2 }}
              >
                🍜
              </motion.span>
              <motion.span 
                className="text-xl md:text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                🌶️
              </motion.span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4 font-handwriting">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-gray-600 hover:text-gray-800 transition-colors font-handwriting">Menu</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors font-handwriting">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors font-handwriting">Contact</a></li>
              <li><a href="#reservations" className="text-gray-600 hover:text-gray-800 transition-colors font-handwriting">Reservations</a></li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3 md:mb-4 font-handwriting">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-black" />
                <span className="font-handwriting">Hebragasse 11, 1090 Wien</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-black" />
                <span className="font-handwriting">+43 664 3450615</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-black" />
                <span className="font-handwriting">hello@dodo62.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-black" />
                <span className="font-handwriting">Wed-Sun: 5:00 - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-2 md:mb-0 font-handwriting">
            © 2024 dodo62. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 text-sm text-gray-500 font-handwriting">
            <span>Hebragasse 11, 1090 Wien</span>
            <span className="hidden md:inline">•</span>
            <span>+43 664 3450615</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 