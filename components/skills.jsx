"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript"],
    icon: "💻",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-500/10 to-orange-500/10",
  },
  {
    name: "Frameworks & Libraries",
    skills: ["ReactJS", "Redux", "React-Router", "Tailwind CSS", "Bootstrap", "Node JS", "Express JS", "Chart JS"],
    icon: "🛠️",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-500/10 to-purple-500/10",
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase"],
    icon: "🗄️",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10",
  },
  {
    name: "Additional Skills",
    skills: ["Data Structure and Algorithms", "OOPs", "HTML", "CSS", "Figma", "WordPress", "Docker"],
    icon: "🧩",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
  {
    name: "Tools & Technologies",
    skills: ["GIT", "VS code", "Canva", "Adobe"],
    icon: "🔧",
    color: "from-yellow-500 to-amber-500",
    bgColor: "from-yellow-500/10 to-amber-500/10",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-green-500 via-emerald-500 to-yellow-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm group">
                  <div className={`h-1 w-full bg-gradient-to-r ${category.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${category.bgColor} text-2xl`}
                      >
                        {category.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {category.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`text-sm py-1.5 px-3 bg-gradient-to-r ${category.bgColor} border border-white/10 hover:border-white/20 text-white transition-all duration-300`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
