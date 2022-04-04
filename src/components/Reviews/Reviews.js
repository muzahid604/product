import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div>
            <h1 className='review-head'>Top reviews from customers({reviews.length})</h1>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                >
                </Review>)
            }
            <button className='btn-see-more'>See more...</button>
        </div>
    );
};

export default Reviews;