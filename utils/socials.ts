import type { LucideIcon } from 'lucide-react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:touseefahmed0707@gmail.com',
    icon: Mail,
    color: 'text-gray-600 dark:text-gray-300'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/touseef0707',
    icon: Linkedin,
    color: 'text-[#0A66C2]'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/rainyjoke',
    icon: Instagram,
    color: 'text-[#E4405F]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/touseef0707',
    icon: Github,
    color: 'text-gray-800 dark:text-gray-200'
  }
];