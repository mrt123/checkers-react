import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middleWares = [];

//const logsOn = localStorage.getItem('state-log-on') !== null;
const logsOn = true;
if (logsOn) {
  const loggerMiddleware = createLogger({
    collapsed: true
  });
  middleWares.push(loggerMiddleware);
}

export default createStore(rootReducer, applyMiddleware(...middleWares));
