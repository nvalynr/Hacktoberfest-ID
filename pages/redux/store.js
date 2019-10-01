import { createStore, applyMiddleware, combineReducers } from 'redux'

import { logger, promise } from '../redux/middlewares'
import user from './_reducers/user'

const reducers = combineReducers({
    user
})

const store = createStore(
    reducers,
    applyMiddleware(logger, promise)
)

export default store
