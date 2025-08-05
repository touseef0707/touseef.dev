'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <motion.div
          initial={{ rotate: 0, color: "currentColor" }}
          whileHover={{ 
            rotate: 90,
            color: "#22d3ee" // cyan-400
          }}
          transition={{ duration: 0.3 }}
        >
          <FiSun className="w-5 h-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 0, color: "currentColor" }}
          whileHover={{ 
            rotate: 30,
            color: "#26C6DA" // white
          }}
          transition={{ type: 'spring', stiffness: 300, duration: 0.3 }}
        >
          <FiMoon className="w-5 h-5" />
        </motion.div>
      )}
    </motion.button>
  )
}