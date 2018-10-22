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
export function logout() {
  return {
    type: 'LOG_OUT',
    payload: axios.get('/logout')
  }
}

// ACTION CREATORS - CALCULATOR
export function getInputs () { 
  const { userId } = this.props.user; 
  return { 
    type: "getInputs", 
    payload: axios.get(`/getInputs/:${userId}`) 
  }; 
}

export function addDebt () { 
  return { 
    type: "addDebt", 
    payload: <Debt /> 
  }; 
}

// export function addDebt2 () {
//   return {
//     type: "ADD_DEBT",
//     payload: axios.get('/addDebt2')
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
  // OneTimePrepayments: [],
  // debt: {
  //   seqNum: 1,
  //   debtName: '', 
  //   begBal: 0, 
  //   rate: 0, 
  //   mPmt: 0, 
  //   term: '',
  //   iPmt: 0,
  //   pPmt: 0,
  //   prePmt: 0,
  //   endBal: 0
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
    case `GET_INPUTS`:
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
        // newTerm: 
      };
    case 'addDebt':
      return { 
        ...state,
        // isLoading: false, // do I need this? 
        debts: [...state.debts, action.payload ]
      };
    case 'removeDebt': 
      state.debts.splice(action.payload, 1); 
      return {
        ...state,
        // isLoading: false, // do I need this? 
        debts: [...state.debts]
      };  
    case action.type:
      // axios.post('/${action.type}')
      return {
        ...state,
        // update action.type prop in state
        [action.type]: action.payload 
      };
    default:
      return state;
  }
}
