export const fetchListings = () => { //cannot use export default with arrow functions
    return (dispatch) => {
        fetch('http://localhost:3000/listings').then(response => {
            return response.json()
        }).then(data => {
            dispatch({ type: 'FETCH_LISTINGS', payload: data })
        })
    }
}

export const addListing = (listing) => {
    return (dispatch) => {
        fetch('http://localhost:3000/listings', {
            method: 'POST',
            body: JSON.stringify(listing),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_LISTING', payload: responseJSON })
        })
    }
}