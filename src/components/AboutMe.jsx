import React, { useState, useEffect } from 'react';
import profilePic from '../images/samarth-pic1.jpg';
import NavigationBar from './NavigationBar';
import './styles.css';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative ${isMobile ? '' : 'bg-black'} min-h-[94vh] flex flex-col font-mono z-30`}>
      {isMobile ? (
        <>
          <NavigationBar className="z-50 mt-4"/>
          <div className="w-full flex flex-col items-center bg-black">
            <img 
              src={profilePic} 
              alt="Samarth Hiremath" 
              className="w-full h-auto object-cover fadeInLeft mt-4"
              style={{ animationDelay: '0s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInLeft'}}
            />
            <div className="w-full bg-darkGrey2 flex flex-col justify-end pb-10">
              <div className="text-white px-5">
                <h1 className="text-4xl font-bold leading-tight animate-fadeInRight mt-8">I'm Samarth Hiremath.</h1>
                <h2 className="text-2xl font-bold text-lightGrey2 mt-4 animate-fadeInRight" style={{ animationDuration: '1.5s' }}>An aspiring SWE, Product Manager, and Entrepreneur.</h2>
                <p className="text-base mt-6 animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1.5s' }}>
                  I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
                </p>
                <p className="text-base mt-3 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1.5s' }}>
                  In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '20%' }}></div>
          <div className="NavigationBarContainer">
            <NavigationBar className="z-50"/>
          </div>
          
          <div className="relative w-full flex items-center z-10 mt-28">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 z--10">
                <img 
                  src={profilePic} 
                  alt="Samarth Hiremath" 
                  className="w-full h-auto object-contain fadeInLeft"
                />
              </div>
            <div className="relative z-20 text-white py-8" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight animate-fadeInRight">
                I'm Samarth Hiremath.
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-lightGrey2 mt-4 animate-fadeInRight" style={{ animationDuration: '1.5s' }}>
                An aspiring SWE, Product Manager, and Entrepreneur.
              </h2>
              <div className="mt-6">
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1.5s' }}>
                  I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
                </p>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1.5s' }}>
                  In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;

// import React, { useState, useEffect } from 'react';
// import profilePic from '../images/samarth-pic1.jpg';
// import NavigationBar from './NavigationBar';
// import './styles.css';

// const AboutMe = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={`relative ${isMobile ? 'bg-darkGrey2' : 'bg-black'} min-h-[94vh] flex flex-col font-mono z-30`}>
//       {isMobile ? (
//         <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${profilePic})` }}>
//           <div className="w-full h-full flex flex-col justify-end pb-10">
//             <NavigationBar className="z-50"/>
//             <div className="text-white px-5 animate-fadeInUp">
//               <h1 className="text-4xl font-bold leading-tight">I'm Samarth Hiremath.</h1>
//               <h2 className="text-2xl font-bold text-lightGrey2 mt-4">An aspiring SWE, Product Manager, and Entrepreneur.</h2>
//               <p className="text-base mt-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInUp'}}>
//                 I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
//               </p>
//               <p className="text-base mt-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInUp'}}>
//                 In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '20%' }}></div>
//           <NavigationBar className="z-50"/>
//           <div className="relative w-full flex items-center z-10 mt-28">
//             <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
//               <img 
//                 src={profilePic} 
//                 alt="Samarth Hiremath" 
//                 className="w-full h-auto object-contain fadeInLeft"
//               />
//             </div>
            
//             <div className="relative z-20 text-white py-8 animate-fadeInRight" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight" style={{ animationDelay: '0s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
//                 I'm Samarth Hiremath.
//               </h1>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-lightGrey2 mt-4"style={{ animationDelay: '0s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
//                 An aspiring SWE, Product Manager, and Entrepreneur.
//               </h2>
//               <div className="mt-6">
//                 <p className="text-base md:text-lg lg:text-xl xl:text-2xl opacity-0 animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
//                   I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
//                 </p>
//                 <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 opacity-0 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1.5s', animationFillMode: 'forwards', animationName: 'fadeInRight'}}>
//                   In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AboutMe;




// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg';
// import NavigationBar from './NavigationBar';
// import './styles.css';

// const AboutMe = () => {
//   return (
//     <div className="relative bg-black min-h-screen flex flex-col font-mono z-30">
//       <NavigationBar className="z-50"/>
//       {/* Adjusted div for responsive layout */}
//       <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-28 w-full">
//         {/* Profile Picture */}
//         <div className="w-full md:w-1/2 px-4 py-4 md:py-0 flex justify-center md:justify-start">
//           <img 
//             src={profilePic} 
//             alt="Samarth Hiremath" 
//             className="w-full md:max-w-xs h-auto object-contain fadeInLeft"
//           />
//         </div>
//         {/* Text Content */}
//         <div className="flex flex-col text-white py-8 px-4 md:px-8 md:pl-12">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fadeInRight" style={{ animationDuration: '1.5s' }}>
//             I'm Samarth Hiremath.
//           </h1>
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-lightGrey2 mt-4 animate-fadeInRight" style={{ animationDuration: '1.5s' }}>
//             An aspiring SWE, Product Manager, and Entrepreneur.
//           </h2>
//           <p className="text-sm md:text-base lg:text-lg mt-6 animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1.5s' }}>
//             I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
//           </p>
//           <p className="text-sm md:text-base lg:text-lg mt-3 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1.5s' }}>
//             In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;