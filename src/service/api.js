import axios from 'axios';

class ApiService {
    async getAPI(url) {
        let response = await axios.get(url);
        return response;
        // return axios.get(url, { Authorization: 'bearer asdasdadasdasdasd' })
        //     .then((response) => {
        //         return response
        //     })
        //     .catch((error) => {
        //         return error
        //     })
    }
}

export default new ApiService(); 
