import React, { Component } from 'react';
import Listing from './Listing'
import SearchField from './SearchField'

class Listings extends Component {
    render() {
        return (
            <div>
                {this.props.listings.map(listing => {return <div key={listing.id}>{<Listing listing={listing} key={listing.id} id={listing.id} />}</div>})}
            </div>
        );
    }
}

export default Listings;