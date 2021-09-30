import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import cliReducer from './reducer'

const mylonger = (store) => (next) => (action) => {
    //console.log('looger', action)
    next(action)
}


const store=createStore(combineReducers({cliReducer}), {}, applyMiddleware(mylonger, thunk, promise));


export default store;
