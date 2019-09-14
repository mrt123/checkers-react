import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { SET_HIGHLIGHT_FIELD, UNSET_HIGHLIGHT_FIELD } from './board/boardActions.js';

const middleWares = [];

//const logsOn = localStorage.getItem('state-log-on') !== null;
const logsOn = true;
if (logsOn) {
  const loggerMiddleware = createLogger({
    collapsed: true,
    predicate: (getState, action) => {
      return action.type !== SET_HIGHLIGHT_FIELD && action.type !== UNSET_HIGHLIGHT_FIELD;
    }
  });
  middleWares.push(loggerMiddleware);
}

export default createStore(rootReducer, applyMiddleware(...middleWares));
