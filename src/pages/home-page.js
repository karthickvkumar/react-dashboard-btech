import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
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

    nextPage(path) {
        this.props.history.push(path);
    }

    render() {
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
                <div className="header">Header Message</div>
                <div className="wrapper">
                    <div className="sidebar">
                        <NavLink to="/home" className="nav-btn" activeClassName="active-btn" exact={true}>Home</NavLink>
                        <NavLink to="/home/about" className="nav-btn" activeClassName="active-btn">About</NavLink>
                        <NavLink to="/home/settings" className="nav-btn" activeClassName="active-btn">Settings</NavLink>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/home" exact component={HomeContent}></Route>
                            <Route path="/home/about" component={AboutContent}></Route>
                            <Route path="/home/settings" component={SettingsContent}></Route>
                        </Switch>
                    </div>
                </div>
                {/* <table>
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
                <NavLink to="/feeds" className="nav-btn">Go to News Feeds</NavLink> */}
            </div>
        );
    }
}

export default HomePage;