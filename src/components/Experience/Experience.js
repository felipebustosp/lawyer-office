import React from "react";

import data from '../../resources/experience.env.json';
import ExperienceItem from "./ExperienceItem";
import '../Experience/experience.css';
import NavbarItem from "../Navbar/NavbarItem";

const Experience = () => {

    const experienceDescription1 = [
        data["experience.description.text.1.1"],
        data["experience.description.text.1.2"],
        data["experience.description.text.1.3"]
    ];


    const experienceDescription2 = [
        data["experience.description.text.2.1"],
        data["experience.description.text.2.2"],
        data["experience.description.text.2.3"]
    ];

    return (
        <div className="experience-item">
            <ExperienceItem
                title={data["experience.title.text.1"]}
                place={data["experience.place.text.1"]}
                dates={data["experience.dates.text.1"]}
                descriptionList={experienceDescription1}
            />
            <ExperienceItem
                title={data["experience.title.text.2"]}
                place={data["experience.place.text.2"]}
                dates={data["experience.dates.text.2"]}
                descriptionList={experienceDescription2}
            />


        </div>
    );
};

export default Experience;