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
        <p> {hero.city} </p>
        <p> {hero.birthDate}</p>
        <p>
          <a href={'mailto:' + hero.email}>{hero.email}</a>
        </p>
        <p>{hero.phone}</p>
        <p>
          <a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
