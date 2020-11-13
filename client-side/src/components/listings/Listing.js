import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class Listing extends Component {

    state = {
        likes: 0
    }
    
    chandeOnClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render(){
        const { listing: {id, img_url, location, title } } = this.props  

        return (
            <div>
                <Link to={`/listings/${id}`}>
                    <Image style={{ width: '18rem' }} src={img_url} alt={title}/>
                    <h4>{title}</h4> <strong>{location.name}</strong>
                    <br/>
                </Link>
                <button onClick={this.chandeOnClick}>Like</button>
                <p>Likes: {this.state.likes}</p>
            </div>
        );
    }
}

export default Listing;