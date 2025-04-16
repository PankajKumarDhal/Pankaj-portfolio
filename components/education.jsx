"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Star } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const education = [
  {
    year: "2021-2023",
    degree: "MCA",
    institution: "Central University of Karnataka",
    score: "7.60",
  },
  {
    year: "2018-2021",
    degree: "PHYSICS",
    institution: "Fakir Mohan University, Balasore",
    score: "7.47",
  },
]

const achievements = [
  "Full Stack Web Development Course, Geekster.",
  "Led Geekathon in geekster where we have created Parker Clone.",
  "Deep learning Workshop on Nvidia.",
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
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
          className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl"
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
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-white/5 border-white/10">
                        <TableHead className="text-cyan-400">Year</TableHead>
                        <TableHead className="text-cyan-400">Degree</TableHead>
                        <TableHead className="text-cyan-400">Institution</TableHead>
                        <TableHead className="text-cyan-400">CGPA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {education.map((edu, index) => (
                        <TableRow
                          key={index}
                          className="hover:bg-white/5 transition-colors duration-200 border-white/10"
                        >
                          <TableCell className="font-medium text-white">{edu.year}</TableCell>
                          <TableCell className="text-gray-300">{edu.degree}</TableCell>
                          <TableCell className="text-gray-300">{edu.institution}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-cyan-400">
                              {edu.score}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
                <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                    <Award className="h-6 w-6 text-amber-400" />
                  </div>
                  <CardTitle className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Achievements & Co-Curricular Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-amber-500/5 to-orange-500/5 hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          <Star className="h-4 w-4" />
                        </div>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
