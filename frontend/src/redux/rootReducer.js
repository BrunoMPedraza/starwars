import { peopleReducer, alertsReducer, DATA_KEY,NOTIFICATIONS_KEY, LOGGED_KEY, loggerReducer } from "./peopleRedux/people.reducer";
import { combineReducers } from "redux";

let rootReducer= combineReducers({
    [DATA_KEY]: peopleReducer,
    [NOTIFICATIONS_KEY]: alertsReducer,
    [LOGGED_KEY]: loggerReducer,
})  

export {rootReducer}