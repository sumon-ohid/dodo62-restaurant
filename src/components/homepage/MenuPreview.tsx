"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Bibimbap",
    price: "18",
    description: "Mixed rice bowl with vegetables, egg, and gochujang sauce",
    tags: ["Traditional", "Vegetarian"]
  },
  {
    name: "Bulgogi",
    price: "24",
    description: "Marinated beef grilled to perfection with sweet soy sauce",
    tags: ["Popular", "Beef"]
  },
  {
    name: "Kimchi Jjigae",
    price: "16",
    description: "Spicy kimchi stew with pork and tofu",
    tags: ["Spicy", "Soup"]
  },
  {
    name: "Japchae",
    price: "14",
    description: "Stir-fried glass noodles with vegetables and beef",
    tags: ["Noodles", "Traditional"]
  },
  {
    name: "Samgyeopsal",
    price: "26",
    description: "Korean BBQ pork belly with fresh lettuce wraps",
    tags: ["BBQ", "Pork"]
  },
  {
    name: "Tteokbokki",
    price: "12",
    description: "Spicy rice cakes with fish cakes in gochujang sauce",
    tags: ["Street Food", "Spicy"]
  }
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-12 md:py-20 bg-gray-50 relative">
      {/* Notion-style doodles */}
      <div className="absolute top-4 left-4 md:top-10 md:left-8 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🌶️
        </motion.div>
      </div>
      
      <div className="absolute top-8 right-4 md:top-20 md:right-12 z-10">
        <motion.div
          className="text-base md:text-lg"
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🥬
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-4 md:bottom-20 md:left-16 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🍖
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-handwriting">Our Menu</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-handwriting">
            Discover our authentic Korean dishes, crafted with traditional recipes 
            and the finest ingredients. From spicy kimchi to tender bulgogi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="h-32 md:h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-semibold font-handwriting">{item.name}</h3>
                    <span className="text-base md:text-lg font-medium text-gray-600 font-handwriting">€{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base font-handwriting">{item.description}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 font-handwriting"
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
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="#full-menu" 
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors font-handwriting text-sm md:text-base"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
} 