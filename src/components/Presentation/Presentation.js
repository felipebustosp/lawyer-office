import React from "react";
import data from '../../resources/presentation.env.json';
import image1 from '../../img/image_1.png';

import './presentation.css';

const Presentation = () => {
    return (
        <div id="presentation">
            <div id="presentation-img">
                <img src={image1} alt=""/>
            </div>
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