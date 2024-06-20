import React from 'react';

const experiences = [
  {
    title: "Software Engineer",
    company: "Company A",
    dates: "Jan 2020 - Dec 2021",
    description: "Developed web applications using React and Node.js..."
  },
  // Add more experiences here...
];

const PreviousExperience = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-8">Previous Experience</h1>
      <div className="space-y-8 px-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-darkGray p-4 rounded-lg">
            <h2 className="text-xl text-white font-bold">{exp.title}</h2>
            <h3 className="text-lightGray italic">{exp.company} - {exp.dates}</h3>
            <p className="text-lightGray">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousExperience;
