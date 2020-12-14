export const addReview = (review) => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            return response.json()
        }).then(review => {
            dispatch({ type: 'ADD_REVIEW', payload: review })
        })
    }
}

export const fetchReviews = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reviews').then(response => {
            return response.json()
        }).then(reviews => {
            dispatch({ type: 'FETCH_REVIEWS', payload: reviews })
        })
    }
}


