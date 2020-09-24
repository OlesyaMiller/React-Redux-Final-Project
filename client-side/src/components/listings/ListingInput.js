import React, { Component } from 'react';

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

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addListing(this.state)
        this.setState({text: ''})
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleOnChange} value={this.state.title} name="title"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.description} name="description"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.imgUrl} name="imgUrl"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.guests} name="guests"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.bedrooms} name="bedrooms"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.beds} name="beds"/>
                    <input type="text" onChange={this.handleOnChange} value={this.state.baths} name="baths"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default ListingInput;