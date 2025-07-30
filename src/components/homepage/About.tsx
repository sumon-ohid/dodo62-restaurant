"use client";

import { motion } from "framer-motion";
import { Star, Utensils, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      {/* Notion-style doodles */}
      <div className="absolute top-16 right-8 z-10">
        <motion.div
          className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-xl"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🇰🇷
        </motion.div>
      </div>
      
      <div className="absolute bottom-24 right-16 z-10">
        <motion.div
          className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-lg"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          🥢
        </motion.div>
      </div>
      
      <div className="absolute top-32 left-12 z-10">
        <motion.div
          className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-sm"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          🍚
        </motion.div>
      </div>

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
              Founded in 2020, dodo62 brings the authentic flavors of Korea to Vienna. 
              Our chef, trained in traditional Korean culinary arts, combines 
              time-honored recipes with fresh local ingredients, creating dishes 
              that honor Korean heritage while embracing modern dining.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We source our ingredients from local farmers and import authentic 
              Korean spices and sauces. Every dish tells a story of tradition, 
              family, and the love of good food that Korean cuisine is known for.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-red-600" />
                <span className="text-sm text-gray-600">Authentic Korean</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-red-600" />
                <span className="text-sm text-gray-600">Family recipes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Utensils className="w-6 h-6 text-red-600" />
                <span className="text-sm text-gray-600">Fresh ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-red-600" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 