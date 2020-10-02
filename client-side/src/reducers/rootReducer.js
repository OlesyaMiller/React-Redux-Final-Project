import { combineReducers } from 'redux'
import { listingsReducer } from './listingsReducer'
import { locationsReducer} from './locationsReducer'
import reviewsReducer from './reviewsReducer' // exported as default, that's why we don't need curly braces

export const rootReducer = combineReducers({
    listings: listingsReducer,
    locations: locationsReducer,
    reviews: reviewsReducer
})
