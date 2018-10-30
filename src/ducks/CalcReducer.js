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

// ACTION CREATORS 
export function onChangeHandlerPrepayments(eTargetName, eTargetValue) {
  return {
    type: "onChangeHandlerPrepayments",
    eTargetName: eTargetName,
    eTargetValue: eTargetValue
  };
}

export function onChangeHandlerDebt(
  index, 
  eTargetName, 
  eTargetValue
  ) {
  console.log("onChangeHandlerDebt", index, eTargetName, eTargetValue);
  return {
    type: "onChangeHandlerDebt",
    index: index,
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
  debtComps: [],
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
  //   index: 0,
  //   debt_name: ' ',
  //   beg_bal: 0,
  //   rate: 0,
  //   term: ' ',
  //   mpmt: 0
  // },
  // { debt_id: 2,
  //   etc.
  //  }],
  results: {},
  // results: {
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
      console.log(action.payload.data);
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
    console.log('action.payload.data: ', action.payload.data);
      
      // verify I dont need this, and then cut:
      // convert to JS camelCase
      // let payloadData = action.payload.data.map((e, i) => {
      //   return {
      //     // addDebt's payload includes debt_id
      //     debt_id: e.debt_id,
      //     user_id: e.user_id,
      //     index: e.index,
      //     debt_name: e.debt_name,
      //     beg_bal: e.beg_bal,
      //     rate: e.rate,
      //     term: e.term,
      //     mpmt: e.mpmt
      //   };
      // });
      

      return {
        ...state,
        isLoading: false,
        // debts: payloadData
        debts: [ ...state.debts, action.payload.data ]
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

    // saveInputs - ACTION.PAYLOAD.DATA 
    // 0: monthly_prepayment: 0,

    case "saveInputs_PENDING":
      return {
        ...state,
        // isLoading: true
      };

    case "saveInputs_FULFILLED":
      console.log('ACTION.PAYLOAD.DATA: ', action.payload.data);
      // payload: axios.put(`/saveInputs/${user_id}`, { prepayments, debts })
      return {
        ...state,
        // isLoading: false,
        prepayments: action.payload.data[0],
        // debts: action.payload.data.debts
      };

    case "saveInputs_REJECTED":
      console.log("Error in removeDebt");
      return {
        ...state
      };

    case "onChangeHandlerPrepayments":
      return {
        ...state,
        prepayments: {
          ...state.prepayments,
          [action.eTargetName]: action.eTargetValue
        }
      };

    case "onChangeHandlerDebt":
      const { index, eTargetName, eTargetValue } = action;
      let debtsUpdated = state.debts.map((elem,i)=>{
          return i===index ? Object.assign({}, elem, {[eTargetName]:eTargetValue}) : elem
        })
      return {
        ...state,
        debts: debtsUpdated
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
    index: 0,
    debt_name: '',
    beg_bal: 0,
    rate: 0,
    term: '',
    mpmt: 0
  }]
}


*/