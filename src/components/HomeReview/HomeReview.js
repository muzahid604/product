import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const HomeReview = () => {
    const [reviews] = useReviews();
    const homeReviews = reviews.slice(3, 6);

    return (
        <div>
            <h1 className='review-head'>Top reviews from customers({reviews.length})</h1>
            {
                homeReviews.map(homeReview => <Review
                    key={homeReview.id}
                    review={homeReview}
                >
                </Review>)
            }
        </div>
    );
};

export default HomeReview;