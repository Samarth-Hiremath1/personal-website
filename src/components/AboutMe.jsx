import React from 'react';
import profilePic from '../images/samarth-pic1.jpg';
import NavigationBar from './NavigationBar';

const AboutMe = () => {
  return (
    <div className="relative bg-black min-h-[90vh] flex flex-col font-sans z-30"> {/* Reduced height by 10% */}
      <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '10%' }}></div>
      <NavigationBar className="z-50"/> {/* Ensure high z-index */}
      <div className="relative w-full flex items-center z-10 mt-28"> {/* Added margin-top */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
          <img 
            src={profilePic} 
            alt="Samarth Hiremath" 
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="relative z-20 text-white py-8" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
            I'm Samarth Hiremath. 
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-lightGrey2 mt-4">
            An aspiring SWE, Product Manager, and Entrepreneur.
          </h2>
          <div className="mt-6">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              I aim to pursue my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis. In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
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

// //import profilePic from '../images/samarth-pic2.jpg';

// const AboutMe = () => {
//   return (
//     <div className="relative bg-black min-h-screen flex items-center font-sans">
//       <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '10%'}}></div> {/* Reduced the height slightly from the bottom */}
//       <div className="relative w-full flex items-center z-10">
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
//           <img 
//             src={profilePic} 
//             alt="Samarth Hiremath" 
//             className="w-full h-auto object-contain"
//           />
//         </div>
//         <div className="relative z-20 text-white py-8" style={{ paddingLeft: '45%', paddingRight: '5%' }}>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
//             I'm Samarth Hiremath. 
//           </h1>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-lightGrey2 mt-4">
//             An aspiring SWE, Product Manager, and Entrepreneur.
//           </h2>
//           <div className="mt-6">
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
//               I aim to pursue my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis. In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;








// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg'; 

// const AboutMe = () => {
//   return (
//     <div className="relative bg-black min-h-screen flex items-center">
//       <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0"></div>
//       <div className="relative w-full flex items-center z-10">
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2">
//           <img 
//             src={profilePic} 
//             alt="Samarth Hiremath" 
//             className="w-full h-auto object-contain"
//           />
//         </div>
//         <div className="relative z-20 text-white pl-[5%] pr-[5%] w-1/2">
//           <h1 className="text-4xl md:text-6xl font-bold">
//             I'm Samarth Hiremath. 
//           </h1>
//           <h2 className="text-3xl md:text-5xl font-bold text-lightGrey2 mt-4">
//             An aspiring SWE, Product Manager, and Entrepreneur.
//           </h2>
//           <p className="text-lg mt-4">
//             I aim to pursue my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis. In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;





// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg'; 

// const AboutMe = () => {
//   return (
//     <div className="relative bg-black min-h-screen flex items-center">
//       <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0"></div>
//       <div className="relative w-full flex items-center z-0">
//         <img 
//           src={profilePic} 
//           alt="Samarth Hiremath" 
//           className="absolute left-0 w-[900px] h-[1000px] object-contain z-10"
//         />
//       </div>
//       <div className="relative z-20 text-white pl-[5%] pr-[5%]">
//         <h1 className="text-6xl font-bold">
//           Hi! I'm Samarth Hiremath. 
//         </h1>
//         <h2 className="text-5xl font-bold text-lightGrey2">
//           An aspiring SWE, Product Manager, and Entrepreneur.
//         </h2>
//         <p className="text-lg mt-4">
//           I aim to pursue my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis. In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;







// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg'; // Ensure to import your profile picture correctly

// const AboutMe = () => {
//   return (
//     <div className="flex h-screen bg-darkGray relative">
//       {/* Background shapes */}
//       <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-800 transform rotate-45 z-0"></div>
//       <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gray-800 transform rotate-45 z-0"></div>
      
//       {/* Profile picture */}
//       <div className="flex items-center justify-center flex-1 z-10">
//         <div className="h-96 w-96 overflow-hidden bg-gray-900 absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-20">
//           <img src={profilePic} alt="Profile" className="h-full w-full object-cover" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 bg-black p-8 flex flex-col justify-center z-10">
//         <p className="text-white relative z-10">
//           <span className="text-3xl font-bold">Hi! I'mSamarth Hiremath</span>, an aspiring Software Engineer, Product Manager, and Entrepreneur, passionate about creating impactful products and solving real-world problems.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;




// import React from 'react';
// import profilePic from '../images/samarth-pic1.jpg';

// const AboutMe = () => {
//   return (
//     <div className="relative flex bg-darkGray h-screen items-center justify-center overflow-hidden">
//       {/* Background squares */}
//       <div className="absolute bg-lightGray w-64 h-64 top-10 left-10 transform rotate-12"></div>
//       <div className="absolute bg-hoverColor w-64 h-64 top-20 left-20 transform rotate-6"></div>
//       <div className="absolute bg-newOrange w-64 h-64 bottom-20 right-20 transform -rotate-6"></div>
//       <div className="absolute bg-white w-64 h-64 bottom-10 right-10 transform -rotate-12"></div>

//       {/* Content */}
//       <div className="relative flex bg-black text-white p-8 rounded-lg shadow-lg z-10">
//         <img 
//           src={profilePic} 
//           alt="Samarth Hiremath" 
//           className="w-1/2 rounded-l-lg object-cover"
//         />
//         <div className="p-8 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold mb-2">I'm <span className="text-hoverColor">Samarth Hiremath</span>,</h1>
//           <h2 className="text-3xl font-bold mb-4">an aspiring <span style={{ color: 'rgb(235, 178, 108)' }}>Software Engineer, Product Manager, and Entrepreneur.</span></h2>
//           <p className="text-sm">I'm pursuing a Computer Science degree with a minor in Technology Management at UC Davis, aiming to blend my passions for tech and business. In my free time, you'll find me strumming my guitar or exploring places, both natural and man-made!</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;




// //import profilePic from '../images/samarth-pic2.jpg';
