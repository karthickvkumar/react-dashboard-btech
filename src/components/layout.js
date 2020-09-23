import React, { Component } from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.userName = React.createRef();
        this.password = React.createRef();
        this.message = React.createRef();
    }

    componentDidMount() {
        this.userName.current.focus();
    }

    onLogin() {
        console.log(this.userName.current.value)
        console.log(this.password.current.value)
        this.message.current.innerHTML = this.userName.current.value;
    }

    render() {
        return (
            <div>
                <h2>This is a Login component</h2>
                {/* {this.props.children} */}
                <label>Enter Username:</label>
                <input type="text" placeholder="Enter username.." ref={this.userName} />
                <br></br>
                <label>Enter password:</label>
                <input type="password" placeholder="Enter password.." ref={this.password} />
                <br></br>
                <button onClick={() => this.onLogin()} >Login</button>
                <h2 ref={this.message}></h2>
            </div>
        );
    }
}

export default Layout;