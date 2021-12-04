import {applyMiddleware, combineReducers, createStore} from "redux";
import {booksPageReducer} from "./Reducers/booksReducer";
import thunk from "redux-thunk";
let reducers =combineReducers({
    booksPage: booksPageReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store