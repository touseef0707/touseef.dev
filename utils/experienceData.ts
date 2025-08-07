export type WorkArrangement = 'Remote' | 'Hybrid' | 'On-site';

export interface Experience {
  company: string;
  location: string;
  role: string;
  type: 'Intern' | 'Part-time' | 'Full-time' | 'Contract';
  arrangement: WorkArrangement;
  time: string;
  tasks: string[];
  skillStack: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Afzar Consultants LLC',
    location: 'Sharjah, United Arab Emirates',
    role: 'Software Developer Intern',
    type: 'Intern',
    arrangement: 'Remote',
    time: 'Jun 2025 - Present',
    tasks: [
      'Built an early-stage hydraulic simulation tool using Flask, focused on components used in petrochemical industries',
      'Developed the frontend canvas with Next.Js and React Flow',
      'Collaborated with process engineers to gather requirements and validate simulation logic',
      'Contributed to full-stack development in a team of three',
      'Maintained technical documentation and development progress records',
      'Gained experience in remote collaboration (GitHub) and agile workflows'
    ],
    skillStack: [
      'Next.js',
      'Python',
      'Flask',
      'Full-stack Development',
      'Technical Writing',
      'Git',
      'Agile',
      'Communication'
    ]
  }
];