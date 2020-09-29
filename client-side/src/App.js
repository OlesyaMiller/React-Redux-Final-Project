import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListings } from './actions/ListingsActions'
import ListingContainer from './containers/ListingContainer';
import Navbar from './components/nav/Navbar'
import Home from './components/nav/Home'
import About from './components/nav/About'
import ListingInput2 from './components/listings/ListingInput2'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class App extends Component {

  componentDidMount() {
    this.props.fetchListings()
  }
  
  render() {
    return (
      <div>
        <Container>
          <Col lg="2"></Col>
          <Col lg={{ span: 8, offset: 2 }}>
          <Router>
              <div className="routes">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ListingContainer} />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/new-listing" component={ListingInput2} />
                    </Switch>
              </div>
          </Router>
          </Col>
          <Col lg="2"></Col>
        </Container>
      </div>
    );
  }
}

export default connect(null, { fetchListings })(App);
