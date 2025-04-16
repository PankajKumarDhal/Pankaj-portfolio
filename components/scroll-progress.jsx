"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm font-medium z-50 hidden md:flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {scrollPercentage}%
      </motion.div>
    </>
  )
}
