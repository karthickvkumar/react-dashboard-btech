import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as dataAction from '../redux/action/data-action';

class PreviewTodo extends Component {
  render() {
    let todoList = this.props.todos.map((todo, index) => {
      return (
        <li key={index}>{todo}</li>
      )
    })
    return (
      <div>
        <h2>TODO Preview</h2>
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

export default  connect(mapStateToProps, mapDispatchToProps)(PreviewTodo);