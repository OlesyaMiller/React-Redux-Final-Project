import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import Image from 'react-bootstrap/Image'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
  } from "react-google-maps";
  import MapWithAMarker from './ListingMap'

const ListingShow = ({ listings, match }) => {

    if (listings.length === 0) return null; //stops the component from re-rendering

    const listing = listings.find(listing => listing.id === parseInt(match.params.listingId))

    // const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    //     <GoogleMap
    //       defaultZoom={8}
    //       defaultCenter={{ lat: -34.397, lng: 150.644 }}
    //     >
    //       { props.isMarkerShown && <Marker 
    //         position={{ lat: -34.397, lng: 150.644 }}
    //       />}
    //     </GoogleMap>
    //   ));
      
    return (
        <div>
            <h2>{listing.title}</h2> 
            <Image style={{ width: '18rem' }} src={listing.img_url} alt={listing.title}/>
            <br/>
            <h3>Reviews</h3>
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