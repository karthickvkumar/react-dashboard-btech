import React, { Component } from 'react';
import context from '../services/context';


class RightChildLevel2 extends Component {
  render() {
    console.log(this.context)
    return (
      <context.Consumer>
        {
          (context) => {
            return (
              <div>
                 <h2>Right Child Level 2 Component</h2>2
                  <h1>{context.message}</h1>
              </div>
             
            )
          }
        }
      </context.Consumer>
        
    );
  }
}

RightChildLevel2.contextType = context;
export default RightChildLevel2;