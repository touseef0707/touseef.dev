'use client';
import { useState } from 'react';
import { projects } from '@/utils/projectsData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projectLines = [
  "My Development Projects",
  "Recent Work Showcase",
  "Portfolio Highlights"
] ;

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div style={{ background: 'var(--background)' }}>
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with TypewriterText - matching Skills component style */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
          style={{ color: 'var(--primary-text-color)' }}
        >
          <TypewriterText 
            lines={projectLines}
            className="inline-block"
            cursorClassName="inline-block w-1 h-8 bg-cyan-400 ml-1"
          />
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-400/20 dark:bg-gray-400/10 backdrop-blur-sm border border-[var(--card-bc)]"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.imageUrl || '/projects/default-project.jpg'}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-105' : 'scale-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <p className="text-gray-300">{project.period}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-[var(--card-tc)] mb-4">{project.description[0]}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-[var(--primary-text-color)] mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-[var(--card-tc)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links - Using Lucide React icons */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}