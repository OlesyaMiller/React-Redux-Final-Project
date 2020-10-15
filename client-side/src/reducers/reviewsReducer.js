export default function reviewsReducer(state = [], action) {
    switch (action.type) {
    case 'ADD_REVIEW':
        return [...state, action.payload ]
    case 'FETCH_REVIEWS':
            return action.payload
        default:
            return state;        
    }
}
