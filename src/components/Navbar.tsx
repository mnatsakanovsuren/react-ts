import React from 'react';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper indigo darken-1 px1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">TODO List</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
);
