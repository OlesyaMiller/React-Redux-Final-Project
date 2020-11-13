import React, { Component } from 'react';
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux';
import ListingShow from '../components/listings/ListingShow'
import { Route } from 'react-router-dom'

class ListingContainer extends Component {

    render() {
        const {listings} = this.props 

        return (

            <div>
                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} listings={listings}/>} />
                <Route exact path="/listings" render={() =>  
                    <Listings listings={listings}/>} 
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      listings: state.listings
    }
}

export default connect(mapStateToProps)(ListingContainer);