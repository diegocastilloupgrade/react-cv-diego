import React, { useState } from 'react';
import './More.scss';

const More = ({ languages, habilities, volunteer }) => {
  const [showMore, setShowmore] = useState('languages');
  //console.log('languages', languages);
  //console.log('habilities', habilities);
  //console.log('volunteer', volunteer);
  const condicion = () => {
    if (showMore === 'languages') {
      return (
        <>
          <h2>Languages</h2>
          <div key='languages'>
            <p>languages {languages.language}</p>
            <p>{languages.wrlevel}</p>
            <p>{languages.splevel}</p>
          </div>
        </>
      );
    } else if (showMore === 'habilities') {
      return (
        <div className='habilities'>
          <h2>Habilities</h2>
          <ul>
            {habilities.map((item) => {
              return (
                <li>
                  <p className='hability'>📕 {item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else if (showMore === 'volunteer') {
      console.log('entramos en volunteer');
      return (
        <div className='volunteer'>
          <h2>Volunteer</h2>
          <ul>
            {volunteer.map((item) => {
              return (
                <li>
                  <p className='volunteer'>{item.name}</p>
                  <p>{item.where}</p>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className='more card'>
      <h2>More information</h2>
      <nav>
        <button
          className='custom-btn btn-4'
          onClick={() => setShowmore('languages')}>
          Languages
        </button>
        <button
          className='custom-btn btn-4'
          onClick={() => setShowmore('habilities')}>
          Habilities
        </button>
        <button
          className='custom-btn btn-4'
          onClick={() => setShowmore('volunteer')}>
          volunteer
        </button>
      </nav>
      {condicion()}
    </div>
  );
};
export default More;
