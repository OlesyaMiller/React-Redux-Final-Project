export default function locationsReducer(state = {locations: []}, action) {
    switch (action.type) {
        case 'FETCH_LOCATIONS':
        return {
          ...state,
          locations: action.locations
        }
        default:
        return state;
    }
}