import {ADD_TODO, TOGGLE_TODO} from '../actions/actionType';

const reducers = (state = [], action) => {
  let {id, text, type, arr} = action;
  console.log('111111111111', action);
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        id: id,
        text: text,
        completed: false,
        arr: arr,
      };
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      );
    default:
      return state;
  }
};

export default reducers;
