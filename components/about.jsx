"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tilt } from "react-tilt";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const defaultTiltOptions = {
    max: 15,
    scale: 1.05,
    speed: 1000,
    glare: true,
    "max-glare": 0.3,
  };

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-3xl"
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
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <Tilt options={defaultTiltOptions} className="group">
                <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/20 to-pink-500/20 p-1 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-pink-500 opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-900">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center text-white bg-slate-800/50 relative">
                      <Image
                        // src="/placeholder.svg?height=400&width=400"
                        src="/pankaj - Copy.png"
                        alt="Pankaj Kumar Dhal"
                        width={400}
                        height={400}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay with animated border */}
                      <div className="absolute inset-0 border-[3px] border-transparent rounded-xl overflow-hidden">
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-pink-500 to-amber-500 animate-gradient-x"></div> */}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <motion.div
                      className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 1,
                      }}
                    />
                  </div>
                </div>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <motion.p
                    className="text-lg mb-4 leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    I'm a{" "}
                    <span className="font-semibold text-amber-400">
                      Full Stack Developer
                    </span>{" "}
                    with experience in building responsive and performant web
                    applications using modern technologies.
                  </motion.p>
                  <motion.p
                    className="text-lg mb-4 leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Currently working at{" "}
                    <span className="font-semibold text-pink-400">
                      Digital Think Technologies LLP
                    </span>{" "}
                    in Bangalore, where I collaborate with cross-functional
                    teams to develop cutting-edge real estate ERP software
                    solutions.
                  </motion.p>
                  <motion.p
                    className="text-lg mb-4 leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I'm passionate about creating intuitive user interfaces and
                    optimizing web performance. My expertise includes{" "}
                    <span className="font-semibold text-cyan-400">
                      React.js
                    </span>
                    ,{" "}
                    <span className="font-semibold text-violet-400">
                      JavaScript
                    </span>
                    ,{" "}
                    <span className="font-semibold text-yellow-400">
                      tailwind css
                    </span>
                    , , and various frontend frameworks and libraries.
                  </motion.p>
                  <motion.p
                    className="text-lg leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    When I'm not coding, I enjoy solving DSA problems and
                    participating in coding contests to continuously improve my
                    skills.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
