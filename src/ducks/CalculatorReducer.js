import React from 'react';
import Debt from '../calculator/Debt'; 
import Debts from '../calculator/Debts'; 

// CONSTANTS
const ENTER_MONTHLY_PREPAYMENT = "ENTER_MONTHLY_PREPAYMENT";
const ENTER_YEARLY_PREPAYMENT = "ENTER_YEARLY_PREPAYMENT";
const ENTER_YEARLY_PREPAYMENT_MONTH = "ENTER_YEARLY_PREPAYMENT_MONTH"; 
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

// ACTION CREATORS - Prepayments 
export function enterMonthlyPrepayment (e) {
  return {
    type: ENTER_MONTHLY_PREPAYMENT,
    payload: e.target.value
  };
}
export function enterYearlyPrepayment (e) {
  return {
    type: ENTER_YEARLY_PREPAYMENT,
    payload: e.target.value
  };
}
export function enterYearlyPrepaymentMonth (e) {
  return {
    type: ENTER_YEARLY_PREPAYMENT_MONTH,
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
    payload: string
  };
}
export function enterPrinciple (amount) {
  return {
    type: ENTER_PRINCIPLE,
    payload: amount
  };
}
export function enterRate (rate) {
  return {
    type: ENTER_RATE,
    payload: rate
  };
}
export function enterPayment (amount) {
  return {
    type: REMOVE_DEBT,
    payload: amount
  };
}
export function addDebt () {
  return {
    type: ADD_DEBT,
    payload: <Debt /> 
  };
}
export function removeDebt (i) { 
  return { 
    type: REMOVE_DEBT, 
    payload: i
  }; 
}
export function updateSequence (debts) { 
  return { 
    type: UPDATE_SEQUENCE, 
    payload: debts
  }; 
}

// INITIAL STATE 
const initialState = {
  monthlyPrepayment: 0, 
  yearlyPrepayment: 0,
  yearlyPrepaymentMonth: '',
  oneTimePrepayment: 0,
  oneTimePrepaymentDate: '',
  // OneTimePrepayments: [],
  // debt: { debtName: '', principle: 0, rate: 0, payment: 0 }
  debts: [],
  totalDebt: 0,
  originalCost: 0,
  newCost: 0,
  eliminatedCost: 0,
  originalTerm: 0,
  newTerm: 0
}; 

// REDUCER 
export default function CalculatorReducer(state = initialState, action) {
  console.log('Reducer action:', action);

  switch (action.type) {
    // prepayment
    case ENTER_MONTHLY_PREPAYMENT:
      return {
        ...state,
        monthlyPrepayment: action.payload,
      };
    case ENTER_YEARLY_PREPAYMENT:
      return {
        ...state,
        yearlyPrepayment: action.payload,
      };
    case ENTER_YEARLY_PREPAYMENT_MONTH:
      return {
        ...state,
        yearlyPrepaymentMonth: action.payload,
      };

    case ENTER_ONE_TIME_PREPAYMENT:
      return {
        ...state,
        oneTimePrepayment: action.payload,
      };
    case ENTER_ONE_TIME_PREPAYMENT_DATE:
      return {
        ...state,
        oneTimePrepaymentDate: action.payload,
      };

    //// debt 
    case ENTER_DEBT_NAME:
      return {
        ...state,
        debtName: action.payload,
      };
    case ENTER_PRINCIPLE:
      return {
        ...state,
        principle: action.payload,
      };
    case ENTER_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    case ENTER_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    // add debt, remove debt, updateSequence of debts
    case ADD_DEBT:
      return { 
        ...state, 
        debts: [...state.debts, action.payload ]
      } 
    case REMOVE_DEBT: 
      state.debts.splice(action.payload,1); 
      return {
        ...state, 
        debts: [...state.debts]
      };  
    case UPDATE_SEQUENCE:
      //state.debts. 
      return {
        ...state, 
        debts: [...action.payload]
      };  
    default:
      return state;
  }
}
