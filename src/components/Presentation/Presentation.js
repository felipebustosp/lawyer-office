import React from "react";

import BackgroundImage from '../Utils/BackgroundImage';

import data from '../../resources/presentation.env.json';
import './presentation.css';
import image from '../../img/image_1.png';

const Presentation = () => {
    return (
        <div id="presentation">
            <BackgroundImage src={image} />
            <div id="presentation-container">                   
                    <h1>{data["presentation.title.name.text"]}</h1>
                    <h2>{data["presentation.title.degree.text"]}</h2>
                    <p>{data["presentation.title.description.text.1"]}</p>
                    <p>{data["presentation.title.description.text.2"]}</p>
                </div>
            
        </div>
    );
};

export default Presentation;