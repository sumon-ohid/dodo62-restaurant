"use client";

import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Starters & Appetizers",
    items: [
      { name: "Kimchi", price: "6", description: "Traditional fermented cabbage with spicy seasoning" },
      { name: "Mandu", price: "8", description: "Korean dumplings with pork and vegetables" },
      { name: "Pajeon", price: "10", description: "Savory green onion pancake with seafood" },
      { name: "Gimbap", price: "9", description: "Korean rice rolls with vegetables and egg" }
    ]
  },
  {
    title: "Main Dishes",
    items: [
      { name: "Bibimbap", price: "18", description: "Mixed rice bowl with vegetables, egg, and gochujang sauce" },
      { name: "Bulgogi", price: "24", description: "Marinated beef grilled to perfection with sweet soy sauce" },
      { name: "Kimchi Jjigae", price: "16", description: "Spicy kimchi stew with pork and tofu" },
      { name: "Japchae", price: "14", description: "Stir-fried glass noodles with vegetables and beef" },
      { name: "Samgyeopsal", price: "26", description: "Korean BBQ pork belly with fresh lettuce wraps" },
      { name: "Tteokbokki", price: "12", description: "Spicy rice cakes with fish cakes in gochujang sauce" }
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Bingsu", price: "8", description: "Shaved ice dessert with sweet red bean and condensed milk" },
      { name: "Hotteok", price: "6", description: "Sweet filled pancakes with brown sugar and nuts" },
      { name: "Yakgwa", price: "7", description: "Traditional honey cookies with sesame seeds" }
    ]
  },
  {
    title: "Drinks",
    items: [
      { name: "Makgeolli", price: "8", description: "Traditional Korean rice wine" },
      { name: "Soju", price: "6", description: "Korean distilled spirit" },
      { name: "Sikhye", price: "4", description: "Sweet rice punch with pine nuts" },
      { name: "Korean Tea", price: "3", description: "Traditional green tea or barley tea" }
    ]
  }
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-12 md:py-20 bg-gray-50 relative">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
      
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

      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-handwriting text-black">Our Menu</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-handwriting">
            Traditional Korean Cuisine • 전통 한국 요리
          </p>
        </motion.div>

        {/* Paper menu container */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <div className="relative z-10 p-8 md:p-12">
            {menuSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="mb-8 md:mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black font-handwriting border-b-2 border-gray-400 pb-2">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="flex justify-between items-start py-1 border-b border-gray-200 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.2) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-lg md:text-xl font-semibold text-black font-handwriting">
                            {item.name}
                          </h4>
                          <span className="text-sm md:text-base font-medium text-gray-700 font-handwriting">
                            €{item.price}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 font-handwriting leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* Restaurant info at bottom */}
            <motion.div 
              className="text-center pt-6 border-t-2 border-gray-400 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm md:text-base text-gray-700 font-handwriting">
                Hebragasse 11, 1090 Wien • +43 664 3450615
              </p>
              <p className="text-xs md:text-sm text-gray-600 font-handwriting mt-1">
                Wed-Sun: 5:00 - 10:00 PM
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 