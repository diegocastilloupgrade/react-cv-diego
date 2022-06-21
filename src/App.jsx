import React from 'react';
import './App.scss';
import { useState } from 'react';
import { Hero, Education, Experience, About, More } from './components';
import { CV } from './CV/CV';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className='App'>
      <Hero hero={hero} />
      <About hero={hero} />
      <div className='eduexp card'>
        <nav>
          <button
            className='custom-btn btn-4'
            onClick={() => setShowEducation(true)}>
            Education
          </button>
          <button
            className='custom-btn btn-4'
            onClick={() => setShowEducation(false)}>
            Experience
          </button>
        </nav>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
