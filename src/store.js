import { createStore, applyMiddleware } from 'redux';
import CalculatorReducer from './ducks/CalculatorReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(CalculatorReducer, applyMiddleware(promiseMiddleware()));

