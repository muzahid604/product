import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <div className='products-details'>
            <div className='image'>
                <img src="https://i.ibb.co/rQSvb2F/compass-lying-near-drone.jpg" alt="" />
            </div>
            <div className="details">
                <h1 className='name'>DJI Mini 2  Ultralight and Foldable Drone Quadcopter, 3-Axis Gimbal with 4K Camera, 31 Mins Flight Time, QuickShots Gray</h1>
                <h4>About this item</h4>
                <ul>
                    <li>PACK LIGHT, FLY FREE</li>
                    <li>3-AXIS GIMBAL WITH 4K CAMERA</li>
                    <li>OCUSYNC 2.0 VIDEO TRANSMISSION</li>
                    <li>POWERFUL PERFORMANCE</li>
                    <li>4X ZOOM</li>
                    <li>QUICKSHOTS</li>
                </ul>

                <div className="rating">
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
                <a href="/">11,999 ratings</a>
            </div>
        </div >
    );
};

export default Home;