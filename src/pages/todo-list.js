import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as dataAction from '../redux/action/data-action';

class TodoListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : ''
    }
  }

  handleInput = (event) => {
    this.setState({
      text : event.target.value
    })
  }

  addMessage(){
    this.props.actions.addMessage(this.state.text);
  }

  gotoPreview(){
    this.props.history.push('/preview');
  }

  render() {
    let todoList = this.props.todos.map((todo, index) => {
      return (
        <li key={index}>{todo}</li>
      )
    })
    return (
      <div>
        <h2>TODO Application</h2>
        <input type="text" placeholder="Enter message.." onChange={this.handleInput}/>
        <button onClick={() => this.addMessage()}>Add Message</button>
        <button onClick={() => this.gotoPreview()}>Go To Preview</button>
        <br></br>
        <ul>
          {todoList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
 return {
   todos : state.dataReducer.todoList
 }
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(dataAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);