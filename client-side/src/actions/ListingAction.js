export const fetchListings = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/listings').then(response => {
            return response.json()
        }).then(data => {
            console.log(data, 'listings data')
            dispatch({ type: 'FETCH_LISTINGS', listings: data })
        })
    }
}

export const addListing = (listing) => {
    return (dispatch) => {
        fetch('http://localhost:3000/listings', {
            method: 'POST',
            body: JSON.stringify(listing),
            headers: {"Content-Type": "applicatin/json"}
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log(responseJSON, 'add-listing')
            dispatch({ type: 'ADD_LISTING', listing: responseJSON })
        })
    }
}