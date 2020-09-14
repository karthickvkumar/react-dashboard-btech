import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

import ApiService from '../services/api';


class ApiPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mr.John'
        }
    }
    async listUser() {
        const url1 = "https://reqres.in/api/users/2";

        const url2 = "https://reqres.in/api/users";
        let data = {
            "name": "Karthick",
            "job": "Developer"
        }
        let response = await ApiService.getAPI(url1);
        let result = await ApiService.postUser(url2, data);
        console.log(response)

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

    componentWillMount() {
        console.log('This is componentWillMount Method')
    }

    componentDidMount() {
        this.listUser();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('This is shouldComponentUpdate Method')
        console.log(nextState, this.state)
        if (this.state.name == nextState.name) {
            return false
        }
        else {
            return true;
        }

    }

    updateName() {
        this.setState({
            name: 'Mr.Johndsd'
        })
    }

    componentWillUpdate() {
        console.log('This is componentWillUpdate Method')
    }

    componentDidUpdate() {
        console.log('This is componentDidUpdate Method')
    }

    render() {
        console.log('This is Render Method in PARETN')
        return (
            <div>
                <h2>Fetch data from Server</h2>
                <h2>{this.state.name}</h2>
                <button onClick={() => { this.updateName() }}>Update</button>

                <button onClick={() => { this.listUser() }}>Load Data</button>
                <button onClick={() => { this.postUser() }}>Post Data</button>

                <Layout user={this.state.name}></Layout>
            </div>
        );
    }
}

export default ApiPage;