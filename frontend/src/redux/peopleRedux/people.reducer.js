import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_FAILURE,CREATE_ALERT,SHOW_ALERT, USER_INFO, LOG_CHOICE } from "./people.actionTypes";

export const DATA_KEY = 'dataSwapi'
export const NOTIFICATIONS_KEY = 'notificationsLog'
export const LOGGED_KEY = 'loggedAuth'
let dataInitialState = {
    data:[],
    loading:false,
    errorMessage:''
}
let alertInitialState = {
}
let loggedInitialState = {
    name:'user',
    side:'sith',
    isLogged:false
}


export const peopleReducer = (state=dataInitialState,action) =>{
    let{type,payload} = action
    switch(type){
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                loading:true,
                errorMessage:''
            }
        case LOAD_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:payload,
                errorMessage:''
            }
        case LOAD_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                errorMessage:'Ha ocurrido un error'
            }
        default: return state
    }
}

export const alertsReducer = (state=alertInitialState,action) =>{
    let{type,payload} = action
    switch(type){
        case CREATE_ALERT:
            return{
            message: payload.message,
            type: payload.type
            }
        case SHOW_ALERT:
            return{
                message: payload.message,
                type: payload.type
            }
        default: return state
        }
}

export const loggerReducer = (state=loggedInitialState,action) =>{
    let{type,payload} = action
    switch(type){
        case USER_INFO:
            return{
                ...state,
                name:payload.name,
                side:payload.side,
                isLogged:payload.isLogged,
                pageChoice:0,
            }
        case LOG_CHOICE:
            return{
                ...state,
                pageChoice:payload.pageChoice
            }
        default: return state
    }
}   