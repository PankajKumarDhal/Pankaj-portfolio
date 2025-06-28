"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Digital Think Technologies LLP",
    period: "Feb 2025 - Present",
    location: "Bangalore, Karnataka (On-site)",
    type: "work",
    color: "from-pink-500 to-purple-500",
    description: [
      "Collaborated with frontend and backend teams to build and integrate scalable, secure, and efficient web solutions.",
      "Contributing expertise in developing cutting-edge real estate ERP software solutions, optimizing operational efficiency and enhancing user experience.",
    ],
  },
  {
    title: "Apprenticeship",
    company: "Geekster Coding Bootcamp",
    period: "Feb 2024 - Present",
    location: "Remote",
    type: "education",
    color: "from-cyan-500 to-blue-500",
    description: [
      "Solved 400+ DSA/Coding questions and participated in various Coding contests organised by the platform.",
      "Worked on various projects like Ecommerce Application, Cloud Storage Application, Cryptoview.",
      "Technical Stack Learned: HTML, CSS, JavaScript, React JS, Node JS, Bootstrap, SQL, MongoDB, Java and DSA.",
    ],
  },
  {
    title: "Internship",
    company: "Baioam innovations pvt.ltd.",
    period: "Feb 2023 - Jul 2023",
    location: "Noida, Uttar Pradesh",
    type: "work",
    color: "from-amber-500 to-orange-500",
    description: [
      "Contributed to development of front-end webpage using React.js and RESTful APIs.",
      "Tools and Technologies used: MERN Stack, MongoDB, Node, React.js, HTML, CSS, JavaScript, Bootstrap.",
      "Responsible for monitoring and increasing the feasibility of content across various sections within the website.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
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
          className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
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
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-16 relative">
            {/* Timeline line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`md:flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 relative`}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-[50%] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>

                {/* Date badge for mobile */}
                <div className="md:hidden mb-4">
                  <Badge
                    variant="outline"
                    className={`bg-gradient-to-r ${exp.color} text-white border-none px-3 py-1.5 text-sm font-medium`}
                  >
                    {exp.period}
                  </Badge>
                </div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  }`}
                >
                  {/* Date badge for desktop */}
                  <div className="hidden md:block mb-2">
                    <Badge
                      variant="outline"
                      className={`bg-gradient-to-r ${exp.color} text-white border-none px-3 py-1.5 text-sm font-medium`}
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm group">
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${exp.color}`}
                    ></div>
                    <CardHeader
                      className={`pb-2 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1 justify-between md:justify-start">
                        <div
                          className={`flex items-center gap-2 ${
                            index % 2 === 1
                              ? "md:flex-row"
                              : "md:flex-row-reverse"
                          }`}
                        >
                          {exp.type === "work" ? (
                            <Briefcase
                              className={`h-5 w-5 ${
                                exp.type === "work"
                                  ? "text-pink-400"
                                  : exp.type === "education"
                                  ? "text-cyan-400"
                                  : "text-amber-400"
                              }`}
                            />
                          ) : exp.type === "education" ? (
                            <GraduationCap
                              className={`h-5 w-5 ${
                                exp.type === "work"
                                  ? "text-pink-400"
                                  : exp.type === "education"
                                  ? "text-cyan-400"
                                  : "text-amber-400"
                              }`}
                            />
                          ) : (
                            <Code
                              className={`h-5 w-5 ${
                                exp.type === "work"
                                  ? "text-pink-400"
                                  : exp.type === "education"
                                  ? "text-cyan-400"
                                  : "text-amber-400"
                              }`}
                            />
                          )}
                          <CardTitle
                            className="text-white group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 ease-in-out"
                            style={{
                              backgroundImage: `linear-gradient(to right, ${
                                exp.type === "work"
                                  ? "#ec4899, #a855f7"
                                  : exp.type === "education"
                                  ? "#06b6d4, #3b82f6"
                                  : "#f59e0b, #f97316"
                              })`,
                            }}
                          >
                            {exp.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription
                        className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ${
                          index % 2 === 1
                            ? "md:justify-start"
                            : "md:justify-end"
                        } text-gray-400`}
                      >
                        <span className="font-medium">{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul
                        className={`list-disc ${
                          index % 2 === 0
                            ? "md:pl-0 md:pr-5 md:list-inside"
                            : "pl-5"
                        } space-y-1`}
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty div to maintain layout for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
