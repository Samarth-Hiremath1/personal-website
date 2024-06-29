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
    <div className="relative">
      <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-10 bg-transparent" style={{ paddingRight: '5%' }}>
        <div className="font-bold text-white text-2xl">
          <a href="https://www.google.com">Samarth.H</a>
        </div>
        <div className="flex space-x-20 items-center"> {/* Increased spacing */}
          {sections.slice(0, 3).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-lightGrey2 hover:text-hoverColor transition-colors"
              onClick={(e) => handleSmoothScroll(e, section.id)}
            >
              {section.label}
            </a>
          ))}
          <a
            href={`#${sections[3].id}`}
            className="p-3 text-white font-bold contact-button"
            onClick={(e) => handleSmoothScroll(e, sections[3].id)}
            style={{
              backgroundColor: 'rgb(76, 36, 221)',
              padding: '40px 30px', // Increased vertical padding
              borderRadius: '0px',
              marginTop: 0, // Ensure no margin on top
              transition: 'background-color 0.3s ease', // Smooth transition for background color change
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(56, 16, 201)'; // Darken on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(76, 36, 221)'; // Return to original color
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






// import React, { useState, useEffect } from 'react';

// const NavigationBar = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const sections = [
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'leadership', label: 'Leadership' },
//     { id: 'contact-me', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const totalHeight = document.body.scrollHeight - window.innerHeight;
//       const scrollProgress = (scrollPosition / totalHeight) * 100;
//       setScrollProgress(scrollProgress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSmoothScroll = (e, sectionId) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     const duration = 2000; // milliseconds
//     let start = null;

//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = timestamp - start;
//       const scrollToPosition = easeInOutCubic(progress, startPosition, distance, duration);
//       window.scrollTo(0, scrollToPosition);
//       if (progress < duration) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     window.requestAnimationFrame(step);
//   };

//   const easeInOutCubic = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t * t + b;
//     t -= 2;
//     return (c / 2) * (t * t * t + 2) + b;
//   };

//   return (
//     <div className="relative">
//       <nav className="w-full z-50 flex justify-between items-center p-4" style={{ background: 'transparent', paddingRight: '5%' }}>
//         <div className="font-bold text-white" style={{ fontSize: '24px', padding: '5%' }}>
//           <a href="https://www.google.com">Samarth.H</a>
//         </div>
//         <div className="flex space-x-10"> {/* Increased spacing */}
//           {sections.slice(0, 3).map((section) => (
//             <a
//               key={section.id}
//               href={`#${section.id}`}
//               className="p-1 text-lightGrey2 hover:text-hoverColor transition-colors"
//               onClick={(e) => handleSmoothScroll(e, section.id)}
//             >
//               {section.label}
//             </a>
//           ))}
//           <a
//             href={`#${sections[3].id}`}
//             className="p-3 text-white font-bold contact-button"
//             onClick={(e) => handleSmoothScroll(e, sections[3].id)}
//             style={{
//               backgroundColor: 'rgb(76, 36, 221)',
//               padding: '15px 30px', // Increased vertical size
//               borderRadius: '0px', // Sharp corners
//               //height: '100vh', // Full height
//             }}
//           >
//             {sections[3].label}
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavigationBar;











// import React, { useState, useEffect } from 'react';

// const NavigationBar = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const sections = [
//     { id: 'about-me', label: 'About Me' },
//     { id: 'previous-experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'leadership', label: 'Leadership' },
//     { id: 'contact-me', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const totalHeight = document.body.scrollHeight - window.innerHeight;
//       const scrollProgress = (scrollPosition / totalHeight) * 100;
//       setScrollProgress(scrollProgress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSmoothScroll = (e, sectionId) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition - startPosition;
//     const duration = 2000; // milliseconds
//     let start = null;

//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = timestamp - start;
//       const scrollToPosition = easeInOutCubic(progress, startPosition, distance, duration);
//       window.scrollTo(0, scrollToPosition);
//       if (progress < duration) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     window.requestAnimationFrame(step);
//   };

//   const easeInOutCubic = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t * t + b;
//     t -= 2;
//     return (c / 2) * (t * t * t + 2) + b;
//   };

//   return (
//     <div>
//       <div className="fixed top-0 w-full z-50" style={{ background: 'rgb(76, 36, 221)', height: '4px', width: `${scrollProgress}%` }}></div>
//       <nav className="bg-darkGray text-white p-4 flex justify-center space-x-4">
//         {sections.map((section) => (
//           <a
//             key={section.id}
//             href={`#${section.id}`}
//             className="p-1"
//             onClick={(e) => handleSmoothScroll(e, section.id)}
//           >
//             {section.label}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default NavigationBar;
