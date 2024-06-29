import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="h-2 shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'rgb(76, 36, 221)',
          boxShadow: '0 0 5px rgba(76, 36, 221, 0.7)', // Add shadow/glow effect
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;

