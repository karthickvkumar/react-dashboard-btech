import React, { Component } from 'react';

class Layout extends Component {
    componentWillReceiveProps(nextProps) {
        console.log("This is a child compoent - componentWillReceiveProps()")
        console.log(nextProps)
    }
    render() {
        return (
            <div>
                <h4>This is a child component - {this.props.name}</h4>
            </div>
        );
    }
}

export default Layout;