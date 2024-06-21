import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'about-me', label: 'About Me' },
    { id: 'previous-experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact-me', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-purple h-1" style={{ width: `${scrollProgress}%` }}></div>
      <nav className="bg-darkGray text-white p-4 flex justify-center space-x-4">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="p-1">
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;