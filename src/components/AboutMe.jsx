import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-darkGray flex justify-center items-center">
        <div className="h-64 w-64 rounded-full border-4 border-teal overflow-hidden">
          <img src="/path-to-image.jpg" alt="Profile" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="w-1/2 bg-black p-8 flex flex-col justify-center">
        <h1 className="text-4xl text-white font-bold mb-4">About Me</h1>
        <p className="text-white">
          Hello! I'm [Name], an aspiring Software Engineer, Product Manager, and Entrepreneur...
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

