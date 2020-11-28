import React, { Component } from 'react';
import LeftChildLevel2 from './left-child-level-2';

class LeftChildLevel1 extends Component {
  render() {
    return (
      <div>
        <LeftChildLevel2></LeftChildLevel2>
      </div>
    );
  }
}

export default LeftChildLevel1;