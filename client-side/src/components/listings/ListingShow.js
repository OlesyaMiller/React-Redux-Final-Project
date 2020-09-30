import React from 'react';

const ListingShow = ({ listings, match }) => {

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId))

    console.log(listing, "list")
    return (
        <div>
            <h2>{listing.title}</h2>
            show 
        </div>
    );
};

export default ListingShow;