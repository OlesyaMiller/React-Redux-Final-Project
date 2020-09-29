import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListings } from './actions/ListingsActions'
import ListingContainer from './containers/ListingContainer';
import Navbar from './components/nav/Navbar'
import Home from './components/nav/Home'
import About from './components/nav/About'

class App extends Component {

  componentDidMount() {
    this.props.fetchListings()
  }
  
  render() {
    return (
      <div>
        <Router>
            <div className="routes">
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={ListingContainer} />
                      <Route path="/home" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/new-listing" component={CreateListing} />
                  </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchListings })(App);
