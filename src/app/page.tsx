"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Star, Utensils, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            dodo62
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contemporary Austrian cuisine in the heart of Vienna
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#reservations" 
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-600" />
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
              <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-600" />
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
              <Phone className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">+43 1 234 567 890</p>
              <p className="text-gray-600">info@dodo62.at</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of contemporary Austrian dishes, 
              crafted with the finest local ingredients and innovative techniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden group-hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-lg font-medium text-gray-600">€{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a 
              href="#full-menu" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Full Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About dodo62</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, dodo62 brings a fresh perspective to traditional Austrian cuisine. 
                Our chef combines time-honored recipes with modern culinary techniques, creating 
                dishes that honor our heritage while embracing contemporary tastes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We source our ingredients from local farmers and producers, ensuring the highest 
                quality while supporting our community. Every dish tells a story of tradition, 
                innovation, and passion for exceptional food.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-gray-600" />
                  <span className="text-sm text-gray-600">Award-winning cuisine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-gray-600" />
                  <span className="text-sm text-gray-600">Intimate atmosphere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-6 h-6 text-gray-600" />
                  <span className="text-sm text-gray-600">Seasonal menu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-gray-600" />
                  <span className="text-sm text-gray-600">5-star reviews</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-96 bg-gray-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of tradition and innovation at dodo62. 
              We look forward to welcoming you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Vienna, Austria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+43 1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@dodo62.at</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">Tue-Sun: 12:00 - 23:00</p>
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
              <h3 className="text-2xl font-semibold mb-6">Make a Reservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
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
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <textarea
                  placeholder="Special requests or dietary requirements"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Book Table
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const menuItems = [
  {
    name: "Wiener Schnitzel",
    price: "24",
    description: "Traditional Austrian veal cutlet, breaded and pan-fried to perfection",
    tags: ["Traditional", "Austrian"]
  },
  {
    name: "Tafelspitz",
    price: "28",
    description: "Boiled beef with root vegetables and horseradish sauce",
    tags: ["Traditional", "Beef"]
  },
  {
    name: "Kaiserschmarrn",
    price: "16",
    description: "Fluffy shredded pancake with plum compote and powdered sugar",
    tags: ["Dessert", "Sweet"]
  },
  {
    name: "Goulash Soup",
    price: "12",
    description: "Rich beef stew with paprika and caraway seeds",
    tags: ["Soup", "Spicy"]
  },
  {
    name: "Apfelstrudel",
    price: "14",
    description: "Classic apple strudel with vanilla sauce",
    tags: ["Dessert", "Traditional"]
  },
  {
    name: "Grüner Veltliner",
    price: "18",
    description: "Premium Austrian white wine, perfect with seafood",
    tags: ["Wine", "Austrian"]
  }
];
