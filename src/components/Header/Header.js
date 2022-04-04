import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <h1>Buy Here</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/review">Review</a>
            </nav>
        </div>
    );
};

export default Header;  