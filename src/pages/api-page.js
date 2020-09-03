import React, { Component } from 'react';
import axios from 'axios';

import ApiService from '../services/api';


class ApiPage extends Component {

    async listUser() {
        const url1 = "https://reqres.in/api/users/2";

        const url2 = "https://reqres.in/api/users";
        let data = {
            "name": "Karthick",
            "job": "Developer"
        }
        let response = await ApiService.getAPI(url1);
        let result = await ApiService.postUser(url2, data);
        console.log(response, result)

        // ApiService.getAPI(url)
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {

        //     })

    }

    postUser = () => {
        const url = "https://reqres.in/api/users";
        let data = {
            "name": "Karthick",
            "job": "Developer"
        }
        axios.put(url, data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>Fetch data from Server</h2>
                {/* <button onClick={() => { this.updateName() }}>Update</button> */}
                <button onClick={() => { this.listUser() }}>Load Data</button>
                <button onClick={() => { this.postUser() }}>Post Data</button>
            </div>
        );
    }
}

export default ApiPage;