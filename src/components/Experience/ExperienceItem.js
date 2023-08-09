import React from "react";

const ExperienceItem = ({ title, place, dates, descriptionList }) => {
  return (
    <div id="experience-item">
      <h4>{title}</h4>
      <h4>{place}</h4>
      <h5>{dates}</h5>
      <ul id="exp-descr-list">
        {descriptionList.map((item, index) => (
          <li id="exp-descr-item" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
