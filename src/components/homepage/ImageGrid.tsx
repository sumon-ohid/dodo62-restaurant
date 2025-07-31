"use client";

import { motion } from "framer-motion";

export default function ImageGrid() {
  return (
    <div className="w-full bg-white py-2 lg:py-4">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <img 
              src="/assets/img-1.png" 
              alt="Korean cuisine image 1" 
              className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors duration-300"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <img 
              src="/assets/img-2.png" 
              alt="Korean cuisine image 2" 
              className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors duration-300"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <img 
              src="/assets/img-3.png" 
              alt="Korean cuisine image 3" 
              className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors duration-300"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <img 
              src="/assets/img-4.png" 
              alt="Korean cuisine image 4" 
              className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-dashed border-gray-300 group-hover:border-gray-400 transition-colors duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 