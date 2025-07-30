"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-4">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="dodo62 logo" 
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <motion.span 
              className="font-handwriting font-bold text-xl md:text-2xl text-black"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              dodo62
            </motion.span>
            <motion.span 
              className="text-lg md:text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🇰🇷
            </motion.span>
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-1 items-end justify-end space-x-6 text-md font-medium">
          <motion.a 
            href="#menu" 
            className="transition-colors hover:text-gray-600 text-gray-800 font-handwriting"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Menu
          </motion.a>
          <motion.a 
            href="#about" 
            className="transition-colors hover:text-gray-600 text-gray-800 font-handwriting"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            className="transition-colors hover:text-gray-600 text-gray-800 font-handwriting"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
          <motion.a 
            href="#reservations" 
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwriting"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Reservations
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <nav className="container px-4 py-4 space-y-4">
            <motion.a 
              href="#menu" 
              className="block transition-colors hover:text-gray-600 text-gray-800 font-handwriting text-lg"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </motion.a>
            <motion.a 
              href="#about" 
              className="block transition-colors hover:text-gray-600 text-gray-800 font-handwriting text-lg"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              className="block transition-colors hover:text-gray-600 text-gray-800 font-handwriting text-lg"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </motion.a>
            <motion.a 
              href="#reservations" 
              className="block px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwriting text-lg text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Reservations
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
} 