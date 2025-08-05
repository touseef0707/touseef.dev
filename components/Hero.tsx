'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant, zoomIn, staggerContainer } from "@/utils/animations";

export default function Hero() {
  const textLines = [
    "Building scalable web apps with 3+ years experience.",
    "Passionate about AI automation and cloud solutions."
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full max-w-4xl mx-auto py-12 px-4"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image - Now on left side */}
        <motion.div
          variants={zoomIn(0.2)}
          className="w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[var(--primary-accent-color)] order-first md:order-none"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/152942742?v=4"
            alt="Touseef Ahmed"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h1 
            variants={textVariant(0.1)}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Touseef Ahmed
          </motion.h1>
          
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-xl md:text-2xl text-blue-500 mb-4"
          >
            Full Stack Developer | Cloud Architect | AI Enthusiast
          </motion.h2>
          
          <div className="mb-6">
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  visualDuration: 2,
                }}
                className="overflow-hidden whitespace-nowrap"
              >
                <motion.p 
                  className="text-[var(--primary-text-color)] opacity-90"
                >
                  {line}
                </motion.p>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            variants={fadeIn("up", 0.4)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            Explore My Work →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}