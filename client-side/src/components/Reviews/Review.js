import React from 'react';

const Review = ({review}) => {
    return(
        <p style={{border: "1px solid grey", padding: "5px"}}>
            {review.content}
        </p>  
    )
}

export default Review;