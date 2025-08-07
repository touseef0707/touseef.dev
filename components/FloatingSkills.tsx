'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { skillCategories } from "@/utils/skillData";

type FloatingSkill = {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
};

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
const getRandomSpeed = () => getRandom(0.1, 0.2);

export default function FloatingSkills() {
  const [skills, setSkills] = useState<FloatingSkill[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Get 15 unique skills
    const uniqueSkills: FloatingSkill[] = [];
    const seen = new Set<string>();
    
    for (const category of skillCategories) {
      for (const skill of category.skills) {
        if (!seen.has(skill.name) && uniqueSkills.length < 15) {
          seen.add(skill.name);
          uniqueSkills.push({
            id: `${skill.name}-${Math.random().toString(36).substring(7)}`,
            name: skill.name,
            icon: skill.icon,
            x: getRandom(10, 90),
            y: getRandom(10, 90),
            speedX: getRandomSpeed(),
            speedY: getRandomSpeed(),
            size: getRandom(1.5, 1.9)
          });
        }
      }
    }
    
    setSkills(uniqueSkills);
  }, []);

  useEffect(() => {
    if (skills.length === 0) return;

    const moveIcons = () => {
      setSkills(prevSkills => 
        prevSkills.map(skill => {
          let newX = skill.x + skill.speedX;
          let newY = skill.y + skill.speedY;
          let newSpeedX = skill.speedX;
          let newSpeedY = skill.speedY;

          // Bounce off edges
          if (newX < 5 || newX > 95) newSpeedX *= -1;
          if (newY < 5 || newY > 95) newSpeedY *= -1;

          return {
            ...skill,
            x: Math.max(5, Math.min(95, newX)),
            y: Math.max(5, Math.min(95, newY)),
            speedX: newSpeedX,
            speedY: newSpeedY
          };
        })
      );
    };

    const animate = () => {
      moveIcons();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [skills.length]);

  if (skills.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden md:visible">
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          className="absolute"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            scale: skill.size
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.7, 0.4],
            transition: {
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="p-2">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="w-8 h-8 object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}