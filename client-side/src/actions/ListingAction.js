export const fetchListings = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/listings').then(response => {
        return response.json()
      }).then(responseJSON => {
          console.log(responseJSON, 'data')
        dispatch({ type: 'FETCH_LISTINGS', listings: responseJSON })
      })
    }
  }