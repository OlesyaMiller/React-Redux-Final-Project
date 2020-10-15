export const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.listings
        case 'ADD_LISTING':
            return state.concat(action.listing)
        default:
        return state;
    }
}