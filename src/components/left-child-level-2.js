import React, { Component } from 'react';
import context from '../services/context';

class LeftChildLevel2 extends Component {
  onChangeInput = (event) => {
    const text = event.target.value;
    this.context.handleMessage(text);
  }
  render() {
    console.log(this.context)
    return (
      <context.Consumer>
        {
          () => {
            return (
              <div>
                <h2>Left Child Level 2 Component</h2>
                <input type="text" placeholder="left child level 2" onChange={this.onChangeInput}/>
              </div>
            )
          }
        }
      </context.Consumer>
    );
  }
}

LeftChildLevel2.contextType = context;

export default LeftChildLevel2;