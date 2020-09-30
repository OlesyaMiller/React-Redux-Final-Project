import React, { Component } from 'react';
import Listing from './Listing'
import ListingShow from './ListingShow'

class Listings extends Component {
    render() {
        return (
            <div>
                Listings component
                {this.props.listings.map(listing => {return <div key={listing.id}>{<Listing listing={listing} key={listing.id} id={listing.id} />}</div>})}
            
                {/* <Route path="/listings/listingId" component={ListingShow} />
                <Route path="/listings" render={() => <Listings />} /> */}
            </div>
        );
    }
}

export default Listings;