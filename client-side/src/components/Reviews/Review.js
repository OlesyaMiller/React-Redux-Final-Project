import React from 'react';

const Review = (props) => {
    return (
        <div>
            <p style={{border: "1px solid grey", padding: "5px"}}>
                {props.review.content}
            </p>    
        </div>
    );
};

export default Review;