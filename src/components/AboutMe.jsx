import React from 'react';
import profilePic from '../images/samarth-pic1.jpg';
import NavigationBar from './NavigationBar';

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
             className="w-full h-auto object-contain"
             style={{ animationDelay: '0s', animationDuration: '2s', animationFillMode: 'forwards', animationName: 'fadeInLeft'}}
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



// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg';
// import NavigationBar from './NavigationBar';

// const AboutMe = () => {
//   return (
//     <div className="relative bg-black min-h-[92vh] flex flex-col font-mono z-30"> {/* Reduced height by 10% */}
//       <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '20%' }}></div>
//       <NavigationBar className="z-50"/> {/* Ensure high z-index */}
//       <div className="relative w-full flex items-center z-10 mt-28"> {/* Added margin-top */}
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
//           <img 
//             src={profilePic} 
//             alt="Samarth Hiremath" 
//             className="w-full h-auto object-contain"
//           />
//         </div>
//         <div className="relative z-20 text-white py-8" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight">
//             I'm Samarth Hiremath. 
//           </h1>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-lightGrey2 mt-4">
//             An aspiring SWE, Product Manager, and Entrepreneur.
//           </h2>
//           <div className="mt-6">
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
//               I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
//             </p>
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3">
//               In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
