"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50 relative">
      {/* Notion-style doodles */}
      <div className="absolute top-4 left-4 md:top-12 md:left-8 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📞
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 right-4 md:bottom-16 md:right-8 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          📍
        </motion.div>
      </div>
      
      <div className="absolute top-16 right-4 md:top-40 md:right-20 z-10">
        <motion.div
          className="text-sm md:text-base"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🕐
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-handwriting">Visit Us</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-handwriting">
            Experience the authentic flavors of Korea at dodo62. 
            We look forward to welcoming you to our family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 font-handwriting">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <div>
                  <p className="font-medium font-handwriting">Address</p>
                  <p className="text-gray-600 font-handwriting">Hebragasse 11, 1090 Wien</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <div>
                  <p className="font-medium font-handwriting">Phone</p>
                  <p className="text-gray-600 font-handwriting">+43 664 3450615</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <div>
                  <p className="font-medium font-handwriting">Email</p>
                  <p className="text-gray-600 font-handwriting">hello@dodo62.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <div>
                  <p className="font-medium font-handwriting">Hours</p>
                  <p className="text-gray-600 font-handwriting">Wed-Sun: 5:00 - 10:00 PM</p>
                  <p className="text-gray-600 font-handwriting">Tue: 5:00 - 10:00 PM</p>
                  <p className="text-gray-600 font-handwriting">Monday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="reservations"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 font-handwriting">Make a Reservation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base"
                />
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base">
                  <option>Select Time</option>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base">
                  <option>Number of Guests</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base"
                />
              </div>
              <textarea
                placeholder="Special requests or dietary requirements"
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 font-handwriting text-sm md:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors font-handwriting text-sm md:text-base"
              >
                Book Table
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 