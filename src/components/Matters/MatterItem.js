import React from "react";

const MatterItem = ({title, description}) => {

    return (
        <div id="matter-item">
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    );

};


export default MatterItem;