import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeButton.css'; // Optional: separate CSS for the button

const HomeButton = () => {
    return (
        <Link to="/" className="home-button">
            Home
        </Link>
    );
};

export default HomeButton;