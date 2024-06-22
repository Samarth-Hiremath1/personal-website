import React from 'react';
import profilePic from '../images/samarth-pic1.jpg';

const AboutMe = () => {
  return (
    <div className="relative flex bg-darkGray h-screen items-center justify-center overflow-hidden">
      {/* Background squares */}
      <div className="absolute bg-lightGray w-64 h-64 top-10 left-10 transform rotate-12"></div>
      <div className="absolute bg-hoverColor w-64 h-64 top-20 left-20 transform rotate-6"></div>
      <div className="absolute bg-newOrange w-64 h-64 bottom-20 right-20 transform -rotate-6"></div>
      <div className="absolute bg-white w-64 h-64 bottom-10 right-10 transform -rotate-12"></div>

      {/* Content */}
      <div className="relative flex bg-black text-white p-8 rounded-lg shadow-lg z-10">
        <img 
          src={profilePic} 
          alt="Samarth Hiremath" 
          className="w-1/2 rounded-l-lg object-cover"
        />
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">I'm <span className="text-hoverColor">Samarth Hiremath</span>.</h1>
          <h2 className="text-3xl font-bold mb-4"><span style={{ color: 'rgb(235, 178, 108)' }}>Software Engineer, Product Manager, and Entrepreneur.</span></h2>
          <p className="text-sm">I'm probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;











//import profilePic from '../images/samarth-pic2.jpg';





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








// //import profilePic from '../images/samarth-pic2.jpg';
