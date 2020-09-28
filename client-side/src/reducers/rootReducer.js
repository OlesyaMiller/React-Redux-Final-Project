import { combineReducers } from 'redux'
import { listingsReducer } from './listingsReducer'
import { locationsReducer } from './locationsReducer'

export const rootReducer = combineReducers({
    listings: listingsReducer,
    locations: locationsReducer
})
