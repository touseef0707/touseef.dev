'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  url: string;
  color: string;
  name: string;
  size?: number;
}

export const SocialIcon = ({
  icon: Icon,
  url,
  color,
  name,
  size = 20
}: SocialIconProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className={`${color} hover:opacity-80 transition-opacity`}
      aria-label={name}
    >
      <Icon size={size} />
    </motion.a>
  );
};