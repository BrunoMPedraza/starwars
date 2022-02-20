import {get as restGet} from './shared/rest.service';

export const loadSwapi = async(categories) =>{
    const endpoint= `api/${categories}`
    try{
        const result = await restGet(endpoint);
        if(result.status===200)
        return result.data.results;
        else
        return 'Ha ocurrido un error'
    } 
    catch(error) {
        throw new Error (error);
    }
}

export const passwords = ['palpatine','darthvader','kyloren','sith','ani']