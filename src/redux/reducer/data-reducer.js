const initialState = {
  todoList : []
}
export default function dataReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_NEW_MESSAGE': 
      return {...state , todoList : [...state.todoList, action.value]}
    default:
      return state
  }
}