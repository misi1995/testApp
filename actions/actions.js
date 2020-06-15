import {ADD_TODO} from './actionType';
let nextTodoId = 0;
// let arr = [];

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  // text: text.text,
  arr: text,
});
