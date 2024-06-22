import React from 'react';

import funWithFlora from '../images/fun-with-flora.png';
import mentalHealthConnect from '../images/mentalhealth-connect.png';
import blackjackAI from '../images/blackjack-ai.jpg';
import miraBrands from '../images/mira-brands.gif';

const projectsData = [
  {
    id: 1,
    image: mentalHealthConnect,
    title: 'MentalHealth Connect',
    description: 'Created a community-based social platform for students using Python, Flask, React.js, and MySQL, featuring an ML-powered friend recommendation system based on K-Nearest Neighbors algorithm trained on 10,000 user profiles.',
    demoLink: 'https://devpost.com/software/mentalwell-connect',
    githubLink: 'https://github.com/Krigupt/SacHacks',
  },
  {
    id: 2,
    image: funWithFlora,
    title: 'Fun with Flora',
    description: 'Developed a web application that uses machine learning and APIs to identify plants from images taken by any device, assess their health, and suggest treatments for potential diseases.',
    demoLink: 'https://docs.google.com/document/d/1fBNoox80M9wddRwBO5LabIjj1A1XV9YMsZLazBGmEs4/edit?usp=sharing',
    githubLink: 'https://github.com/Samarth-Hiremath1/Fun-With-Flora',
  },
  {
    id: 3,
    image: blackjackAI,
    title: 'Blackjack AI',
    description: 'An innovative blackjack bot leveraging Q-learning to optimize gameplay strategies for the Google Developer Student Club @ UC Davis.',
    demoLink: 'https://docs.google.com/presentation/d/1GdYHb8CVW-bAWbQH8Qt3tYmktVt_v_BQjTn2lCsTA6Y/edit?usp=sharing',
    githubLink: 'https://github.com/hanyiliu/SamarthBlackjackBot',
  },
  {
    id: 4,
    image: miraBrands,
    title: 'Mira Brands Recipe App',
    description: 'Designed a culinary-focused social platform where users can create, share, discover, and rate recipes within a community of food enthusiasts.',
    demoLink: '#',
    githubLink: '#',
  },
];

// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <div className="relative group transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg overflow-hidden">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-68 object-cover" // Increased height
      />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-2xl text-white font-bold mb-2 group-hover:text-hoverColor group-hover:translate-x-2 transition-transform">{project.title}</h2>
        <p className="text-lightGray mb-4">{project.description}</p>
        <br></br>
        <br></br>
        {/* Buttons */}
        {project.id !== 4 && (
          <div className="absolute bottom-1 right-4 flex space-x-4 justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a
              href={project.demoLink}
              className="bg-teal-600 text-white py-0.5 px-4 rounded-lg"
            >
              Demo
            </a>
            <a
              href={project.githubLink}
              className="bg-teal-600 text-white py-0.5 px-4 rounded-lg"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-white font-bold text-center mb-12">Projects</h1>
      <p className="text-lightGray italic text-center mb-20">Some projects I worked on over the past few years</p>
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-32">
        <div className="md:col-span-1 md:row-start-1 relative">
          <ProjectCard project={projectsData[0]} />
        </div>
        <div className="md:col-start-2 md:row-start-1 relative" style={{ marginTop: '12rem' }}>
          <ProjectCard project={projectsData[1]} />
        </div>
        <div className="md:col-span-1 md:row-start-2 relative" style={{ marginTop: '0rem' }}>
          <ProjectCard project={projectsData[2]} />
        </div>
        <div className="md:col-start-2 md:row-start-2 relative" style={{ marginTop: '12rem' }}>
          <ProjectCard project={projectsData[3]} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
