// src/App.jsx
import React from 'react';
import AboutMe from './components/AboutMe';
import PreviousExperience from './components/PreviousExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div>
      <AboutMe />
      <PreviousExperience />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
