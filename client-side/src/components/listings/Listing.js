import React, { Component } from 'react';

class Listing extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.listing.title}</h3> - <small>{this.props.listing.location.name}</small>
                <img src={this.props.listing.img_url} alt={this.props.listing.title}/>
                {/* <p>Pets allowed: {this.props.listing.pets_allowed === true ? "Yes" : "No"} </p>
                <p>Air conditioning: {this.props.listing.air_conditioning === true ? "Yes" : "No"}</p>
                <p>Kitchen: {this.props.listing.kitchen === true ? "Yes" : "No"}</p>
                <p>Guests: {this.props.listing.guests}</p>
                <p>Bedrooms: {this.props.listing.bedrooms}</p>
                <p>Guests: {this.props.listing.guests}</p> */}
            </div>
        );
    }
}

export default Listing;