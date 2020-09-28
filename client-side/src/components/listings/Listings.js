import React, { Component } from 'react';
import Listing from './Listing'

class Listings extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.listings.map(listing => {return <div key={listing.id}>{<Listing listing={listing} key={listing.id} id={listing.id} />}</div>})}
            </div>
        );
    }
}

export default Listings;