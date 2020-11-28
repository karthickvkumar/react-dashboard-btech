import React, { Component } from 'react';
import RightChildLevel2 from './right-child-level-2';

class RightChildLevel1 extends Component {
  render() {
    return (
      <div>
        <RightChildLevel2></RightChildLevel2>
      </div>
    );
  }
}

export default RightChildLevel1;