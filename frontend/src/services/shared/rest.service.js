import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const post = async (endpoint, body, headers) => {
    try {
        const url = `${baseUrl}${endpoint}`;
        const result = await axios(url, {
            method: 'POST',
            headers: headers ? headers : {'content-type': 'application/json'},
            data: body
        });
        return result;

    } catch (error) {
        const message = error?.response?.data?.error || "Ocurrió un error en la conexión";
        throw new Error(message)
    }
}