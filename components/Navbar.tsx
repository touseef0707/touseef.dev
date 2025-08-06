'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Experience', href: 'experiences' },
  { name: 'Connect', href: 'connect' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--nav-bgc)] text-[var(--nav-tc)] shadow-md backdrop-blur-sm bg-opacity-90 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Home */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors duration-200"
          >
            {'< / > Devfolio'} 
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center text-sm font-medium">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="relative group hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 dark:bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 ml pl-4">
              <div className='cursor-pointer'>
                <ThemeSwitch />
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitch />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <ul className="space-y-3 text-sm font-medium mb-4">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar