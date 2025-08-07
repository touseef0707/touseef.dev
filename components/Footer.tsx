'use client';

import { socialLinks } from '@/utils/socials';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 bg-[var(--nav-bgc)] text-[var(--nav-tc)] sticky bottom-[-100] z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm opacity-80">
          © {currentYear} Touseef Ahmed. All rights reserved.
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm opacity-80">
            <MapPin className="w-4 h-4" />
            <span>United Arab Emirates</span>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.name}
                icon={link.icon}
                url={link.url}
                color={link.color}
                name={link.name}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};