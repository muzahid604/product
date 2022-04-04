import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link className='links' to='/home'>HOME</Link>
                <Link className='links' to='/reviews'>REVIEWS</Link>
                <Link className='links' to='/dashbord'>DASHBORD</Link>
            </nav>
        </div>
    );
};

export default Header;  