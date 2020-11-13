import { combineReducers } from 'redux'
import { listingsReducer } from './listingsReducer'
import { locationsReducer} from './locationsReducer'
import { reviewsReducer } from './reviewsReducer' 

export const rootReducer = combineReducers({
    listings: listingsReducer,
    locations: locationsReducer,
    reviews: reviewsReducer
})
