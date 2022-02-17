import { peopleReducer, PERSON_KEY } from "./peopleRedux/people.reducer";
import { combineReducers } from "redux";
import alertSlice from "../features/alertSlice";

let rootReducer= combineReducers({
    [PERSON_KEY]: peopleReducer,
    notifications: alertSlice.reducer
})

export {rootReducer}