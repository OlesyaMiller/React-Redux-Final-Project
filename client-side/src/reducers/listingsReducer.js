// import cuid from 'cuid';

export const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.listings
        case 'ADD_LISTING':
            console.log("action", action)
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
            
            return state.concat(action.listing)
        default:
        return state;
    }
}