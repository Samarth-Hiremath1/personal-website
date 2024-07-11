import React from 'react';
import profilePic from '../images/samarth-pic1.jpg';
import NavigationBar from './NavigationBar';
import './styles.css';

const AboutMe = () => {
  return (
    <div className="relative bg-black min-h-[92vh] flex flex-col font-mono z-30">
      <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '20%' }}></div>
      <NavigationBar className="z-50"/>
      <div className="relative w-full flex items-center z-10 mt-28">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
          <img 
            src={profilePic} 
            alt="Samarth Hiremath" 
            className="w-full h-auto object-contain fadeInLeft"
          />
        </div>
        
        <div className="relative z-20 text-white py-8 animate-fadeInRight" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight" style={{ animationDelay: '0s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
            I'm Samarth Hiremath.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-lightGrey2 mt-4"style={{ animationDelay: '0s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
            An aspiring SWE, Product Manager, and Entrepreneur.
          </h2>
          <div className="mt-6">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-0 animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
              I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 opacity-0 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
              In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;






import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';


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
