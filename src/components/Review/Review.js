import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, gender, comment } = props.review
    return (
        <div className='review'>
            <div>
                <h2>{name}</h2>
            </div>
            <div className='review-div'>
                <h2>{name}</h2>
                <h3>{gender}</h3>
                <h4>{comment}</h4>
            </div>
        </div>

    );
};

export default Review;