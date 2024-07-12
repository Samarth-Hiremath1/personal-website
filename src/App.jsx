import React, { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import PreviousExperience from './components/PreviousExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import NavigationBar from './components/NavigationBar';
import Leadership from './components/Leadership';
import ScrollProgressBar from './components/ProgressBar'; 

const App = () => {
  return (
    <div>
      <ScrollProgressBar />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="previous-experience" className="mt-40">
        <PreviousExperience />
      </div>
      <div id="projects" className="mt-16">
        <Projects />
      </div>
      <div id="leadership" className="mt-16">
        <Leadership />
      </div>
      {/* <div id="skills" className="pt-16">
        <Skills />
      </div> */}
      <div id="contact-me" className="mt-16">
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
