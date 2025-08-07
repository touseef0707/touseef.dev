'use client';
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypewriterText } from "@/components/ui/TypewriterText";

export default function Hero() {
  const textLines = [
    "Building scalable web apps with 3+ years experience",
    "Passionate about AI automation and cloud solutions",
    "Full Stack Developer | Cloud Architect | AI Enthusiast"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-50 bg-gray-400/20 dark:bg-gray-400/10 backdrop-blur-sm rounded-2xl"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image with animation */}
        <motion.div
          variants={imageVariants}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--primary-accent-color)] shadow-lg order-first md:order-none"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/152942742?v=4"
            alt="Touseef Ahmed"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500 opacity-20 mix-blend-overlay" />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Hey, It's Touseef Ahmed!
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center"
          >
            <p className="text-xl md:text-2xl text-[var(--primary-text-color)]">
              <TypewriterText 
                lines={textLines}
                speed={100}
                delayBetweenLines={1500}
                className="inline-block"
                cursorClassName="inline-block w-1 h-6 bg-blue-500 ml-1"
              />
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[var(--primary-text-color)] max-w-2xl"
          >
            Versatile and results-driven Full Stack Web Developer with expertise in building scalable, user-focused applications and integrating AI to automate workflows.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <Link
              href="projects"
              scroll={false}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore My Work →
            </Link>
            <Link
              href="connect"
              scroll={false}
              className="px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}