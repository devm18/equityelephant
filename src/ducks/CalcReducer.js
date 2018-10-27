import React from "react";
import axios from "axios";
import Debt from "../calculator/Debt";
import AddDebt from "../calculator/AddDebt";

// ACTION CREATORS
export function getUser() {
  return {
    type: "GET_USER",
    payload: axios.get("/getUser")
  };
}
export function logout() {
  return {
    type: "LOG_OUT",
    payload: axios.get("/logout")
  };
}

export function getPrepayments(userId) {
  return {
    type: "getPrepayments",
    payload: axios.get(`/getPrepayments/${userId}`)
  };
}

export function getDebts(userId) {
  return {
    type: "getDebts",
    payload: axios.get(`/getDebts/${userId}`)
  };
}

export function addDebt(blankDebtObj) {
  console.log('BLANK DEBT OBJ: ', blankDebtObj);
  return {
    type: "addDebt",
    payload: axios.post(`/addDebt`, blankDebtObj)
  };
}

export function removeDebt(userId, debtId) {
  return {
    type: "removeDebt",
    payload: axios.delete(`/removeDebt/${userId}/${debtId}`)
  };
}

export function saveInputs(userId) {
  return {
    type: "saveInputs",
    payload: axios.post(`/saveInputs/:${userId}`)
  };
}

// ACTION CREATORS - UPDATING STATE (no axios calls)
export function onChangeHandlerPrepayments(eTargetName, eTargetValue) {
  console.log('onChangeHandlerPrepayments', eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerPrepayments",
    payload1: eTargetName,
    payload2: eTargetValue
  };
}

export function onChangeHandlerDebt(key2, eTargetName, eTargetValue) {
  console.log("onChangeHandlerDebt", key2, eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerDebt",
    payload1: key2,
    payload2: eTargetName,
    payload3: eTargetValue
  };
}

// INITIAL STATE
const initialState = {
  user: {},
  // user: {
  //   user_id: 1,
  //   name: "johnmacisaac@protonmail.com",
  //   email: "johnmacisaac@protonmail.com",
  //   authId: "auth0|5bb4f869bdd7bf2d95bd6ed7"
  // }
  isAuthenticated: false,
  debtComps: [],
  prepayments: {},
  debts: [],
  // debt: {
  //   debtId: 0,
  //   userId: 0,
  //   key2: 0,
  //   debtName: ' ',
  //   begBal: 0,
  //   rate: 0,
  //   mPmt: 0,
  //   term: ' ',
  // }
  totalDebt: 0,
  originalCost: 0,
  newCost: 0,
  eliminatedCost: 0,
  originalTerm: " ",
  newTerm: " ",
  gotPrepayments: false,
  gotDebts: false
};

// REDUCER
export default function CalcReducer(state = initialState, action) {
  console.log(action.payload1, action.payload2)

  switch (action.type) {
    case `GET_USER_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `GET_USER_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: { ...state.user, userId: action.payload.data.user_id }
      };
    case `GET_USER_REJECTED`:
      console.log("Error in getUser");
      return {
        ...state,
        isAuthenticated: false
      };

    case "getPrepayments_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "getPrepayments_FULFILLED":
      return {
        ...state,
        isLoading: false,
        prepayments: action.payload.data[0],
        gotPrepayments: true
      };
    case "getPrepayments_REJECTED":
      console.log("Error in getPrepayments");
      return {
        ...state
      };

    case "getDebts_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "getDebts_FULFILLED":
      return {
        ...state,
        isLoading: false,
        debts: action.payload.data,
        gotDebts: true
      };
    case "getDebts_REJECTED":
      console.log("Error in getDebts");
      return {
        ...state
      };

    case "addDebt_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "addDebt_FULFILLED":
      return {
        ...state,
        isLoading: false,
        debts: action.payload.data
        // Wrong bc it bypasses data circle:
        // debtComps: [...state.debtComps, action.payload2 ]
      };
    case "addDebt_REJECTED":
      console.log("Error in addDebts");
      return {
        ...state
      };
    case "removeDebt_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "removeDebt_FULFILLED":
      // state.debts.splice(action.payload2, 1);
      // state.debtComps.splice(action.payload2, 1);
      return {
        ...state,
        isLoading: false,
        debts: action.payload.data
      };
    case "removeDebt_REJECTED":
      console.log("Error in removeDebt");
      return { 
        ...state 
      };

    // ACTION CREATIONS - UPDATING STATE (no axios calls)
    case "onChangeHandlerPrepayments":
      return {
        ...state,
        [action.payload1]: action.payload2
      };
    case "onChangeHandlerDebt":
      // Loop over debts to find key2, then update prop:value pair.
      // ??? Not sure if this code will work, I still NEED TO figure out how to assign key2 to inputs in Debt.js
      this.state.debts.forEach((e, i) => {
        if (e.debt_id === action.payload1) {
          return {
            ...state,
            [e.action.payload2]: e.action.payload3
          };
        }
      });
      break;
    default:
      return state;
  }
}
