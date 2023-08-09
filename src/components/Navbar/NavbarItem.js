import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({text, url}) => {
    return (
        <Link to={url}>{text}</Link>
    );
};

export default NavbarItem;