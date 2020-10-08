export default function reviewsReducer(state = [], action) {
    switch (action.type) {
    case 'ADD_REVIEW':
            console.log("action2", action)
        const review = { content: action.review.content, listingId: action.review.listingId };
        return [...state, action.review ]
    case 'FETCH_REVIEWS':
            return action.reviews
        default:
            return state;        
    }
}
