import React from 'react';
import axios from 'axios'; 
import Debt from '../calculator/Debt'; 


// ACTION CREATORS - LOGIN, LOGOUT, 
export function getUser() {
  return {
    type: 'GET_USER',
    payload: axios.get('/getUser')
  }
}

export function logout() {
  return {
    type: 'LOG_OUT',
    payload: axios.get('/logout')
  }
}

// ACTION CREATORS - CALCULATOR
export function getInputs (userId) {
  return { 
    type: "getInputs", 
    payload: axios.post(`/getInputs/:${userId}`)
  }; 
}


// v1 
export function addDebt () { 
  return { 
    type: "addDebt", 
    payload: <Debt /> 
  }; 
}
// v2
// export function addDebt () {
//   return {
//     type: "addDebt",
//     // payload: axios.post("/api/item", { name, price })
//     payload: axios.get('/addDebt', {})
//   }
// }

export function removeDebt (index) { 
  return { 
    type: "removeDebt", 
    payload: index
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
  // example of user object: 
  // user: {
  //   userId: 1,
  //   name: "johnmacisaac@protonmail.com",
  //   email: "johnmacisaac@protonmail.com", 
  //   authId: "auth0|5bb4f869bdd7bf2d95bd6ed7"
  // }
  isAuthenticated: false, 
  monthlyPrepayment: 0, 
  yearlyPrepayment: 0,
  yearlyPrepaymentDate: '',
  oneTimePrepayment: 0,
  oneTimePrepaymentDate: '', 
  // example of debt object: 
  // debt ={ 
  //   debtName,
  //   begBal,
  //   rate,
  //   mPmt,
  //   term,
  //   userId,
  //   seqNum
  // }
  debts: [],
  debtComps: [],
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
    case `getInputs`:
      return {
        ...state,
        // state: action.payload.data, 
        // yearlyPrepayment: 0,
        // yearlyPrepaymentDate: '',
        // oneTimePrepayment: 0,
        // oneTimePrepaymentDate: '', 
        // debts: [ ...state, action.payload.data. ],
        // totalDebt: 0,
        // originalCost: 0,
        // newCost: 0,
        // eliminatedCost: 0,
        // originalTerm: '',
        // newTerm: ''
      };
    case 'addDebt':
      return { 
        ...state,
        debts: [...state.debts, action.payload ]
      };
    case 'removeDebt': 
      state.debts.splice(action.payload, 1); 
      return {
        ...state,
        debts: [...state.debts]
      };  
    case action.type:
      return {
        ...state,
        [action.type]: action.payload 
      };
    default:
      return state;
  }
}
