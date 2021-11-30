import {combineReducers, createStore} from "redux";
import {booksPageReducer} from "./Reducers/booksReducer";

let reducers =combineReducers({
    booksPage: booksPageReducer
})
let store = createStore(reducers)

window.store = store
export default store