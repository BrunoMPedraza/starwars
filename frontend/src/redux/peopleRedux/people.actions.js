import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS,LOAD_DATA_FAILURE } from "./people.actionTypes";
import { get as restGet } from "../../services/shared/rest.service";
// WILL TURN INTO A POWERFUL FETCHING MACHINE AFTER I APPLY PARAMS MUAHAHA
export const loadData = ()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:LOAD_DATA_REQUEST})
            let response = await restGet('people')
            dispatch({type:LOAD_DATA_SUCCESS,payload:response.data})
        }catch(error){
            console.error('error: ',error)
            dispatch({type:LOAD_DATA_FAILURE,payload:error})
        }
    }
}