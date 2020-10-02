import React, { Component } from 'react';
import Listing from './Listing'
import SearchField from './SearchField'

class Listings extends Component {
    render() {
        return (
            <div>
                <SearchField />
                {this.props.listings.map(listing => {return <div key={listing.id}>{<Listing listing={listing} key={listing.id} id={listing.id} />}</div>})}
            
                {/* <Route path="/listings/listingId" component={ListingShow} />
                <Route path="/listings" render={() => <Listings />} /> */}
            </div>
        );
    }
}

export default Listings;