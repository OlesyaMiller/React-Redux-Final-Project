import React, { Component } from 'react';
import { addListing } from '../actions/ListingAction';
import { fetchLocations } from '../actions/LocationAction';
import { connect } from 'react-redux';

class ListingInput extends Component {
    state = {
        title: "",
        description: "",
        petsAllowed: "",
        imgUrl: "",
        airConditioning: "",
        guests: "",
        bedrooms: "",
        beds: "",
        baths: "",
        kitchen: "",
        wifi: "",
        location: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    selectHandler = event => {
        this.setState({[event.target.name]: JSON.parse(event.target.value)})
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
                    <select onChange={this.selectHandler}>
                        <option value='true' name="petsAllowed">Yes</option>
                        <option value='false' name="petsAllowed">No</option>
                    </select>
                    <label>Air consitioning:</label>
                    <select onChange={this.selectHandler}>
                        <option value='true' name="airConditioning">Yes</option>
                        <option value='false' name="airConditioning">No</option>
                    </select>
                    <label>WiFi:</label>
                    <select onChange={this.selectHandler}>
                        <option value='true' name="wifi">Yes</option>
                        <option value='false' name="wifi">No</option>
                    </select>
                    <label>Kitchen:</label>
                    <select onChange={this.selectHandler}>
                        <option value='true' name="kitchen">Yes</option>
                        <option value='false' name="kitchen">No</option>
                    </select>
                    <label>Location:</label>
                    {/* <select onChange={this.handleOnChange}>
                        <option value='1' name="location">San Juan</option>
                    </select> */}
                    <label>Image url:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.imgUrl} name="imgUrl"/>
                    <label>Number of guests:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.guests} name="guests"/>
                    <label>Number of bedrooms:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.bedrooms} name="bedrooms"/>
                    <label>Number of beds:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.beds} name="beds"/>
                    <label>Number of baths:</label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.baths} name="baths"/>
                    <select onChange={this.handleOnChange}>
                        {this.fetchLocations.map(location => {return <option value={location.id} name="location">{location.name}</option>})}
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addListing, fetchLocations })(ListingInput);