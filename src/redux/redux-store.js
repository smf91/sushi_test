import catalogReducer from './catalog-reducer'
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    catalogPage : catalogReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;