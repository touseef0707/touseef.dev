'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/utils/skillData';

const Skills = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
        style={{ color: 'var(--primary-text-color)' }}
      >
        My Skills
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
              className="rounded-lg p-6 shadow-lg flex flex-col"
              style={{
                backgroundColor: 'var(--card-bgc)',
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
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-3 rounded-md relative"
                      style={{ backgroundColor: 'var(--skill-foreground)', color: 'var(--skill-text-color)' }}
                    >
                      <div className="w-8 h-8 mb-2">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = `https://via.placeholder.com/32?text=${skill.name.charAt(0)}`;
                            target.className = 'w-full h-full object-contain bg-gray-200 rounded';
                          }}
                        />
                      </div>
                      <span className="text-xs text-center">{skill.name}</span>
                      {/* Proficiency bar for each skill */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-b-md">
                        <div 
                          className="h-full bg-cyan-400 rounded-b-md"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;