import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import Image from 'react-bootstrap/Image'
import MapWithAMarker from './ListingMap'

const ListingShow = ({ listings, match }) => {

    if (listings.length === 0) return null; //stops the component from re-rendering

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId))
    
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
    
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}

                isMarkerShown
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                latitude={listing.location.latitude}
                longitude={listing.location.longitude}
            />
        </div>
    );
};

export default ListingShow;