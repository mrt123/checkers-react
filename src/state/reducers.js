import { combineReducers } from 'redux';
import board from './board/boardReducer.js';

const testState = (state = 'testState-OK') => {
  return state;
};

export default combineReducers({ board, testState });
