import React, { Component } from 'react';
import Listings from '../components/listings/Listings'
import { fetchLocations } from '../actions/LocationsActions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class ListingContainer extends Component {

    componentDidMount() {
        this.props.fetchLocations()
    }

    render() {
        console.log(this.props.listings, 'listings container')
        return (
            <div>
                {this.props.locations.map(location => 
                        {return <Form.Control as="select" name="location_id" 
                                        onChange={this.handleOnChange}>
                                        <option value={location.id}>{location.name}</option>
                                </Form.Control>
                        }
                    )}
                <Button type="submit">Search</Button>
                <Listings listings={this.props.listings} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      listings: state.listings,
      locations: state.locations
    }
}

export default connect(mapStateToProps, { fetchLocations })(ListingContainer);