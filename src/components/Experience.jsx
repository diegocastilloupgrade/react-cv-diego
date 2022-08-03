import React from "react";
import "./Education.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience">
      <h2>Experiencia</h2>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;