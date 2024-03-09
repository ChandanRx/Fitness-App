import axios from "axios";


const baseURL = 'https://exercisedb.p.rapidapi.com/'

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': 'c1926f1e7fmsh31e8c16ec1c905bp15b7e4jsnf5e9f0904f8d',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.log(error);
    }
}


export const fetchExercisesByBodyPart = async (bodyPart) => {
    let data = await apiCall(baseURL + `exercises/bodyPart/${bodyPart}`);
    return data;

}

