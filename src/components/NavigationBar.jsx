import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'experience', label: 'Experience' },
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
    if (section) {
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
    }
  };

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  return (
    <div className="relative animate-fadeIn">
      <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-10 bg-transparent" style={{ paddingRight: '5%' }}>
        <div className="font-bold text-white text-3xl"> {/* Increased font size */}
          <a href="https://bit.ly/samarth-h">Samarth.H</a>
        </div>
        <div className="flex space-x-20 items-center"> {/* Increased spacing */}
          {sections.slice(0, 3).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-lightGrey2 hover:text-hoverColor transition-colors text-lg" // Increased font size
              onClick={(e) => handleSmoothScroll(e, section.id)}
            >
              {section.label}
            </a>
          ))}
          <a
            href={`#${sections[3].id}`}
            className="p-3 text-white font-bold contact-button text-lg" // Increased font size
            onClick={(e) => handleSmoothScroll(e, sections[3].id)}
            style={{
              backgroundColor: 'rgb(76, 36, 221)',
              padding: '30px 30px',
              borderRadius: '0px',
              transition: 'background-color 300ms ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(76, 36, 221, 0.8)'; // Darken slightly on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(76, 36, 221)'; // Revert to original color
            }}
          >
            {sections[3].label}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
