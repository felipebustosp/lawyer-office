import React from "react";

import '../../components/Experience/experienceItem.css';

const ExperienceItem = ({ title, place, dates, descriptionList }) => {
  return (
    <div>
      <h4 id="experience-title">{title}</h4>
      <h4 id="experience-place">{place}</h4>
      <h5 id="experience-dates">{dates}</h5>
      <ul>
        {descriptionList.map((item, index) => (
          <li id="experience-description" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
