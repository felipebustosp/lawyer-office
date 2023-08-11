import React from "react";

import data from '../../resources/matters.env.json';
import MatterItem from "./MatterItem";

const Matter = () => {

    return (
        <div id="matter-section">
            <h2>{data["matter.item.title.text"]}</h2>
            <p>{data["matter.item.title.description.text"]}</p>
            <div id="matter-items-container">
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