import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import CalcReducer from './ducks/CalcReducer';

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  CalcReducer, 
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);



