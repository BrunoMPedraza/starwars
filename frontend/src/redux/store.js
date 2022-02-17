import { rootReducer } from "./rootReducer";
import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

let allMiddleWares=[thunk]
let store=createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...allMiddleWares)
))
export {store}