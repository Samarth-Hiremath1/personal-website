import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", logo: "/path-to-python-logo.svg", color: "text-teal" },
  { name: "Leadership", logo: "/path-to-leadership-logo.svg", color: "text-purple" },
  // Add more skills here...
];

const Skills = () => {
  return (
    <motion.div
      className="bg-black py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl text-white font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 px-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img src={skill.logo} alt={skill.name} className="h-16 w-16 group-hover:opacity-75" />
            <p className={`text-lightGray ${skill.color} mt-2 group-hover:visible`}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;


// import React from 'react';

// const skills = [
//   { name: "Python", logo: "/path-to-python-logo.svg", color: "text-teal" },
//   { name: "Leadership", logo: "/path-to-leadership-logo.svg", color: "text-purple" },
//   // Add more skills here...
// ];

// const Skills = () => {
//   return (
//     <div className="bg-black py-16">
//       <h1 className="text-4xl text-white font-bold text-center mb-8">Skills</h1>
//       <div className="flex flex-wrap justify-center space-x-8 space-y-8 px-8">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex flex-col items-center group">
//             <img src={skill.logo} alt={skill.name} className="h-16 w-16 group-hover:opacity-75" />
//             <p className={`text-lightGray ${skill.color} mt-2 group-hover:visible`}>{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
