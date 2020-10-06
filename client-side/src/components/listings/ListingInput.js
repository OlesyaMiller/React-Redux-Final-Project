import React, { Component } from 'react';
import { addListing } from '../../actions/ListingsActions';
import { fetchLocations } from '../../actions/LocationsActions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

class ListingInput extends Component {
    state = {
        title: "",
        description: "",
        pets_allowed: true,
        img_url: "",
        air_conditioning: true,
        guests: "",
        bedrooms: "",
        beds: "",
        baths: "",
        kitchen: true,
        wifi: true,
        location_id: ""
    }

    componentDidMount() {
        this.props.fetchLocations()
    }

    handleOnChange = (event) => {
        // debugger
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    selectHandler = event => {
        this.setState({...this.state, [event.target.name]: JSON.parse(event.target.value)})
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addListing(this.state)
        this.setState({
            title: "",
            description: "",
            pets_allowed: true,
            img_url: "",
            air_conditioning: true,
            guests: "",
            bedrooms: "",
            beds: "",
            baths: "",
            kitchen: true,
            wifi: true,
            location_id: ""
        }) 
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.title} name="title"/>
                    <Form.Label>Description</Form.Label>
                    <Form.Group>
                        <Form.Control as="textarea" type="text" onChange={this.handleOnChange} value={this.state.description} name="description"/>
                    </Form.Group>
                    <Form.Label>Pets allowed:</Form.Label>
                    <Form.Control as="select" name="pets_allowed" onChange={this.selectHandler}>
                        <option value='true' >Yes</option>
                        <option value='false' >No</option>
                    </Form.Control> 
                    <Form.Label>Air consitioning:</Form.Label>
                    <Form.Control as="select" name="air_conditioning" onChange={this.selectHandler}>
                        <option value='true' name="air_conditioning">Yes</option>
                        <option value='false' name="air_conditioning">No</option>
                    </Form.Control>
                    <Form.Label>WiFi:</Form.Label>
                    <Form.Control as="select" name="wifi" onChange={this.selectHandler}>
                        <option value='true' name="wifi">Yes</option>
                        <option value='false' name="wifi">No</option>
                    </Form.Control>
                    <Form.Label>Kitchen:</Form.Label>
                    <Form.Control as="select" name="kitchen" onChange={this.selectHandler}>
                        <option value='true' name="kitchen">Yes</option>
                        <option value='false' name="kitchen">No</option>
                    </Form.Control>
                    <Form.Label>Image url:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.img_url} name="img_url"/>
                    <Form.Label>Number of guests:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.guests} name="guests"/>
                    <Form.Label>Number of bedrooms:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.bedrooms} name="bedrooms"/>
                    <Form.Label>Number of beds:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.beds} name="beds"/>
                    <Form.Label>Number of baths:</Form.Label>
                    <Form.Control type="text" onChange={this.handleOnChange} value={this.state.baths} name="baths"/>

                    <Form.Label>City</Form.Label>
                    <Form.Control as="select" name="location_id" 
                                        onChange={this.handleOnChange}>
                                        <option value="select">Select</option>  
                    {this.props.locations.map(location => 
                        {return <option value={location.id}>{location.name}</option>
                        }
                    )}
                    </Form.Control>
                    <input type="submit" value="Submit"/>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      locations: state.locations
    }
}

export default connect(mapStateToProps, { addListing, fetchLocations })(ListingInput);