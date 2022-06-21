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
          <h3>Languages</h3>
          <div key='languages'>
            <p>Language: {languages.language}</p>
            <p>Writing level: {languages.wrlevel}</p>
            <p>Speaking level: {languages.splevel}</p>
          </div>
        </>
      );
    } else if (showMore === 'habilities') {
      return (
        <div className='habilities'>
          <h3>Habilities</h3>
          <ul>
            {habilities.map((item) => {
              return (
                <li>
                  <p className='hability'>{item}</p>
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
          <h3>Volunteer</h3>
          <ul>
            {volunteer.map((item) => {
              return (
                <li>
                  <h4 className='volunteer'>{item.name}</h4>
                  <p className='volunteer_where'>{item.where}</p>
                  <p className='volunteer_ desc'>{item.description}</p>
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
