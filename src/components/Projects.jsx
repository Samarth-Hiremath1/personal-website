import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Two",
    description: "This is a description of project two.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Three",
    description: "This is a description of project three.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Four",
    description: "This is a description of project four.",
    image: "https://via.placeholder.com/300",
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-4xl text-white font-bold text-center mb-12">Projects</h1>
      <p className="text-lightGray text-center mb-8">Some projects I've worked on over the past few years.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 mx-48">
        {projects.map((project, index) => (
          <div key={index} className="mt-12 relative group transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-10 "> {/* Increased padding from p-4 to p-6 */}
              <h2 className="text-2xl text-white font-bold mb-2">{project.title}</h2>
              <p className="text-lightGray mb-4">{project.description}</p>

              <div className="absolute bottom-1 right-4 flex space-x-4 justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.demoLink} className="bg-teal-600 text-white py-0.5 px-4 rounded-lg">Demo</a>
                <a href={project.githubLink} className="bg-teal-600 text-white py-0.5 px-4 rounded-lg">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
