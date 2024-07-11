import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import { Squash as Hamburger } from 'hamburger-react';
import './styles.css';

const NavigationBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [animationClass, setAnimationClass] = useState('animate-slideDown');

  const hamburgerRef = useRef(null); // Added ref for the hamburger icon

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    if (isOpen) {
      setAnimationClass('animate-slideUp');
      setTimeout(() => setOpen(false), 500); // Delay setting isOpen to false to allow animation to play
    } else {
      setOpen(true);
      setAnimationClass('animate-slideDown');
    }
  };

  const getDropdownTop = () => {
    if (hamburgerRef.current) {
      const hamburgerRect = hamburgerRef.current.getBoundingClientRect();
      return `${hamburgerRect.bottom}px`;
    }
    return '100%'; // Fallback position
  };

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setAnimationClass('animate-slideUp');
    setTimeout(() => setOpen(false), 500); // Close the menu with animation
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
    <div className="relative animate-fadeIn z-100">
      <nav className="sticky top-0 w-full z-105 flex justify-between items-center px-10 bg-transparent">
        <div className="font-bold text-white text-3xl">
          <a href="https://bit.ly/samarth-h">Samarth.H</a>
        </div>
        {isMobile ? (
          <div ref={hamburgerRef} className="z-110"> 
            <Hamburger toggled={isOpen} toggle={toggleDropdown} />
          </div>
        ) : (
          <div className='dropdown-menu'>
          <div className="flex space-x-20 items-center">
            {sections.map((section, index) => (
              index !== 3 ? (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-lightGrey2 hover:text-hoverColor transition-colors text-lg"
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                >
                  {section.label}
                </a>
              ) : (
                <a
                  key={section.id}
                  href={`#${sections[3].id}`}
                  className="p-3 text-white font-bold contact-button text-lg"
                  onClick={(e) => handleSmoothScroll(e, sections[3].id)}
                  style={{
                    backgroundColor: 'rgb(76, 36, 221)',
                    padding: '30px 30px',
                    borderRadius: '0px',
                    transition: 'background-color 300ms ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(76, 36, 221, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(76, 36, 221)';
                  }}
                >
                  {section.label}
                </a>
              )
            ))}
          </div>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className={`absolute ${animationClass}`} style={{
          top: getDropdownTop(),
          right: 0,
          backgroundColor: 'black',
          width: '100%',
          zIndex: 50,
        }}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-white py-2 px-4 hover:bg-gray-700"
              onClick={(e) => handleSmoothScroll(e, section.id)}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationBar;