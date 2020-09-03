import axios from 'axios';

class ApiService {
    async getAPI(url) {
        let response = await axios.get(url);
        return response;
        // return axios.get(url)
        //     .then((response) => {
        //         return response;
        //     })
        //     .catch((error) => {
        //         return error;
        //     })
    }

    async postUser(url, data) {
        let resposne = await axios.post(url, data);
        return resposne
    }
}

export default new ApiService()