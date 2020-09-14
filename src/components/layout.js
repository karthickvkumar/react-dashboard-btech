import React, { Component } from 'react';

class Layout extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log('This is a componentWillReceiveProps()')
    }

    render() {
        console.log('This is a render() in CHILD')
        return (
            <div>
                <h2>This is a chiild component - {this.props.user}</h2>
            </div>
        );
    }
}

export default Layout;