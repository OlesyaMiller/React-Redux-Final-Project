import React, { Component } from 'react';
import Listing from './Listing'

class Listings extends Component {
    render() {
        const {listings} = this.props
        return (
            <div>
                {listings.map(listing => {return <div key={listing.id}>{<Listing listing={listing} key={listing.id} id={listing.id} />}</div>})}
            </div>
        );
    }
}

export default Listings;