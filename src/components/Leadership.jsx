import React from 'react';

import skillsUSA from '../images/SkillsUSA-speech.gif';
import pythonBootcamp from '../images/summer-python-bootcamp.jpg';

const leadershipExperiences = [
  {
    title: "SkillsUSA CA State Officer",
    description: "As a State Officer (2022-2023), I had the amazing opportunity to organize events for the 54,000 CA members, including the State Leadership and Skills Conference with 3,500 participants. I initiated the President's Council to boost school collaboration and communication.<br /><br />I also had the chance to advocate for career education in Washington D.C., train 275 high school officers, and plan a community project collecting 2,500 stuffed animals for foster homes.<br /><br />I'm really grateful for this opportunity to develop countless skills and learn from so many amazing people.",
    image: skillsUSA,
    color: "bg-purple-600",
  },
  {
    title: "Summer Python Bootcamp",
    description: "From 2020-2022, I founded and expanded a Summer Programming Bootcamp for middle schoolers, partnering with a friend and the local library. We taught over 120 students, fostering their interest in technology.<br /><br />This experience enhanced my leadership skills and sparked a newfound passion for teaching and taking initiative for community impact that I'm eager to pursue in future endeavors.",
    image: pythonBootcamp,
    color: "bg-teal-600",
  },
];

const Leadership = () => {
  return (
    <div className="bg-black py-16 font-mono">
      <h1 className="text-4xl text-white font-bold text-center mb-16">Leadership</h1>
      <div className="px-8">
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Philosophy</h2>
        <p className="text-lightGray italic text-center mb-20">"The best way to predict the future is to create it." - Peter Drucker</p>
        
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Leadership and Community</h2>
        
        <div className="space-y-32">
          <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
            <div className="relative rounded-lg overflow-hidden h-full">
              <img src={leadershipExperiences[0].image} alt={leadershipExperiences[0].title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${leadershipExperiences[0].color} opacity-50`} />
            </div>
            <div className="p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-hoverColor2 group-hover:translate-x-2 transition-transform">{leadershipExperiences[0].title}</h3>
              <p className="text-lightGray" dangerouslySetInnerHTML={{ __html: leadershipExperiences[0].description }}></p>
            </div>
          </div>

          <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25">
            <div className="bg-gray-800 p-8 rounded-lg order-2 md:order-1 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-hoverColor2 group-hover:translate-x-2 transition-transform">{leadershipExperiences[1].title}</h3>
              <p className="text-lightGray" dangerouslySetInnerHTML={{ __html: leadershipExperiences[1].description }}></p>
            </div>
            <div className="relative order-1 md:order-2 rounded-lg overflow-hidden h-full">
              <img src={leadershipExperiences[1].image} alt={leadershipExperiences[1].title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${leadershipExperiences[1].color} opacity-50`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
