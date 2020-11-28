import React, { Component } from 'react';

import ParentComponent from "../components/parent";

class ParentToChild extends Component {
  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }
  handleMessage = (value) => {
    console.log(value)
    this.setState({
      message : value
    })
  }
  render() {
    console.log(this.props.history.location.state)
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>ParentToChild</h1>
        <ParentComponent onMessageRecived={this.handleMessage}></ParentComponent>
      </div>
    );
  }
}

export default ParentToChild;