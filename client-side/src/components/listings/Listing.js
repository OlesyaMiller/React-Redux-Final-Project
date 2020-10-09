import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import React from 'react'

const Listing = ({listing}) => {
        return (
            <div>
                <Link to={`/listings/${listing.id}`}>
                    <Image style={{ width: '18rem' }} src={listing.img_url} alt={listing.title}/>
                    <h4>{listing.title}</h4> <strong>{listing.location.city}</strong>
                    <br/>
                </Link>
            </div>
        );
}

export default Listing;