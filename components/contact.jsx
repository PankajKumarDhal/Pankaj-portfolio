"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Contact() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Send the email using server action
      const result = await sendContactEmail(formData);

      if (result.success) {
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
          duration: 5000,
          className:
            "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Show error message
        setFormError(
          result.message || "Failed to send message. Please try again later."
        );

        toast({
          title: "Error sending message",
          description:
            result.message || "Failed to send message. Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("An unexpected error occurred. Please try again later.");

      toast({
        title: "Error sending message",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
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
              Contact Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
                <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formError && (
                    <Alert
                      variant="destructive"
                      className="mb-4 bg-red-500/10 border-red-500/50 text-red-200"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{formError}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-white/10 focus:border-pink-500/50 pl-10 bg-black/20 text-white placeholder:text-gray-500"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                        👤
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-white/10 focus:border-pink-500/50 pl-10 bg-black/20 text-white placeholder:text-gray-500"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                        ✉️
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-white/10 focus:border-pink-500/50 pl-10 bg-black/20 text-white placeholder:text-gray-500"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                        📝
                      </div>
                    </div>
                    <div className="relative">
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="border-white/10 focus:border-pink-500/50 pl-10 bg-black/20 text-white placeholder:text-gray-500"
                      />
                      <div className="absolute left-3 top-6 text-pink-400">
                        💬
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-pink-500/20 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:from-pink-500/10 hover:to-purple-500/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-pink-400">Email</h3>
                      <p className="text-gray-300">pankaj21dhal@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-cyan-500/5 to-blue-500/5 hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-cyan-400">Phone</h3>
                      <p className="text-gray-300">+91 8917237614</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-amber-500/5 to-orange-500/5 hover:from-amber-500/10 hover:to-orange-500/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-400">Location</h3>
                      <p className="text-gray-300">Bangalore, Karnataka</p>
                    </div>
                  </motion.div>

                  <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700">
                    <h3 className="font-medium text-white mb-2">
                      Connect With Me
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Let's connect and discuss how we can work together!
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        href="https://github.com/PankajKumarDhal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <Github className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/pankaj-kumar-dhal-206131229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href="mailto:pankaj21dhal@gmail.com"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <motion.div
                    className="mt-4 flex justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 text-white"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1f5ZjuK6ah05XIHS58-BewUfgmI01KFSB/view?usp=sharing"
                        download="Pankaj_Kumar_Resume.pdf"
                      >
                        Download Resume <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
