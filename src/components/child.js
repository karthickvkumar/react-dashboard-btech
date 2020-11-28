import React, { Component } from 'react';
import SubChildComponent from './sub-child';

class ChildComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      message :''
    }
  }

  handleInput = (event)=>{
    console.log(event.target.value)
    let text = event.target.value;
    this.props.onMessageTyped(text);
  }

  
  sendMessage = (value)=>{
    console.log(value)
    //this.props.onMessageTyped(value);
    this.props.onReceiveMesssage(value);
  }

  

  render() {
    return (
      <div>
        <h3>Child Compoenent</h3>
        <label>Enter Username:</label>
        <input type="text" placeholder="Enter username" onChange={this.handleInput}/>
        <br></br>
        <h2>{this.props.username}</h2>
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.props.location}</h2>
        <SubChildComponent onMessageTyped={this.sendMessage}></SubChildComponent>
      </div>
    );
  }
}

export default ChildComponent;