import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'about-me', label: 'About Me' },
    { id: 'previous-experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
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

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // milliseconds
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const scrollToPosition = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, scrollToPosition);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-50" style={{ background: 'rgb(76, 36, 221)', height: '4px', width: `${scrollProgress}%` }}></div>
      <nav className="bg-darkGray text-white p-4 flex justify-center space-x-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="p-1"
            onClick={(e) => handleSmoothScroll(e, section.id)}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;
