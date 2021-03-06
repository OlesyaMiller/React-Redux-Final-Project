export const fetchLocations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations').then(response => {
            return response.json()
        }).then(locations => {
            dispatch({ type: 'FETCH_LOCATIONS', payload: locations })
        })
    }
}