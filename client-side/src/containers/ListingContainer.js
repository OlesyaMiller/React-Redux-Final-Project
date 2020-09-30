import React, { Component } from 'react';
import Listings from '../components/listings/Listings'
import SearchField from '../components/listings/SearchField'
import { connect } from 'react-redux';
import ListingShow from '../components/listings/ListingShow'
import { Route, Switch } from 'react-router-dom'

class ListingContainer extends Component {

    render() {
        return (
            <div>
                <SearchField />
                <Switch>
                    <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} listings={this.props.listings}/>} />
                    <Route path="/listings" render={() => 
                        <Listings listings={this.props.listings}/>} 
                    />
                </Switch>    
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