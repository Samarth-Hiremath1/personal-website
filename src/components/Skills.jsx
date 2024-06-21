// import React from 'react';

// const Skills = () => {
//   return (
//     <div className="relative bg-black py-16 overflow-hidden">
//       <div className="absolute inset-0 bg-gray-900 z-0" style={{ zIndex: -1 }}></div>
//       <h1 className="text-4xl text-white font-bold text-center mb-16">Skills</h1>
//       <div className="px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="flex items-center justify-center bg-gray-800 rounded-lg p-4 transform hover:scale-110 transition duration-300">
//               <img src={skill.icon} alt={skill.name} className="h-12 w-12 mr-4" />
//               <div>
//                 <h3 className="text-xl text-white font-bold mb-2">{skill.name}</h3>
//                 <p className="text-lightGray">{skill.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';

const skills = [
  { name: "Python", logo: "/path-to-python-logo.svg", color: "text-teal" },
  { name: "Leadership", logo: "/path-to-leadership-logo.svg", color: "text-purple" },
  // Add more skills here...
];

const Skills = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 px-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img src={skill.logo} alt={skill.name} className="h-16 w-16 group-hover:opacity-75" />
            <p className={`text-lightGray ${skill.color} mt-2 group-hover:visible`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
