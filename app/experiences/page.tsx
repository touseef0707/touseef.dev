'use client';
import { experiences } from '@/utils/experienceData';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';

const experienceLines = [
  "Work Experience"
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen" style={{
      background: 'var(--background)'
    }}>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-2"
            style={{ color: 'var(--primary-text-color)' }}
          >
            <TypewriterText
              lines={experienceLines}
              className="inline-block"
              cursorClassName="inline-block w-1 h-8 bg-cyan-400 ml-1"
            />
          </motion.h2>
          <p className="text-lg text-[var(--primary-text-color)] max-w-2xl mx-auto">
            My professional experience and contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white z-10 mx-auto md:mx-0">
                <span className="text-sm font-bold">{index + 1}</span>
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mt-4 md:mt-0`}>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-gray-200/20 shadow-sm">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--primary-text-color)]">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-500">{exp.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500">
                        {exp.type}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                        {exp.arrangement}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'var(--primary-text-color)'}}>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.time}</span>
                  </div>

                  {/* Tasks */}
                  <ul className="space-y-2 mb-6">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-[var(--card-tc)]">{task}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-medium mb-2" style={{color: 'var(--primary-text-color)'}}>
                      SKILLS USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillStack.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--skill-foreground)] text-[var(--skill-text-color)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}