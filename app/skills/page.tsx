'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/utils/skillData';
import Image from 'next/image';
import { TypewriterText } from '@/components/ui/TypewriterText';

const Skills = () => {
  const skillLines = [
    "Technologies I've Mastered",
    "My Development Toolkit",
    "Skills & Expertise"
  ];
  
  return (
    <div style={{
      background: 'var(--background)'
    }} >
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
          style={{ color: 'var(--primary-text-color)' }}
        >
           <TypewriterText 
            lines={skillLines} 
            className="inline-block"
            cursorClassName="inline-block w-1 h-8 bg-cyan-400 ml-1"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg p-6 shadow-lg flex flex-col bg-gray-400/30 dark:bg-gray-400/25 backdrop-blur-sm"
                style={{
                  // backgroundColor: 'var(--card-bgc)',
                  color: 'var(--card-tc)',
                  border: '1px solid var(--card-bc)',
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div
                      className="mr-3 p-2 rounded-full"
                      style={{ backgroundColor: 'var(--foreground)' }}
                    >
                      <Icon className="w-6 h-6 var(--primary-text-color)" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      // Determine if the icon is a valid URL (basic check)
                      const isValidIcon = skill.icon && (skill.icon.startsWith('http') || skill.icon.startsWith('/'));
                      const iconSrc = isValidIcon ? skill.icon : `https://via.placeholder.com/32?text=${skill.name.charAt(0)}`;
                      return (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          className="flex flex-col items-center p-3 rounded-md relative"
                          style={{ backgroundColor: 'var(--skill-foreground)', color: 'var(--skill-text-color)' }}
                        >
                          <div className="w-8 h-8 mb-2">
                            <Image
                              src={iconSrc}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain bg-gray-200 rounded"
                              unoptimized={iconSrc.startsWith('http')}
                            />
                          </div>
                          <span className="text-xs text-center">{skill.name}</span>
                          {/* Proficiency bar for each skill */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-b-md overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{
                                duration: 2,
                                ease: "easeInOut"
                              }}
                              className="h-full bg-cyan-400 rounded-b-md"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;