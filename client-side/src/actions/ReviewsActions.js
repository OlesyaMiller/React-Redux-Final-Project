export const addReview = (review) => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_REVIEW', review: responseJSON })
        })
    }
}

export const fetchReviews = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews').then(response => {
            return response.json()
        }).then(data => {
            // console.log(data, 'location data'),
            dispatch({ type: 'FETCH_REVIEWS', reviews: data })
        })
    }
}