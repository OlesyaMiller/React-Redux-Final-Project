import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from './actions/ListingAction'
import ListingContainer from './containers/ListingContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchListings()
  }
  
  render() {
    return (
      <div>
        App component
        <ListingContainer />
      </div>
    );
  }
}

export default connect(null, { fetchListings })(App);
