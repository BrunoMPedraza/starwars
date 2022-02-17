import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_FAILURE } from "./people.actionTypes";

export const PERSON_KEY = 'peopleStore'
let initialState = {
    data:[],
    loading:false,
    errorMessage:''
}

export const peopleReducer = (state=initialState,action) =>{
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