// app/page.tsx or pages/index.tsx (depending on your setup)
import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 bg-[var(--background)] text-[var(--primary-text-color)] transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center">Welcome to the Themed App 🌗</h1>
      
      <p className="text-lg max-w-xl text-center">
        Toggle the theme using the switch in the navbar. This page updates styles using CSS variables that respond to light and dark modes.
      </p>

      <footer className="text-sm text-center opacity-70 mt-10">
        © 2025 YourSite. All rights reserved.
      </footer>
    </main>
  );
}
