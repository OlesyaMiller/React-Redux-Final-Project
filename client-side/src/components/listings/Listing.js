import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

const Listing = ({listing}) => {
        return (
            <div>
                <Link to={`/listings/${listing.id}`}>
                    <Image style={{ width: '18rem' }} src={listing.img_url} alt={listing.title}/>
                    <p>{listing.title}</p> 
                    <strong>{listing.location.name}</strong>
                </Link>

                <ReviewsContainer />
            </div>
        );
}

export default Listing;