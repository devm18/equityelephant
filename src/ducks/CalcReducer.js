import React from 'react';
import Debt from '../calculator/Debt'; 
import axios from 'axios'; 

// CONSTANTS 

// ACTION CREATORS - LOGIN, LOGOUT, 
export function getUser() {
  return {
    type: 'GET_USER',
    payload: axios.get('/getUser')
  }
}

// ACTION CREATORS - CALCULATOR
export function addDebt () {
  return {
    type: "addDebt",
    payload: <Debt /> 
  };
}
export function removeDebt (index) { 
  return { 
    type: "removeDebt", 
    payload: index
  }; 
}

export function saveInputs (
  auth_id,
  monthlyPrepayment,
  yearlyPrepayment,
  yearlyPrepaymentDate,
  oneTimePrepayment,
  oneTimePrepaymentDate,
  debts
) {
  return {
    type: 'saveInputs',
    payload: axios.post('/saveInputs', {
      auth_id,
      monthlyPrepayment,
      yearlyPrepayment,
      yearlyPrepaymentDate,
      oneTimePrepayment,
      oneTimePrepaymentDate,
      debts
    })
  };
}

export function handleInputChange (eTargetName, eTargetValue) {
//console.log('handleInputChange', eTargetName, eTargetValue);
  return {
    type: eTargetName,
    payload: eTargetValue
  }
}

let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();

// INITIAL STATE 
const initialState = {
  user: {},
  isAuthenticated: false, 
  monthlyPrepayment: 0, 
  yearlyPrepayment: 0,
  yearlyPrepaymentDate: '', /* date default? */
  oneTimePrepayment: 0,
  oneTimePrepaymentDate: '', 
  // OneTimePrepayments: [],
  // debt: {
  //   debt_name: '', 
  //   beg_bal: 0, 
  //   rate: 0, 
  //   mpmt: 0, 
  //   term: '',
  //   ipmt: 0,
  //   ppmt: 0,
  //   prepmt: 0,
  //   end_bal: 0
  // }
  debts: [],
  totalDebt: 0,
  originalCost: 0,
  newCost: 0,
  eliminatedCost: 0,
  originalTerm: '',
  newTerm: ''
}; 

// REDUCER 
export default function CalcReducer(state = initialState, action) {
  console.log('CalcReducer.action:', action.type, action.payload);

  switch (action.type) {
    case `GET_USER_FULFILLED`:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case `GET_USER_REJECTED`:
      return {
        ...state,
        isAuthenticated: false
      };
    case 'addDebt':
      return { 
        ...state,
        isLoading: false,
        debts: [...state.debts, action.payload ]
      };
    case 'removeDebt': 
      state.debts.splice(action.payload, 1); 
      return {
        ...state,
        isLoading: false,
        debts: [...state.debts]
      };  
    case 'saveInputs': 
      return {
        ...state,
        isLoading: false,
        // items: action.payload.data//jonw
      }
    case action.type:
      return {
        ...state,
        [action.type]: action.payload,
      };
    default:
      return state;
  }
}