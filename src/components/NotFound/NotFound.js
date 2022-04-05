import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Oops!</h1>
            <img src="https://i.ibb.co/D836KPC/i-Stock-1142986365.jpg" alt="" />
            <Link className='not-found-link' to='/'>GO TO HOME PAGE</Link>
        </div>
    );
};

export default NotFound;