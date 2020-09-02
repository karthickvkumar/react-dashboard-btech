import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

import ApiService from '../service/api';

class ApiPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mr.John'
        }
    }
    async listUser() {
        const url = "https://reqres.in/api/users/2";
        let response = await ApiService.getAPI(url);
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
        console.log('This is a componentWillMount()')
    }

    async componentDidMount() {
        const url = "https://reqres.in/api/users/2";
        let response = await ApiService.getAPI(url);
        console.log(response)
        console.log('This is a componentDidMount()')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state)
        console.log(nextState)
        if (this.state.name == nextState.name) {
            return false
        }
        else {
            return true
        }

    }

    updateName() {
        this.setState({
            name: 'Mr.Johnd'
        })
    }

    componentWillUpdate() {
        console.log('Component Will Update a Data')
    }

    componentDidUpdate() {
        console.log('Component DID Update a Data')
    }

    render() {
        console.log('This is a render()')
        return (
            <div>
                <h2>Fetch data from Server</h2>
                <h4>{this.state.name}</h4>
                <button onClick={() => { this.updateName() }}>Update</button>
                <button onClick={() => { this.listUser() }}>Load Data</button>
                <button onClick={() => { this.postUser() }}>Post Data</button>
                <Layout name={this.state.name}></Layout>
            </div>
        );
    }
}

export default ApiPage;