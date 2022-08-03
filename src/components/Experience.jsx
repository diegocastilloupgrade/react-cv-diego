import React from 'react';
import './Experience.scss';

const Experience = ({ experience }) => {
  return (
    <div>
      <div className='experience'>
        <h2>Experiencia</h2>
        <ul>
          {experience.map((item) => {
            return (
              <li className='experiencecard' key={JSON.stringify(item)}>
                { item.companylogo ? <img src={'../../assets/img/' + item.companylogo} alt="logo empresa"/> :
                <img src={'../../assets/img/defaultimage2.svg'} alt="empresa sin logo"/> 
                }
                <div className='experiencecarddata'>
                  <h3 className='name'>{item.name}</h3>
                  <p className='where'>{item.where}</p>
                  <p className='date'>{item.date}</p>
                  <p className='desc'>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
