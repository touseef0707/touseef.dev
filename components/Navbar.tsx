'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Connect', href: 'connect' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Experience', href: 'experiences' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--nav-body-color)] text-[var(--nav-text-color)] shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Home */}
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition">
            Touseef.dev
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeSwitch />
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitch />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-2 space-y-4 pb-4 text-sm font-medium">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block px-2 py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;