import React, { Component } from 'react';

class SubChildComponent extends Component {
  handleInput = (event) => {
    const text = event.target.value;
    console.log(text)
    this.props.onMessageTyped(text);
  }
  render() {
    return (
      <div>
        <h2>SubChildComponent</h2>
        <input type="text" placeholder="Enter value subchild" onChange={this.handleInput}/>
      </div>
    );
  }
}

export default SubChildComponent;