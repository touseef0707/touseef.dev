'use client'

import React from 'react'
import {motion} from 'framer-motion'

const skills = () => {
  return (
    <section>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Hello, Framer Motion in Next.js!</h1>
        </motion.div>

    </section>
  )
}

export default skills