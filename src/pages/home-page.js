import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, withRouter } from 'react-router-dom'
import ApiService from '../services/api';

import HomeContent from '../components/home-content';
import AboutContent from '../components/about-content';
import SettingsContent from '../components/settings-content';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }
    onLogout() {
        this.props.history.push('/')
    }

    async componentDidMount() {
        let url = "https://reqres.in/api/users?page=2"
        let response = await ApiService.getAPI(url);
        this.setState({
            userList: response.data
        })
    }

    navigate(user) {
        let url = "/user/" + user.id;
        this.props.history.push(url)

    }

    render() {
        // console.log(this.props.history.location.state)
        // let stateDate = this.props.history.location.state;
        let users = this.state.userList.map((value, index) => {
            return (
                <tr key={index} onClick={() => this.navigate(value)}>
                    <td>{value.id}</td>
                    <td>{value.first_name}</td>
                </tr>
            )
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
                <button onClick={() => this.onLogout()}>Logout</button>
                <NavLink to="/feeds" className="nav-btn">Go to News Feeds</NavLink>
            </div>
        );
    }
}

export default HomePage;