import React from 'react';
import './ExperienceEducation.scss';

const Education = ({ education }) => {
  return (
    <div>
      <div className='education'>
        <h2>Formación</h2>
        <ul>

        {education.map((item) => {
          return (
            <li className='educationcard' key={JSON.stringify(item)}>
              {item.educationlogo ? (
                <img
                  src={'../../assets/img/' + item.educationlogo}
                  alt='logo empresa'
                />
              ) : (
                <img
                  src={'../../assets/img/defaultimage2.svg'}
                  alt='empresa sin logo'
                />
              )}
              <div className='educationcarddata'>
                <h3 className='name'>{item.name}</h3>
                <p className='where'>{item.where}</p>
                <p className='date'>{item.date}</p>
                <p className='city'>{item.city}</p>
                <p className='desc'>{item.desc}</p>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
