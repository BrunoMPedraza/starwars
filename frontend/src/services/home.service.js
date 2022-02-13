import {get as getRest} from './shared/rest.service';

export const loadSwapi = async(categories) =>{
    const endpoint= `api/${categories}`

    try{
        const result = await getRest(endpoint);
        if(result.status===200)
        return result.data.results;    
        else
        return 'Ha ocurrido un error'
    } 
    catch(error) {
        throw error;
    }
}