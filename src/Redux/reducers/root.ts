import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

const initialState: any[] = [];
const todoReducer = createReducer(initialState, (builder: any) => {
  builder
    .addCase('ADD_TODO', (state: any[], action: any) => {
      state.push(action.payload);
    })
    .addCase('TOGGLE_TODO', (state: any[], action: any) => {
      const todo = state[action.payload.index];
      todo.completed = !todo.completed;
    })
    .addCase('REMOVE_TODO', (state: any[], action: any) => {
      return state.filter((todo, i) => i !== action.payload.index);
    });
});

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
