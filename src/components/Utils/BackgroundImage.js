import React from "react";
import '../../components/Utils/backgroundImage.css';

const BackgroundImage = ({src}) => {
    return (
        <div id="background-img">
            <img src={src} alt="" />
        </div>
    );
};

export default BackgroundImage;