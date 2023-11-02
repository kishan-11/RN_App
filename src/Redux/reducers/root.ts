import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

const initialState: any[] = [];
const todoReducer = createReducer(initialState, (builder: any) => {
  builder.addCase('ADD_TODO', (state: any[], action: any) => {
    state.push(action.payload);
  });
});

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
