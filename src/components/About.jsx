import React from 'react';
import './About.scss';

const About = ({ hero }) => {
  return (
    <div>
      <div className='about card'>
      <h2>About</h2>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item[0])}>
              <p className='name'>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
