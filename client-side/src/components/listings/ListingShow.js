import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { withRouter } from 'react-router-dom'

const ListingShow = ({ listings, match, history }) => {

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId))

    return (
        <div>
            <h2>{listing.title}</h2> 
            <ReviewsContainer listing={listing}/>
        </div>
    );
};

export default withRouter(ListingShow);