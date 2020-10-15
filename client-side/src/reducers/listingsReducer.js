export const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.payload
        case 'ADD_LISTING':
            return state.concat(action.payload)
        default:
        return state;
    }
}