import React, { Component } from 'react';
import ChildComponent from './child';

class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Karthick',
      age : 27,
      location: "Chennai",
      message: ''
    }
  }

  handleMessage = (value) =>{
    console.log(value);
    this.setState({
      message : value
    })
  }

  handleMessage = (value) => {
    console.log(value)
    this.props.onMessageRecived(value);
  }

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
    <h2>{this.state.message}</h2>
        <ChildComponent username={this.state.name} {...this.state} 
        onMessageTyped={this.handleMessage} onReceiveMesssage={this.handleMessage}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;