import React from 'react';

const experiences = [
  {
    title: "Software Engineer",
    company: "Company A",
    dates: "Jan 2020 - Dec 2021",
    description: "Developed web applications using React and Node.js...",
    logo: "/path-to-company-a-logo.svg",
    color: "text-green-500",
  },
  {
    title: "Product Manager",
    company: "Company B",
    dates: "Jan 2019 - Dec 2019",
    description: "Managed product lifecycle and cross-functional teams...",
    logo: "/path-to-company-b-logo.svg",
    color: "text-blue-500",
  },
  {
    title: "Intern",
    company: "Company C",
    dates: "Jun 2018 - Dec 2018",
    description: "Assisted in software development and testing...",
    logo: "/path-to-company-c-logo.svg",
    color: "text-rose-500",
  },
  {
    title: "Freelancer",
    company: "Company D",
    dates: "Jan 2017 - May 2018",
    description: "Developed various freelance projects...",
    logo: "/path-to-company-d-logo.svg",
    color: "text-yellow-500",
  },
  {
    title: "Junior Developer",
    company: "Company E",
    dates: "Jan 2016 - Dec 2016",
    description: "Worked on frontend development...",
    logo: "/path-to-company-e-logo.svg",
    color: "text-purple-500",
  },
];

const PreviousExperience = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-12">Previous Experience</h1>
      <div className="px-8 space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center relative space-x-4">
            <div className="w-1/3 text-right pr-4">
              <h3 className={`text-xl font-bold ${exp.color}`}>{exp.company}</h3>
              <p className="text-lightGray italic">{exp.dates}</p>
            </div>
            <div className="w-1/12 flex justify-center relative">
              <div className="h-16 w-16 rounded-full border-4 border-teal overflow-hidden z-10">
                <img src={exp.logo} alt={exp.company} className="h-full w-full object-cover" />
              </div>
              <div className={`absolute h-full w-1 bg-${exp.color} top-0 left-1/2 transform -translate-x-1/2`} />
            </div>
            <div className="w-1/2 pl-4">
              <h2 className="text-xl text-white font-bold">{exp.title}</h2>
              <p className="text-lightGray">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousExperience;


//________________________________________


// import React from 'react';

// const experiences = [
//   {
//     title: "Software Engineer",
//     company: "Company A",
//     dates: "Jan 2020 - Dec 2021",
//     description: "Developed web applications using React and Node.js...",
//     logo: "/path-to-company-a-logo.svg",
//     color: "text-green-500",
//   },
//   {
//     title: "Product Manager",
//     company: "Company B",
//     dates: "Jan 2019 - Dec 2019",
//     description: "Managed product lifecycle and cross-functional teams...",
//     logo: "/path-to-company-b-logo.svg",
//     color: "text-blue-500",
//   },
//   {
//     title: "Intern",
//     company: "Company C",
//     dates: "Jun 2018 - Dec 2018",
//     description: "Assisted in software development and testing...",
//     logo: "/path-to-company-c-logo.svg",
//     color: "text-rose-500",
//   },
//   {
//     title: "Freelancer",
//     company: "Company D",
//     dates: "Jan 2017 - May 2018",
//     description: "Developed various freelance projects...",
//     logo: "/path-to-company-d-logo.svg",
//     color: "text-yellow-500",
//   },
//   {
//     title: "Junior Developer",
//     company: "Company E",
//     dates: "Jan 2016 - Dec 2016",
//     description: "Worked on frontend development...",
//     logo: "/path-to-company-e-logo.svg",
//     color: "text-purple-500",
//   },
// ];

// const PreviousExperience = () => {
//   return (
//     <div className="bg-black py-16">
//       <h1 className="text-4xl text-white font-bold text-center mb-8">Previous Experience</h1>
//       <div className="px-8 space-y-8 relative">
//         {experiences.map((exp, index) => (
//           <div key={index} className="flex items-center relative">
//             <div className="w-1/3 text-right pr-4">
//               <h3 className={`text-xl font-bold ${exp.color}`}>{exp.company}</h3>
//               <p className="text-lightGray italic">{exp.dates}</p>
//             </div>
//             <div className="w-1/3 flex justify-center relative">
//               <div className="h-16 w-16 rounded-full border-4 border-teal overflow-hidden z-10">
//                 <img src={exp.logo} alt={exp.company} className="h-full w-full object-cover" />
//               </div>
//               <div className={`absolute h-full w-1 bg-${exp.color} top-0 left-1/2 transform -translate-x-1/2`} />
//             </div>
//             <div className="w-1/3 pl-4">
//               <h2 className="text-xl text-white font-bold">{exp.title}</h2>
//               <p className="text-lightGray">{exp.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PreviousExperience;
