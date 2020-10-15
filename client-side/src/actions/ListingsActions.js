export const fetchListings = () => { //cannot use export default with arrow functions
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
    console.log(listing, 'listing')
    return (dispatch) => {
        fetch('http://localhost:3000/listings', {
            method: 'POST',
            body: JSON.stringify(listing),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_LISTING', listing: responseJSON })
        })
    }
}