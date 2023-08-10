import React from "react";
import NavbarItem from './NavbarItem';

import './navbar.css';
import '../../index.css';
import data from '../../resources/navbar.env.json';

const Navbar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><NavbarItem text={data["navbar.title.presentation.text"]} url={data["navbar.title.presentation.url"]} /></li>
                <li><NavbarItem text={data["navbar.title.experience.text"]} url={data["navbar.title.experience.url"]} /></li>
                <li><NavbarItem text={data["navbar.title.matters.text"]} url={data["navbar.title.matters.url"]} /></li>
                <li><NavbarItem text={data["navbar.title.contact.text"]} url={data["navbar.title.contact.url"]} /></li>

            </ul>
        </nav>
    );
};

export default Navbar;