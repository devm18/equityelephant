import axios from "axios";
import React from "react";
import Debt from "../calculator/Debt";
import AddDebt from "../calculator/AddDebt";

// ACTION CREATORS
export function getUser() {
  return {
    type: "getUser",
    payload: axios.get("/getUser")
  };
}
export function logout() {
  return {
    type: "logout",
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

// ACTION CREATORS
export function onChangeHandlerPrepayments(eTargetName, eTargetValue) {
  return {
    type: "onChangeHandlerPrepayments",
    eTargetName: eTargetName,
    eTargetValue: eTargetValue
  };
}

export function onChangeHandlerDebts(seq_num, eTargetName, eTargetValue) {
  console.log("onChangeHandlerDebts", seq_num, eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerDebts",
    seq_num: seq_num,
    eTargetName: eTargetName,
    eTargetValue: eTargetValue
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
  // debtComps: [],
  prepayments: {},
  // prepayments: {
  //   user_id: 1,
  //   monthly_prepayment: 0,
  //   yearly_prepayment: 0,
  //   yearly_prepayment_date: yyy/mm/dd,
  //   one_time_prepayment: 0,
  //   one_time_prepayment_date: yyy/mm/dd
  // }
  debts: [],
  // debts: [{
  //   debt_id: 1,
  //   user_id: 1,
  //   seq_num: 0,
  //   debt_name: ' ',
  //   beg_bal: 0,
  //   rate: 0,
  //   term: 0,
  //   mpmt: 0
  // },
  // { debt_id: 2,
  //   etc.
  //  }],
  results: {},
  // results: {
  //   result_id: 1,
  //   user_id: 1,
  //   total_debt: 0,
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
  console.log("action: ", action);

  switch (action.type) {
    case `getUser_PENDING`:
    case `getPrepayments_PENDING`:
    case `getDebts_PENDING`:
    case `addDebt_PENDING`:
    case `removeDebt_PENDING`:
    case `saveInputs_PENDING`:
    case `onChangeHandlerPrepayments_PENDING`:
    case `onChangeHandlerDebts_PENDING`:
      return {
        ...state, 
        isLoading: true
      };

    case `getUser_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: { ...state.user, user_id: action.payload.data.user_id }
      };

    case "getPrepayments_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        prepayments: action.payload.data[0],
        gotPrepayments: true
      };

    case "getDebts_FULFILLED":
      return {
        ...state,
        isLoading: false,
        debts: action.payload.data,
        gotDebts: true
      };
    
    case "addDebt_FULFILLED":
      console.log("action.payload.data: ", action.payload.data);
      return {
        ...state,
        isLoading: false,
        // debts: payloadData
        debts: [...state.debts, action.payload.data[0]]
      };

    case "removeDebt_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        debts: action.payload.data
      };
    
    case "saveInputs_FULFILLED":
      console.log("ACTION.PAYLOAD.DATA: ", action.payload.data);
      // payload: axios.put(`/saveInputs/${user_id}`, { prepayments, debts })
      return {
        ...state,
        isLoading: false,
        prepayments: action.payload.data[0]
        // debts: action.payload.data.debts
      };

    case "onChangeHandlerPrepayments":
      return {
        ...state,
        prepayments: {
          ...state.prepayments,
          [action.eTargetName]: action.eTargetValue
        }
      };

    case "onChangeHandlerDebts":
      const { seq_num, eTargetName, eTargetValue } = action;
      let debtsUpdated = state.debts.map((elem, i) => {
        return i === seq_num
          ? Object.assign({}, elem, { [eTargetName]: eTargetValue })
          : elem;
      });
      return {
        ...state,
        debts: debtsUpdated
      };

    case `getUser_REJECTED`:
      console.log(`Error: ${action.type}`);
      return {
        ...state,
        isAuthenticated: false
      };
    case `getPrepayments_REJECTED`:
    case `getDebts_REJECTED`:
    case `addDebt_REJECTED`:
    case `removeDebt_REJECTED`:
    case `saveInputs_REJECTED`:
    case `onChangeHandlerPrepayments_REJECTED`:
    case `onChangeHandlerDebts_REJECTED`:
      console.log(`Error: ${action.type}`);
      return {
        ...state
      };

    default:
      return state;
  }
}
/*

const initialState = {
  user: {  }, 
  debts: [{
    debt_id: 1,
    user_id: 1,
    seq_num: 0,
    debt_name: '',
    beg_bal: 0,
    rate: 0,
    term: '',
    mpmt: 0
  }]
}


*/
