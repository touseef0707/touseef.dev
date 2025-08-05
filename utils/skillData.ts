// skills.ts
import type { LucideIcon } from 'lucide-react';
import {
  Paintbrush,
  Code2,
  Cloud,
  Smartphone,
  Cpu,
  Database,
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Paintbrush,
    skills: [
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        proficiency: 90,
      },
      {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        proficiency: 85,
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
        proficiency: 75,
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        proficiency: 80,
      },
      {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        proficiency: 85,
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        proficiency: 90,
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        proficiency: 85,
      },
    ],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    skills: [
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        proficiency: 60,
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        proficiency: 50,
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        proficiency: 80,
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        proficiency: 80,
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        proficiency: 80,
      },
      {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        proficiency: 80,
      },
    ],
  },
  {
    title: 'Tools',
    icon: Database,
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        proficiency: 90,
      },
      {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        proficiency: 95,
      },
      {
        name: 'JetBrains',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
        proficiency: 50,
      },
      {
        name: 'Jupyter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
        proficiency: 70,
      },
      {
        name: 'Stack Overflow',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg',
        proficiency: 70,
      },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        proficiency: 50,
      },
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        proficiency: 60,
      },
      {
        name: 'Google Cloud',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        proficiency: 65,
      },
    ],
  },
  {
    title: 'AI & Data Science',
    icon: Cpu,
    skills: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        proficiency: 80,
      },
      {
        name: 'Machine Learning',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        proficiency: 50,
      },
      {
        name: 'N8N',
        icon: 'https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png',
        proficiency: 50,
      },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      {
        name: 'Android Studio',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        proficiency: 60,
      },
    ],
  },
];
