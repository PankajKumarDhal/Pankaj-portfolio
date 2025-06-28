"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home", color: "from-pink-500 to-orange-500" },
  { name: "About", href: "#about", color: "from-orange-500 to-amber-500" },
  {
    name: "Experience",
    href: "#experience",
    color: "from-amber-500 to-yellow-500",
  },
  { name: "Skills", href: "#skills", color: "from-yellow-500 to-lime-500" },
  {
    name: "Projects",
    href: "#projects",
    color: "from-lime-500 to-emerald-500",
  },
  {
    name: "Education",
    href: "#education",
    color: "from-emerald-500 to-cyan-500",
  },
  { name: "Contact", href: "#contact", color: "from-cyan-500 to-pink-500" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Pankaj Kumar
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group overflow-hidden",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r",
                    item.color,
                    "transition-all duration-300 transform",
                    activeSection === item.href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                ></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-pink-500/20 hover:shadow-lg">
              Resume
              <Link
                href="https://drive.google.com/file/d/1ouR2JNNF-nv5yKUAZ1XXYOEqUbLiZnrn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              ></Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.div variants={itemVariants} className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/80 backdrop-blur-md shadow-lg"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium py-2 block relative overflow-hidden",
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-gray-400"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "w-1 h-6 rounded-full mr-2 bg-gradient-to-r",
                        item.color
                      )}
                    ></div>
                    {item.name}
                  </div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                <span className="sr-only">Resume</span>
                <Link
                  href="https://drive.google.com/file/d/1ouR2JNNF-nv5yKUAZ1XXYOEqUbLiZnrn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
