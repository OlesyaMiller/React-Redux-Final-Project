import React, { Component } from 'react';
import Review from './Review'

class Reviews extends Component {
    render() {
        const associatedReviews = this.props.reviews.filter(review => review.listing_id === this.props.listingId);
        
        const reviewList = associatedReviews.map((review, index) => {
          return <Review key={index} review={review} />
        })
        
        return (
            <div>
                <ul>
                    {reviewList}
                </ul>
            </div>
        );
    }
}

export default Reviews;