import React from "react";

import MatterItem from "./MatterItem";
import BackgroundImage from "../Utils/BackgroundImage";

import data from '../../resources/matters.env.json';
import '../../components/Matters/matter.css';

import image from '../../img/image_1.png';

const Matter = () => {

    return (
        <div id="matters">
            <BackgroundImage src={image} />
            <div id="matter-container">
                <h3 id="matter-title">{data["matter.item.title.text"]}</h3>
                <p>{data["matter.item.title.description.text"]}</p>
                <MatterItem
                    title={data["matter.item.civil.title.text"]}
                    description={data["matter.item.civil.description.text"]}
                />
                <MatterItem
                    title={data["matter.item.family.title.text"]}
                    description={data["matter.item.family.description.text"]}
                />
                <MatterItem
                    title={data["matter.item.labor.title.text"]}
                    description={data["matter.item.labor.description.text"]}
                />
            </div>
        </div>
    );

};

export default Matter;