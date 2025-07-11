import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};