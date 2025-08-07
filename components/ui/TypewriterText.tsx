'use client';

import { useTypewriter } from '@/hooks/useTypewriter';

export const TypewriterText = ({ 
  lines, 
  speed = 100, 
  delayBetweenLines = 1500,
  className = "",
  cursorClassName = "inline-block w-1 h-6 bg-blue-500 ml-1"
}: {
  lines: string[];
  speed?: number;
  delayBetweenLines?: number;
  className?: string;
  cursorClassName?: string;
}) => {
  const { displayText, showCursor } = useTypewriter(lines, speed, delayBetweenLines);

  return (
    <span className={className}>
      {displayText}
      <span className={`${cursorClassName} ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};