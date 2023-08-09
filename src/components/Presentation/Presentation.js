import React from "react";
import data from '../../resources/presentation.env.json';

import './presentation.css';

const Presentation = () => {
    return (
        <section id="presentation">
            <h1>{data["presentation.title.name.text"]}</h1>
            <h2>{data["presentation.title.degree.text"]}</h2>
            <p>{data["presentation.title.description.text.1"]}</p>
            <p>{data["presentation.title.description.text.2"]}</p>
            <p>{data["presentation.title.description.text.3"]}</p>
        </section>
    );
};

export default Presentation;