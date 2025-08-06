'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { socialLinks } from '@/utils/socials'
import { SocialIcon } from '@/components/ui/SocialIcon'

const Connect = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
        style={{ color: 'var(--primary-text-color)' }}
      >
        Let&apos;s Connect
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg p-8"
          style={{
            backgroundColor: 'var(--card-bgc)',
            color: 'var(--card-tc)',
            border: '1px solid var(--card-bc)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-text-color)' }}>
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div
                className="p-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: 'var(--icon-bgc)',
                  color: 'var(--icon-color)'
                }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-lg mt-1">touseefahmed0707@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="p-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: 'var(--icon-bgc)',
                  color: 'var(--icon-color)'
                }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-lg mt-1">Fujairah, United Arab Emirates</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-medium mb-4" style={{ color: 'var(--primary-text-color)' }}>
              Follow Me
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  icon={social.icon}
                  url={social.url}
                  color={social.name === 'GitHub' || social.name === 'Email' ? 'black' : social.color}
                  name={social.name}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg p-8"
          style={{
            backgroundColor: 'var(--card-bgc)',
            color: 'var(--card-tc)',
            border: '1px solid var(--card-bc)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-text-color)' }}>
            Send Me a Message
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--primary-text-color)',
                    border: '1px solid var(--card-bc)'
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--primary-text-color)',
                    border: '1px solid var(--card-bc)'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--primary-text-color)',
                  border: '1px solid var(--card-bc)'
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--primary-text-color)',
                  border: '1px solid var(--card-bc)'
                }}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg font-medium cursor-pointer"
              style={{
                backgroundColor: 'var(--icon-bgc)',
                color: 'var(--icon-color)'
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Connect