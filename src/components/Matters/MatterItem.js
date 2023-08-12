import React from "react";

import '../../components/Matters/matterItem.css';

const MatterItem = ({title, description}) => {

    return (
        <div id="matter-item">
            <h3 id="matter-title">{title}</h3>
            <p id="matter-description">
                {description}
            </p>
        </div>
    );

};


export default MatterItem;