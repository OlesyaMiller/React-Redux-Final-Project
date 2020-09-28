export const fetchLocations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/locations').then(response => {
            return response.json()
        }).then(data => {
            console.log(data, 'location data')
            dispatch({ type: 'FETCH_LOCATIONS', location: data })
        })
    }
}