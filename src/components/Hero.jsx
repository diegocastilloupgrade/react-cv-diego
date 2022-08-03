import React from 'react';
import './Hero.scss';

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <div className='card'>
        <div className='cardHeader'>
          <div className='opacity'></div>
        </div>
        <img src={hero.image} alt={hero.name} />
        <h1>
          {hero.name} {hero.adress}
        </h1>
        <p className='description'> {hero.description}</p>
        <p className='city'> {hero.city} </p>
        <p className='birthDate'> {hero.birthDate}</p>
        <div class='contactData'>
          <p className='mail'>
            <a href={'mailto:' + hero.email}>{hero.email}</a>
          </p>
          <p className='phone'>{hero.phone}</p>
          <p className='gitHub'>
            <a href={hero.gitHub}>GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
