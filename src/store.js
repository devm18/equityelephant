import { createStore, applyMiddleware } from 'redux';
import CalcReducer from './ducks/CalcReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(
  CalcReducer, 
  applyMiddleware(promiseMiddleware())
);

