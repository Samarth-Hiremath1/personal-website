import React, { useState, useEffect } from 'react';
import profilePic from '../images/samarth-pic1.jpg';
import NavigationBar from './NavigationBar';
import './styles.css';

const MobileView = () => (
  <div className='mobile-class'>
    <NavigationBar />
    <img src={profilePic} alt="Samarth Hiremath" className='animate-fadeInLeft mt-4' style={{ animationDuration: '1s' }}/>
    <div className="w-full bg-darkGrey2 flex flex-col justify-end pb-10">
      <div className="text-white px-5">
        <h1 className="text-4xl font-bold leading-tight animate-fadeInRight mt-8">I'm Samarth Hiremath.</h1>
        <h2 className="text-2xl font-bold text-lightGrey2 mt-4 animate-fadeInRight" style={{ animationDuration: '1s' }}>An aspiring SWE, Product Manager, and Entrepreneur.</h2>
        <p className="text-base mt-6 animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1s' }}>
          I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
        </p>
        <p className="text-base mt-3 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1s' }}>
          In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
        </p>
      </div>
    </div>
  </div>

);

const DesktopView = () => (
  <div className='desktop-class'>
    <div className="absolute right-0 w-2/3 bg-darkGrey2 min-h-full z-0" style={{ marginBottom: '10%' }}></div>
    <div className="NavigationBarContainer">
      <NavigationBar className="z-50" />
    </div>

    <div className="relative w-full flex items-center z-10 mt-28">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 z--10">
        <img
          src={profilePic}
          alt="Samarth Hiremath"
          className="w-full h-auto object-contain fadeInLeft"
          style={{ animationDuration: '1s' }}
        />
      </div>
      <div className="relative z-20 text-white py-8" style={{ paddingLeft: '45%', paddingRight: '5%', animationDuration: '1s' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight animate-fadeInRight">
          I'm Samarth Hiremath.
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-lightGrey2 mt-4 animate-fadeInRight" style={{ animationDuration: '1s' }}>
          An aspiring SWE, Product Manager, and Entrepreneur.
        </h2>
        <div className="mt-6">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl animate-fadeInRight" style={{ animationDelay: '0.1s', animationDuration: '1s' }}>
            I'm pursuing my greatest passions of Tech and Business while studying Computer Science and minoring in Technology Management @ UC Davis.
          </p>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 animate-fadeInRight" style={{ animationDelay: '0.2s', animationDuration: '1s' }}>
            In my free time, I love playing guitar and exploring new places and experiences, both in nature and man-made.
          </p>
        </div>
      </div>
    </div>
  </div>
);


const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default AboutMe;
