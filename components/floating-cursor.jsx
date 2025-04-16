"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners for links and buttons
    const links = document.querySelectorAll("a, button")

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorVariant("hover"))
      link.addEventListener("mouseleave", () => setCursorVariant("default"))
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorVariant("hover"))
        link.removeEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(255, 107, 107, 0.4)",
      border: "2px solid rgba(255, 107, 107, 0.8)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  // Only show custom cursor on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  )
}
