"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tilt } from "react-tilt";

const projects = [
  {
    title: "Ecommerce Application",
    description:
      "Developed a robust ecommerce platform with dynamic user and admin Interface.",
    features: [
      "Implemented Login, Signup, Wishlist, Shopping cart, payment integration, dynamic About us, FAQs, Coupons, Reviews, Order status",
      "Express Rate Limiter, improving checkout speed by 40%",
    ],
    techStack: [
      "React JS",
      "Node JS",
      "MongoDB",
      "Tailwind",
      "Razorpay",
      "React Icons",
      "Git",
    ],
    githubLink: "#",
    liveLink: "#",
    image: "/placeholder.svg?height=200&width=400",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-500/10 to-purple-500/10",
  },
  {
    title: "Cloud Storage Application",
    description:
      "Engineered a sophisticated Cloud Storage Application leveraging React and Firebase, providing users with a seamless and feature-rich file management experience.",
    features: [
      "Implemented comprehensive functionalities, including user authentication for secure access, efficient file upload/download capabilities",
      "Intelligent trash management, and real-time updates facilitated by Firestore integration",
    ],
    techStack: [
      "React",
      "Styled Components",
      "Material-UI",
      "Redux",
      "Firebase",
      "React Toastify",
    ],
    githubLink: "#",
    liveLink: "#",
    image: "/placeholder.svg?height=200&width=400",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10",
  },
];

const defaultTiltOptions = {
  max: 10,
  scale: 1.03,
  speed: 1000,
  glare: true,
  "max-glare": 0.2,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
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
            <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-full"
              >
                <Tilt options={defaultTiltOptions} className="h-full">
                  <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm group">
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${project.color}`}
                    ></div>
                    <div className="w-full h-48 overflow-hidden relative group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                      ></div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    </div>
                    <CardHeader>
                      <CardTitle
                        className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-white">
                          Key Features:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-gray-300">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-white">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className={`text-xs bg-gradient-to-r ${project.bgColor} border-white/10 text-white`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
                          asChild
                        >
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" /> Code
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.color} hover:opacity-90 transition-all duration-300 text-white`}
                          asChild
                        >
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300 text-white px-6"
              asChild
            >
              <Link href="#contact">
                View More Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
