
import { useState, useEffect } from 'react';

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'projects', element: document.getElementById('projects') },
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'articles', element: document.getElementById('articles') },
        { id: 'coding-profiles', element: document.getElementById('coding-profiles') },
        { id: 'contact', element: document.getElementById('contact') },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { activeSection, scrollToSection };
};
