import React, { Component } from 'react';
import { addListing } from '../../actions/ListingsActions';
import { fetchLocations } from '../../actions/LocationsActions';
import { connect } from 'react-redux';

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
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    selectHandler = event => {
        // debugger
        this.setState({...this.state, [event.target.name]: JSON.parse(event.target.value)})
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addListing(this.state)
        // this.setState({}) reset the form
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Title:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.title} name="title"/>
                    <label>Description</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.description} name="description"/>
                    <label>Pets allowed:</label>
                    <select name="pets_allowed" onChange={this.selectHandler}>
                        <option value='true' >Yes</option>
                        <option value='false' >No</option>
                    </select>
                    <label>Air consitioning:</label>
                    <select name="air_conditioning" onChange={this.selectHandler}>
                        <option value='true' name="air_conditioning">Yes</option>
                        <option value='false' name="air_conditioning">No</option>
                    </select>
                    <label>WiFi:</label>
                    <select name="wifi" onChange={this.selectHandler}>
                        <option value='true' name="wifi">Yes</option>
                        <option value='false' name="wifi">No</option>
                    </select>
                    <label>Kitchen:</label>
                    <select name="kitchen" onChange={this.selectHandler}>
                        <option value='true' name="kitchen">Yes</option>
                        <option value='false' name="kitchen">No</option>
                    </select>
                    <label>Location:</label>
                    <label>Image url:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.img_url} name="img_url"/>
                    <label>Number of guests:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.guests} name="guests"/>
                    <label>Number of bedrooms:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.bedrooms} name="bedrooms"/>
                    <label>Number of beds:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.beds} name="beds"/>
                    <label>Number of baths:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.baths} name="baths"/>

                    <label>City</label>
                    {this.props.locations.map(location => 
                        {return <select name="location_id" 
                                        onChange={this.handleOnChange}>
                                        <option value={location.id}>{location.name}</option>
                                </select>})}
                    <input type="submit" value="Submit"/>
                </form>
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