
import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-black py-16 text-center">
      <h1 className="text-4xl text-white font-bold mb-8">Contact Me</h1>
      <p className="text-white mb-4">Feel free to contact me via email.</p>
      <a href="mailto:your-email@example.com" className="bg-teal text-black py-2 px-4 rounded-full">
        Email Me
      </a>
      <div className="flex justify-center space-x-8 mt-8">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-linkedin-icon.svg" alt="LinkedIn" className="h-8 w-8 text-teal" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-github-icon.svg" alt="GitHub" className="h-8 w-8 text-orange" />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-instagram-icon.svg" alt="Instagram" className="h-8 w-8 text-purple" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
