"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Pankaj Kumar
            </h3>
            <p className="text-gray-400 mb-4">
              A passionate Frontend Developer building modern and responsive web
              applications.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/PankajKumarDhal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/pankaj-kumar-dhal-206131229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:pankaj21dhal@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Contact",
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span> {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bangalore, Karnataka</li>
              <li>pankaj21dhal@gmail.com</li>
              <li>+91 8917237614</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pankaj Kumar Dhal. All rights reserved.
          </p>

          <div className="flex items-center">
            <p className="text-sm text-gray-400 flex items-center mr-4">
              Made with <Heart className="h-4 w-4 text-pink-500 mx-1" /> and
              React.js
            </p>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
