import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_FAILURE,SHOW_ALERT, CREATE_ALERT, LOG_IN, LOG_OUT, USER_INFO, LOG_CHOICE } from "./people.actionTypes";
import { get as restGet } from "../../services/shared/rest.service";
// WILL TURN INTO A POWERFUL FETCHING MACHINE AFTER I APPLY PARAMS MUAHAHA
export const loadData = (param)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:LOAD_DATA_REQUEST})
            let response = await restGet(param)
            dispatch({type:LOAD_DATA_SUCCESS,payload:response.data})
        }catch(error){
            console.error('error: ',error)
            dispatch({type:LOAD_DATA_FAILURE,payload:error})
        }
    }
}

export const displayAlert = (message='No se ha especificado una alerta en DISPLAY',type) =>{
    return async(dispatch)=>{
            const payload = {message,type}
            try{
                dispatch({
                    type:SHOW_ALERT,
                    payload:payload
                })
            }catch(e){
                console.error(e)
            }
        }
}

export const createAlert = (message='No se ha especificado una alerta en CREATE',type) =>{
    return async(dispatch)=>{
            const payload = {message,type}
            try{
                dispatch({type:CREATE_ALERT,payload:payload})
            }catch(e){
                console.error(e)
            }
        }
}


export const logIn = (name,side,isLogged) =>{
    return async(dispatch)=>{
        const payload= {name,side,isLogged}
        try{
            dispatch({type:USER_INFO,payload:payload})
        }catch(e){
            console.error(e)
        }
    }
}
export const logOut = () =>{
    return async(dispatch)=>{
        const payload= {name:null,side:null,isLogged:false}
        try{
            dispatch({type:USER_INFO,payload:payload})
        }catch(e){
            console.error(e)
        }
    }
}

export const pickPage = (pageChoice) =>{
    return async(dispatch)=>{
            try{
            dispatch({type:LOG_CHOICE,payload:pageChoice})
        }catch(e){
            console.error(e)
        }
    }
}