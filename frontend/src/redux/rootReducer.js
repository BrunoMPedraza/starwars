import { peopleReducer, PERSON_KEY } from "./peopleRedux/people.reducer";
import { combineReducers } from "redux";

let rootReducer= combineReducers({
    [PERSON_KEY]: peopleReducer
})

export {rootReducer}