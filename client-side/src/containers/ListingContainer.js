import React, { Component } from 'react';
import Listings from '../components/listings/Listings'
import { connect } from 'react-redux';
import ListingInput from '../components/listings/ListingInput';

class ListingContainer extends Component {
    render() {
        console.log(this.props.listings, 'listings container')
        return (
            <div>
                <ListingInput />
                <Listings listings={this.props.listings} />
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