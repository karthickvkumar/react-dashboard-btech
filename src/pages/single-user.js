import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ApiService from '../services/api';

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }

    async componentDidMount() {
        let apiUrl = "https://reqres.in/api/users/" + this.props.match.params.userId
        let response = await ApiService.getAPI(apiUrl);
        console.log(response.data)
        this.setState({
            user: response.data
        })
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                {this.state.user ? <h1>Profile is Loading..</h1> :
                    <div>
                        <h1>The user first name is : {user.first_name}</h1>
                        <h1>The user last name is : {user.last_name}</h1>
                        <h1>The user email is : {user.email}</h1>
                        <img src={user.avatar} />
                    </div>
                }

                <NavLink to="/home">Go to User List</NavLink>
            </div>
        );
    }
}

export default SingleUser;