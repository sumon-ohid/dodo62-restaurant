"use client";

import { motion } from "framer-motion";
import { Star, Utensils, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white relative">
      {/* Notion-style doodles */}
      <div className="absolute top-8 right-4 md:top-16 md:right-8 z-10">
        <motion.div
          className="text-lg md:text-xl"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🇰🇷
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 right-4 md:bottom-24 md:right-16 z-10">
        <motion.div
          className="text-base md:text-lg"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>
      
      <div className="absolute top-16 left-4 md:top-32 md:left-12 z-10">
        <motion.div
          className="text-sm md:text-base"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          🍚
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-handwriting">About dodo62</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 font-handwriting">
              Founded in 2020, dodo62 brings the authentic flavors of Korea to Vienna. 
              Our chef, trained in traditional Korean culinary arts, combines 
              time-honored recipes with fresh local ingredients, creating dishes 
              that honor Korean heritage while embracing modern dining.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 font-handwriting">
              We source our ingredients from local farmers and import authentic 
              Korean spices and sauces. Every dish tells a story of tradition, 
              family, and the love of good food that Korean cuisine is known for.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <span className="text-sm md:text-base text-gray-600 font-handwriting">Authentic Korean</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <span className="text-sm md:text-base text-gray-600 font-handwriting">Family recipes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Utensils className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <span className="text-sm md:text-base text-gray-600 font-handwriting">Fresh ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-black" />
                <span className="text-sm md:text-base text-gray-600 font-handwriting">5-star reviews</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-64 md:h-96 bg-gray-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 