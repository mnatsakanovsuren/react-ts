import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper indigo darken-1 px1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">TODO List</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Info</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
