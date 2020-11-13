export const reviewsReducer = (state = [], action) => {
    console.log(11)
    switch (action.type) {
    case 'ADD_REVIEW':
        return [...state, action.payload ]
    case 'FETCH_REVIEWS':
        return action.payload 
        default:
            return state;        
    }
}
