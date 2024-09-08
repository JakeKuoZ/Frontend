import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import CSS for styling
import logo from './aa.JPG'; // Import the image from the components folder

const Header = () => {
    return (
        <header className="site-header">
            <div className="brand-logo">
                <Link to="/">
                    <img
                        src={logo} // Reference the imported image here
                        alt="Brand Logo"
                        className="brand-logo-img"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;