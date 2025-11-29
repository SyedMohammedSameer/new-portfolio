"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // try {
    //   // Here you would typically send the form data to your backend
    //   await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    //   setSubmitSuccess(true)
    //   reset()
    //   setTimeout(() => setSubmitSuccess(false), 3000)
    // } catch (error) {
    //   console.error("Error submitting form:", error)
    // } finally {
    //   setIsSubmitting(false)
    // }

    // Send data to Formspree if validation passes
    setIsSubmitting(true);
    const response = await fetch("https://formspree.io/f/myzezpdo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      const errorData = await response.json();
      console.error("Error submitting form:", errorData);
      alert("There was an error submitting your form. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              {/* Animated gradient blob */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:musmanzafar53@gmail.com"
                    className="flex items-center glass px-4 py-3 rounded-xl hover:glow-blue transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <Mail className="w-6 h-6 mr-3 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">mohammedsameersyed1@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+923055356766"
                    className="flex items-center glass px-4 py-3 rounded-xl hover:glow-blue transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <Phone className="w-6 h-6 mr-3 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">+1 (520)250-6750</span>
                  </motion.a>
                  <motion.div
                    className="flex items-center glass px-4 py-3 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Arizona, USA</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 rounded-2xl relative overflow-hidden"
            >
              {/* Animated gradient blob */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <motion.input
                    {...register("name")}
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl glass border-2 ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/20 dark:border-gray-600/30"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300`}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <motion.input
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl glass border-2 ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/20 dark:border-gray-600/30"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300`}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <motion.input
                  {...register("subject")}
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl glass border-2 ${
                    errors.subject
                      ? "border-red-500"
                      : "border-white/20 dark:border-gray-600/30"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <motion.textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl glass border-2 ${
                    errors.message
                      ? "border-red-500"
                      : "border-white/20 dark:border-gray-600/30"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all duration-300 resize-none`}
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden group ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
              {submitSuccess && (
                <motion.div
                  className="mt-4 p-4 glass-card rounded-xl border-2 border-green-500/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-green-600 dark:text-green-400 font-semibold text-center">
                    Message sent successfully!
                  </p>
                </motion.div>
              )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
