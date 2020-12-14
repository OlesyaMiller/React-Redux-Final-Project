import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Listing = (props) => {

    const [likes, setLikes] = useState(0)
   
    const { listing: {id, img_url, location, title } } = props  

    return (
        <div>
            <Link to={`/listings/${id}`}>
                <Image style={{ width: '18rem' }} src={img_url} alt={title}/>
                <h4>{title}</h4> <strong>{location.name}</strong>
                <br/>
            </Link>
            <button onClick={() =>setLikes(likes + 1)}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    )
}

export default Listing;