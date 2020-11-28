import React, { Component } from 'react';
import LeftChildLevel1 from '../components/left-child-level-1';
import RightChildLevel1 from '../components/right-child-level-1';
import context from '../services/context';

class SharingData extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : ''
    }
  }

  onReceiveMessage = (value) =>{
    console.log(value)
    this.setState({
      data : value
    })
  }

  render() {
    return (
      <context.Provider value={{
        message: this.state.data,
        handleMessage : this.onReceiveMessage
      }}>
        <h1>Data Sharing - React Context example</h1>
        <LeftChildLevel1></LeftChildLevel1>
        <RightChildLevel1></RightChildLevel1>
      </context.Provider>
    );
  }
}

export default SharingData;