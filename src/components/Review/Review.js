import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Review = (props) => {
    const { name, main, comment } = props.review
    return (
        <div className='review'>
            <div>
                <img className='pro-img' src="https://i.ibb.co/Sd4qQtQ/240410385-545444286733855-5133443840422653321-n.jpg" alt="" />
            </div>
            <div className='review-div'>
                <h2 className='client'>{name}</h2>
                <h6><h2 className='stars'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></h2> {main}</h6>
                <p>{comment}</p>
            </div>
        </div>

    );
};

export default Review;