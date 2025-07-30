"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background relative">
      {/* Notion-style doodles */}
      <div className="absolute top-4 left-8 z-10">
        <motion.div
          className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-xs"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🍜
        </motion.div>
      </div>
      
      <div className="absolute top-2 right-12 z-10">
        <motion.div
          className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-xs"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">dodo62</h3>
            <p className="text-sm text-gray-600 mb-4">
              Authentic Korean cuisine in the heart of Vienna. 
              Experience the flavors of Korea with every bite.
            </p>
            <div className="flex space-x-4">
              <motion.span 
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                🇰🇷
              </motion.span>
              <motion.span 
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.2 }}
              >
                🍜
              </motion.span>
              <motion.span 
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                🌶️
              </motion.span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-gray-600 hover:text-red-600 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</a></li>
              <li><a href="#reservations" className="text-gray-600 hover:text-red-600 transition-colors">Reservations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+43 1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span>info@dodo62.at</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span>Tue-Sun: 12:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 dodo62. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Vienna, Austria</span>
            <span>•</span>
            <span>+43 1 234 567 890</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 