import React from 'react';
import Debt from '../calculator/Debt'; 

// CONSTANTS
const ENTER_RECURRING_PREPAYMENT = "ENTER_RECURRING_PREPAYMENT";
const ENTER_ONE_TIME_PREPAYMENT = "ENTER_ONE_TIME_PREPAYMENT";
const ENTER_ONE_TIME_PREPAYMENT_DATE = "ENTER_ONE_TIME_PREPAYMENT_DATE";
// 
const ENTER_DEBT_NAME = "ENTER_DEBT_NAME"; 
const ENTER_PRINCIPLE = "ENTER_PRINCIPLE"; 
const ENTER_RATE = "ENTER_RATE"; 
const ENTER_PAYMENT = "ENTER_PAYMENT"; 
const ADD_DEBT = "ADD_DEBT"; 
const REMOVE_DEBT ="REMOVE_DEBT"; 
const UPDATE_SEQUENCE ="UPDATE_SEQUENCE"; 

// ACTION CREATORS - Calculator 

// ACTION CREATORS - Prepayment 
export function enterRecurringPrepayment (e) {
  return {
    type: ENTER_RECURRING_PREPAYMENT,
    payload: e.target.value
  };
}
export function enterOneTimePrepayment (e) {
  return {
    type: ENTER_ONE_TIME_PREPAYMENT,
    payload: e.target.value
  };
}
export function enterOneTimePrepaymentDate (e) {
  return {
    type: ENTER_ONE_TIME_PREPAYMENT_DATE,
    payload: e.target.value
  };
}

// ACTION CREATORS - Debt 
export function enterDebtName (string) {
  return {
    type: ENTER_DEBT_NAME,
    string
  };
}
export function enterPrinciple (amount) {
  return {
    type: ENTER_PRINCIPLE,
    amount
  };
}
export function enterRate (rate) {
  return {
    type: ENTER_RATE,
    rate
  };
}
export function enterPayment (amount) {
  return {
    type: REMOVE_DEBT,
    amount
  };
}

export function addDebt () {
  return {
    type: ADD_DEBT,
    payload: <Debt /> 
  };
}

export function removeDebt (sequenceNumber) {
  return {
    type: REMOVE_DEBT,
    sequenceNumber
  };
}


// INITIAL STATE 
const initialState = {
  // _recurringPrepayment: 0, 
  // get recurringPrepayment() {
  //   return this._recurringPrepayment;
  // },
  // set recurringPrepayment(value) {
  //   this._recurringPrepayment = value;
  // },
  recurringPrepayment: 0, 
  oneTimePrepayment: 0,
  oneTimePrepaymentDate: '',
  // debt: {
  //   removeDebt: removeDebt(),
  //   sequenceNumber: 1, 
  //   debtName: '',
  //   principle: 0,
  //   rate: 0,
  //   payment: 0,
  // },  
  debts: [ ],
  sequenceNumber: 1, 
  originalCost: 0,
  newCost: 0,
  eliminatedCost: 0,
  originalTerm: 0,
  newTerm: 0
}; 


// REDUCER 
export default function CalculatorReducer(state = initialState, action) {
  // console.log('Reducer action:', action);

  switch (action.type) {
    // prepayment
    case ENTER_RECURRING_PREPAYMENT:
      return {
        ...state,
        recurringPrepayment: action.amount,
      };
    case ENTER_ONE_TIME_PREPAYMENT:
      return {
        ...state,
        oneTimePrepayment: action.amount,
      };
    case ENTER_ONE_TIME_PREPAYMENT_DATE:
      return {
        ...state,
        oneTimePrepaymentDate: action.date,
      };

    //// debt 
    case ENTER_DEBT_NAME:
      return {
        ...state,
        debtName: action.debtName,
      };
    case ENTER_PRINCIPLE:
      return {
        ...state,
        principle: action.amount,
      };
    case ENTER_RATE:
      return {
        ...state,
        rate: action.rate,
      };
    case ENTER_PAYMENT:
      return {
        ...state,
        payment: action.amount,
      };

    // add debt 
    case ADD_DEBT:
      return { 
        ...state, 
        debts: [...state.debts, action.payload ]
      } 
    case REMOVE_DEBT: 
      return {
        ...state, 
        debts: [...state.debts]
      };  
    default:
      return state;
  }
}
