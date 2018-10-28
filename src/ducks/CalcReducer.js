import axios from "axios";
import React from "react";
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

export function getPrepayments(user_id) {
  return {
    type: "getPrepayments",
    payload: axios.get(`/getPrepayments/${user_id}`)
  };
}

export function getDebts(user_id) {
  return {
    type: "getDebts",
    payload: axios.get(`/getDebts/${user_id}`)
  };
}

export function addDebt(blankDebtObj) {
  console.log("BLANK DEBT OBJ: ", blankDebtObj);
  return {
    type: "addDebt",
    payload: axios.post(`/addDebt`, blankDebtObj)
  };
}

export function removeDebt(user_id, debt_id) {
  console.log(user_id, debt_id);
  return {
    type: "removeDebt",
    payload: axios.delete(`/removeDebt/${user_id}/${debt_id}`)
  };
}

export function saveInputs(user_id, prepayments, debts) {
  return {
    type: "saveInputs",
    payload: axios.put(`/saveInputs/${user_id}`, { prepayments, debts })
  };
}

// ACTION CREATORS - UPDATING STATE (no axios calls)
export function onChangeHandlerPrepayments(eTargetName, eTargetValue) {
  console.log("onChangeHandlerPrepayments", eTargetName, eTargetValue);
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
  //   auth_id: "auth0|5bb4f869bdd7bf2d95bd6ed7"
  // }
  isAuthenticated: false,
  debtComps: [],
  prepayments: {},
  // {
  //   user_id: 1,
  //   monthly_prepayment: 0,
  //   yearly_prepayment: 0,
  //   yearly_prepayment_date: yyy/mm/dd,
  //   one_time_prepayment: 0,
  //   one_time_prepayment_date: yyy/mm/dd
  // }
  debts: [],
  // 0: {
  //   debt_id: 1,
  //   user_id: 1,
  //   key2: 0,
  //   debt_name: ' ',
  //   beg_bal: 0,
  //   rate: 0,
  //   term: ' ',
  //   mpmt: 0
  // }
  results: {},
  // {
  //   result_id: 1,
  //   user_id: 1,
  //   total_debt: ' ',
  //   original_term: '' ,
  //   new_term: ' ',
  //   original_cost: 0,
  //   new_cost: 0,
  //   eliminated_cost: 0
  // }
  gotPrepayments: false,
  gotDebts: false
};

// REDUCER
export default function CalcReducer(state = initialState, action) {
  console.log(state);

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
        user: { ...state.user, user_id: action.payload.data.user_id }
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
      // convert to JS camelCase
      let payloadData = action.payload.data.map((e, i) => {
        return {
          // addDebt's payload includes debt_id
          debt_id: e.debt_id,
          user_id: e.user_id,
          key2: e.key2,
          debt_name: e.debt_name,
          beg_bal: e.beg_bal,
          rate: e.rate,
          term: e.term,
          mpmt: e.mpmt
        };
      });
      return {
        ...state,
        isLoading: false,
        debts: payloadData
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

      case "saveInputs_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "saveInputs_FULFILLED":
    // payload: axios.put(`/saveInputs/${user_id}`, { prepayments, debts })
      return {
        ...state,
        isLoading: false,
        prepayments: {
          // needs something like: 
          // action.payload.data.prepayments
        },
        debts: [
          // needs something like: 
          // { action.payload.data.debt1 obj}
          // { action.payload.data.debt2 obj }
        ]
      };
    case "saveInputs_REJECTED":
      console.log("Error in removeDebt");
      return {
        ...state
      };




    // ACTION CREATIONS - UPDATING STATE (no axios calls)
    case "onChangeHandlerPrepayments":
      return {
        ...state,
        prepayments: {
          ...state.prepayments,
          // name: value 
          [action.payload1]: action.payload2
        }
      };
    case "onChangeHandlerDebt":
      // Loop debts, find key2 , update key:value.
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
