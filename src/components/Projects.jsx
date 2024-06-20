import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    image: "/path-to-project-image1.jpg",
    bgColor: "bg-purple-600",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <div key={index} className={`p-4 rounded-lg ${project.bgColor} transform hover:scale-105 transition duration-300`}>
            <h2 className="text-xl text-white font-bold">{project.title}</h2>
            <p className="text-lightGray">{project.description}</p>
            <img src={project.image} alt={project.title} className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
