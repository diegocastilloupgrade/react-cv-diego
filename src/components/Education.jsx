import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education">
      <h2>Formación</h2>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.city}</p>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;