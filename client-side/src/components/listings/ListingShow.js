import React from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'
import Image from 'react-bootstrap/Image'
import ListingMap from './ListingMap'

const ListingShow = ({ listings, match }) => {
    
    if (listings.length === 0) return null; //stops the component from re-rendering

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId)) //params come from the url
    
    return (
        <div>
            <h2>{listing.title}</h2> 
            <Image style={{ width: '18rem' }} src={listing.img_url} alt={listing.title}/>
            <br/>
            <p>Description:{listing.description}</p>
            <p>Pets allowed: {listing.pets_allowed === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Air Conditioning: {listing.air_conditioning === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Kitchen: {listing.kitchen === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>WiFi: {listing.wifi === true ? <span>Yes</span> : <span>No</span>}</p>
            <p>Number of Guests: {listing.guests}</p>
            
            <h5>Write your review here:</h5>
            <ReviewsContainer listing={listing}/>
    
            <ListingMap latitude={listing.location.latitude}
                         longitude={listing.location.longitude}
                         listing={listing}
            />
        </div>
    );
};

export default ListingShow;