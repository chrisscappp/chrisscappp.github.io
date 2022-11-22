import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { usersReducer } from '../reducers/usersReducer'
import { newsListReducer } from '../reducers/newsListReducer'
import { coursesReducer } from '../reducers/coursesReducer'

const rootReducer = combineReducers({
    usersReducer,
    newsListReducer,
    coursesReducer,
    
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))