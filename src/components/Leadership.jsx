import React, { useEffect, useRef, useState } from 'react';
import skillsUSA from '../images/SkillsUSA-speech.gif';
import pythonBootcamp from '../images/summer-python-bootcamp.jpg';
import 'intersection-observer'; // Polyfill
import './styles.css';

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

const LeadershipExperience = ({ experience, isLeft }) => {
  return (
    <div className={`leadership-experience group grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-4 md:mx-64 transform hover:scale-105 transition duration-300 bg-gray-800 rounded-lg p-0.25 ${isLeft ? 'fade-in-right' : 'fade-in-left'}`}>
      <div className={`relative rounded-lg overflow-hidden h-full w-full md:${isLeft ? 'order-2' : 'order-1'}`}>
        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${experience.color} opacity-50`} />
      </div>
      <div className="bg-gray-800 p-8 rounded-lg h-full flex flex-col justify-center text-center md:text-left">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-hoverColor2 group-hover:translate-x-2 transition-transform">{experience.title}</h3>
        <p className="text-lightGray" dangerouslySetInnerHTML={{ __html: experience.description }}></p>
      </div>
    </div>
  );
};

const Leadership = () => {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)';
        }
      });
    };

    const observerInstance = new IntersectionObserver(handleScroll, {
      threshold: Array.from({ length: 101 }, (_, index) => index / 100),
    });

    setObserver(observerInstance);

    return () => observerInstance.disconnect();
  }, []);

  useEffect(() => {
    const experiences = document.querySelectorAll('.leadership-experience');
    experiences.forEach((experience) => {
      if (observer) {
        observer.observe(experience);
      }
    });
  }, [observer]);

  return (
    <div className="bg-black py-16 font-mono">
      <h1 className="text-4xl text-white font-bold text-center mb-16">Leadership</h1>
      <div className="px-8">
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Philosophy</h2>
        <p className="text-lightGray italic text-center mb-20">"The best way to predict the future is to create it." - Peter Drucker</p>
        
        <h2 className="text-3xl text-white font-semibold text-center mb-10">Leadership and Community</h2>
        
        <div className="space-y-32">
          {leadershipExperiences.map((experience, index) => (
            <LeadershipExperience key={experience.title} experience={experience} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;