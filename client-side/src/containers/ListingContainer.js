import React, { Component } from 'react';
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux';
import ListingShow from '../components/listings/ListingShow'
import { Route } from 'react-router-dom'

class ListingContainer extends Component {

    render() {
        return (
            <div>
                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} listings={this.props.listings}/>} />
                <Route exact path="/listings" render={() =>  
                    <Listings listings={this.props.listings}/>} 
                />
                {/* we have to use render instead of component in /listings route */}
                {/* to be able to pass it the props */}
                {/* routerProps contain information about the url */}
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