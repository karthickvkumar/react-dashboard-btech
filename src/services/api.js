import axios from 'axios';

class ApiService {
    async getAPI(url) {
        let response = await fetch(url, { method: 'GET' });
        let finalResponse = await response.json();
        return finalResponse;

        // let response = await axios.get(url);
        // return response;

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

    validateEmail(email){
        const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email);
    }
}

export default new ApiService()