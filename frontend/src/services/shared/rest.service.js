import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const get = async (endpoint, body, headers) => {
    try {
        const url = `https://swapi.dev/api/${endpoint}`;
        const result = await axios(url, {
            method: 'GET',
            headers: headers ? headers : {'content-type': 'application/json'},
            data: body ? body : null
        });
        return result;

    } catch (error) {
        const message = error?.response?.data?.error || "Ocurrió un error en la conexión";
        throw new Error(message)
    }
}
