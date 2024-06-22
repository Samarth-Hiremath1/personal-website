import React from 'react';

import linkedInicon from '../images/linkedin-logo.png';
import githubicon from '../images/github-icon.svg';
import instagramicon from '../images/instagram-icon.png';

const ContactMe = () => {
  return (
    <div className="bg-black py-16 text-center">
      <h1 className="text-4xl text-white font-bold mb-8">Contact Me</h1>
      <p className="text-white mb-4">Feel free to reach out! I love meeting new people.</p>
      <br></br>
      <a
        href="mailto:samhiremath@ucdavis.edu"
        className="bg-teal text-black py-2 px-4 rounded-full relative animate-glow"
      >
        Email Me
      </a>
      <br></br>
      <div className="flex justify-center space-x-8 mt-8">
        <a href="https://www.linkedin.com/in/samarth-hiremath" target="_blank" rel="noopener noreferrer">
          <img src={linkedInicon} alt="LinkedIn" className="h-16 w-16 text-teal hover:opacity-75 transition-opacity duration-300" />
        </a>
        <a href="https://github.com/Samarth-Hiremath1" target="_blank" rel="noopener noreferrer">
          <img src={githubicon} alt="GitHub" className="h-16 w-16 text-orange hover:opacity-75 transition-opacity duration-300" />
        </a>
        <a href="https://www.instagram.com/samarth_hiremath1/" target="_blank" rel="noopener noreferrer">
          <img src={instagramicon} alt="Instagram" className="h-16 w-16 text-purple hover:opacity-75 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
