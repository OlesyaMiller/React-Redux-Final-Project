import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Listing extends Component {
    render() {
        return (
            <div>
                <Image style={{ width: '18rem' }} src={this.props.listing.img_url} alt={this.props.listing.title}/>
                <p>{this.props.listing.title}</p> 
                <strong>{this.props.listing.location.name}</strong>
            </div>
        );
    }
}

export default Listing;