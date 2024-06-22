import React from 'react';
import SwiftLogo from '../images/Swift-logo.png';
import OptiwiseLogo from '../images/Optiwise-logo.svg';
import MiraBrandsLogo from '../images/Mira-Brands-logo.webp';
import CortexxusLogo from '../images/Cortexxus-logo.png';

const experiences = [
  {
    title: "Co-Founder / Project Manager",
    company: "Swift",
    dates: "Present",
    description: "I am leading a cross-functional team in UI/UX framework design and prototype development. I leveraged front-end expertise and project management skills to achieve success in UC Davis entrepreneurship competitions. I coordinate customer testimonials, translate user feedback into technical requirements, and oversee the development process.",
    logo: SwiftLogo,
    color: "text-green",
  },
  {
    title: "Software Engineering Intern",
    company: "Optiwise.ai, Inc",
    dates: "Jan 2024 - Jun 2024",
    description: "I developed 5 responsive web pages using React and Node.js, creating reusable components that reduced code redundancy by 30%. I implemented 10 dynamic backend routes with FastAPI and helped develop a scalable SQL database schema. I collaborated with UI/UX designers to build a highly responsive website.",
    logo: OptiwiseLogo,
    color: "text-blue",
  },
  {
    title: "UI/UX Consultant",
    company: "Mira Brands",
    dates: "Oct 2023 - Dec 2023",
    description: "I created mobile app mock-ups for a recipe-sharing platform using Figma, designing over 10 pages with dynamic animations. I analyzed competitor and market data, integrating unique features like an ingredient spotlight. I blended user-centric design with market insights to enhance the overall product.",
    logo: MiraBrandsLogo,
    color: "text-yellow",
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Cortexxus",
    dates: "Jun 2023 - Sep 2023",
    description: "I contributed to enhancing a seizure prediction LLM in a remote five-member team. I conducted research on LLM development and optimization for EEG data processing. I implemented robust version control and UNIX-based workflows, reducing code conflicts by 25% and demonstrating proficiency in development operations.",
    logo: CortexxusLogo,
    color: "text-rose",
  },
  // {
  //   title: "Junior Developer",
  //   company: "Company E",
  //   dates: "Jan 2016 - Dec 2016",
  //   description: "Worked on frontend development...",
  //   logo: "/path-to-company-e-logo.svg",
  //   color: "text-purple",
  // },
];

const PreviousExperience = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-12">Previous Experience</h1>
      <div className="px-16 space-y-24">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center relative space-x-6">
            <div className="w-1/3 text-right pr-6">
              <h3 className={`text-2xl font-bold ${exp.color}`}>{exp.company}</h3>
              <p className="text-lightGray italic">{exp.dates}</p>
            </div>
            <div className="w-1/12 flex justify-center relative">
              <div className="h-36 w-36 bg-white p-1 rounded-full overflow-hidden z-10">
                <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute h-full w-1 bg-white top-full left-1/2 transform -translate-x-1/2" />
              )}
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-lg text-white font-bold">{exp.title}</h2>
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
