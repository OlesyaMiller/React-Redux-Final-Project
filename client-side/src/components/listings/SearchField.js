import React, { Component } from 'react';
import { fetchLocations } from '../../actions/LocationsActions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class SearchField extends Component {

    componentDidMount() {
        this.props.fetchLocations()
    }

    render() {
        return (
            <div>
                <Form.Control as="select" name="location_id" 
                                        onChange={this.handleOnChange}>
                                        <option>Select City</option> 
                {this.props.locations.map(location => 
                        {return <option value={location.id}>{location.name}</option>}
                )}
                </Form.Control>
                
                <Button type="submit">Search</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      locations: state.locations
    }
}

export default connect(mapStateToProps, { mapStateToProps, fetchLocations })(SearchField);