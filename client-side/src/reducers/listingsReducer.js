// import cuid from 'cuid';

export default function listingsReducer(state = {listings: []}, action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
        return {
          ...state,
          listings: action.listings
        }
        case 'ADD_LISTING':
            console.log("action", action)
            const listing = action.listing
                // id: cuid(),
                // // id: action.id,
                // title: action.title,
                // description: action.description,
                // pets_allowed: action.pets_allowed,
                // img_url: action.img_url,
                // air_conditioning: action.air_conditioning,
                // guests: action.guests,
                // bedrooms: action.bedrooms,
                // beds: action.beds,
                // baths: action.baths,
                // kitchen: action.kitchen,
                // wifi: action.wifi,
                // location: action.location
            
            return { ...state, listings: state.listings.concat(listing) };
        default:
        return state;
    }
}