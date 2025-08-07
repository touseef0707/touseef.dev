import { useState, useEffect } from 'react';

export const useTypewriter = (
  lines: string[], 
  speed = 100, 
  delayBetweenLines = 1500
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      if (currentCharIndex < lines[currentLineIndex].length) {
        setDisplayText(prev => prev + lines[currentLineIndex][currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCurrentCharIndex(0);
          setCurrentLineIndex(prev => (prev + 1) % lines.length);
        }, delayBetweenLines);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, lines, delayBetweenLines, speed]);

  return { displayText, showCursor };
};