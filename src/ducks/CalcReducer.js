import React from 'react';
import axios from 'axios'; 
import Debt from '../calculator/Debt'; 
import AddDebt from '../calculator/AddDebt';

// ACTION CREATORS - LOGIN & AUTHENTICATE, and LOGOUT 
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
// Todo: call getInputs upon login, NEEDS fixing/testing:
export function getInputs (userId) {
  return { 
    type: "getInputs", 
    payload: axios.post(`/getInputs/:${userId}`)
  }; 
}

// need the in & out for this: 
export function saveInputs (userId) {
  return { 
    type: "saveInputs", 
    payload: axios.post(`/saveInputs/:${userId}`)
  }; 
}

export function addDebt (blankDebtObj) { 
  return { 
    type: "addDebt", 
    payload1: blankDebtObj,
    payload2: <Debt /> 
  }; 
}

// dual action: removes a debt from debts and a <Debt /> from debtComps.
export function removeDebt (index) { 
  return { 
    type: "removeDebt", 
    payload: index
  }; 
}

// TODO 
// export function calculate () { 
//   return { 
//     type: "calculate", 
//     payload: "???"
//   }; 
// }


// ACTION CREATORS - UPDATING STATE (no axios calls)
export function onChangeHandlerPrepayments (eTargetName, eTargetValue) {
  // console.log('onChangeHandlerPrepayments', eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerPrepayments",
    payload1: eTargetName,
    payload2: eTargetValue
  }
}

export function onChangeHandlerDebt (seqNum, eTargetName, eTargetValue) {
  console.log('onChangeHandlerDebt', seqNum, eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerDebt",
    payload1: seqNum, // sequence Number 
    payload2: eTargetName,
    payload3: eTargetValue
  }
}

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

  // Used by prepayments component:  
  monthlyPrepayment: 0, 
  yearlyPrepayment: 0,
  yearlyPrepaymentDate: '',
  oneTimePrepayment: 0,
  oneTimePrepaymentDate: '', 

  // Used by debts, debt, addAdd components: 
    // example of debt object: 
    // debt = { 
    //   debtName: 'visa',
    //   begBal: 0,
    //   rate: 0,
    //   mPmt: 0,
    //   term: 0,
    //   userId: 0,
    //   seqNum: 0
    // }
  debts: [],
  debtComps: [], // array for holding/displaying <Debt /> Components --- ??? do I need this. How else could I do it? 

  // Used by results component: 
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

    // ACTION CREATIONS - LOGIN & AUTHENTICATE, and LOGOUT 
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
     
    // ACTION CREATIONS - CALCULATOR 
    case `getInputs`:
      return {
        ...state,
        // ??? NOT SURE HOW TO DO THIS: 
        // state: action.payload.data, 
        // or 
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
    case `saveInputs`: 
      return {
        ...state,
        // TODO ??? 
      }; 
    case 'addDebt':
      return { 
        ...state,
        debts: [...state.debts, action.payload1 ],
        debtComps: [...state.debtComps, action.payload2 ]
      };
    case 'removeDebt': 
      state.debts.splice(action.payload, 1); 
      state.debtComps.splice(action.payload, 1); 
      return {
        ...state,
        debts: [...state.debts],
        debtComps: [...state.debtComps]
      };  

    // TODO
    // case 'calculate': 
    //    ??? 
    //   return {
    //     ...state,
    //     ???
    //   };  
      

     // ACTION CREATIONS - UPDATING STATE (no axios calls)  
    case "onChangeHandlerPrepayments":        
      return {
        ...state,
        [action.payload1]: action.payload2 
      };
    case "onChangeHandlerDebt":
      // Loop over debts to find seqNum, then update prop:value pair.
      // ??? Not sure if this code will work, I still NEED TO figure out how to assign seqNum to inputs in Debt.js 
      this.state.forEach((e,i) => {
        if (e.seqNum === action.payload1) {
          return {
            ...state,
            [e.action.payload2]: e.action.payload3 
          };
        }
      })
      break; 
    default:
      return state;
  }
}

