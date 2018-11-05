const { today, yyyy, mm, dd, round, findMonthlyPayment, findTerm, findTermInYearsMonths, findInterestCost, findTermWmprepmt,
  findCostWmprepmt } = require("./finFuncs");

///////////////////////////////////////////////////////////////////////////// 
/* CALCULATE FUNCTION PLAN: 
  FIND_FIRST: new_term & new_cost of each debt after sequential prepmt.
  FIND_FINALLY: the new_term, new_cost, and eliminated cost for sequentially applying prepayments to payoff all debts. 
  
  KEY (to abbreviation of financial terms): 
    mpmt = monthly payment 
    ipmt = interest payment
    ppmt = principle payment (reduces the principle balance)
    prepmt = prepayment
    beg_bal = beginning balance (principle)
    end_bal = ending balance (principle)
    rate = interest rate
    term = number of monthly payments remaining 
    // special to EquityElephant: 
    prepmt_snowball - when a debt is paid off, its scheduled monthly payment amount gets added to the prepayments amount (like a snowball rolling downhill). I have not included this option on the frontend. For now, assume the user would want to snowball prepayments. And hard code it below that: 
    prepayments.prepmt_snowball = true; 
  
  GIVEN: 
    // prepayments.prepmt_snowball; 
    users.user_id; / 
    prepayments.monthly_prepayment;
    debts.debt.beg_bal;
    debts.debt.rate;
    debts.debt.term;
    debts.debt.mpmt; 

  RETURN VALUE: 
    paidOffDebtsArray: [{debt.name, debt.new_term, debt.new_cost }, ...] 
  
  MAIN FUNCTION (that loops over each debt in the debts array): 
    debts.reduce()
        1. Initialize acc = []; // initialize accumulator, acc, as the 2nd argument in the reduce(cb,[]) function. 
        2. Initialize paidOffDebt = { name='', term=0, cost=0 }; // initialize these three parameters as three arguments in the recursive function call. 
        3. Use the RECURSIVE FUNCTION* to find the new_term & new_cost of each debt; and save each paidOffDebt as a paidOffDebt object 
        4. Add each paidOffDebt to acc.
  
    *the RECURSIVE FUNCTION 
      TERMINATING CONDITION: 
        debt.bal <= 0; (short version)
      TERMINATING RETURN VALUE
        (an object that contains): 
        1. remainder (of any prepayment amount over what is owed for current debt;
        2. prepmt = prepmtSnowball ? prepmt + mpmt : prepmt; 
        3. paidOffDebt = { debt.name, debt.new_term, debt.new_cost }; 
      RECURSIVE RETURN VALUE/PARAMETERS: 
        Recur(name, bal, rate, term, mpmt, cost, prepmtSnowball, prepmtRemainder);
      - Use findTermWmprepmt for each recursion. ???
      - Use findCostWmprepmt for each recursion. ???
      - initialize & increment term, save & use in next term 
      - Subtract prev.term from curr.term to find when curr.debt gets prepmtSnowball 
*/

// CALCULATE FUNCTION EXECUTION: 
const calculate = (req, res, next) => {
  const user_id = req.params.user_id; 
  const { prepayments, debts } = req.body;
  console.log("\n log: CALCULATE-REQ.PARAMS: \n", req.params);
  console.log("\n log: CALCULATE-REQ.BODY: \n", req.body);

  
  // RECURSIVE FUNCTION 
  const payoffDebt = (name, beg_bal, rate, mpmt, prepmt, prepmtSnowball=true, remainder=0, new_term=0, new_cost=0) => {
    let ipmt = beg_bal * rate;
    let ppmt = mpmt - ipmt;
    let end_bal = beg_bal - ppmt - prepmt - remainder; 
    remainder = 0; // apply once, then reset to 0
    // terminating condition: 
    if (end_bal <= 0) {
      // set values for next debt in the reduce loop: 
      remainder = Math.abs(beg_bal - ppmt - prepmt);
      prepmt = prepmtSnowball ? prepmt + mpmt : prepmt; 
      let paidOffDebt = { name, new_term, new_cost };
      // return values (remainder, prepmt) for the next debt in the reduce loop, and (payoffDebt) for the paidOffDebts array:  
      return { remainder, prepmt, paidOffDebt };
    } else { 
      new_term++;
      new_cost += ipmt;
      // recur:  
      payoffDebt(name, end_bal, rate, mpmt, prepmt, prepmtSnowball, remainder, new_term, new_cost); 
    }
  }

  const paidOffDebtsArray = debts.reduce((acc,elem,i,arr)=>{
    // paidOffdebtsArr.push(results.paidOffDebt)

    payoffDebt(elem.name, elem.beg_bal, elem.rate, elem.mpmt, prepayments.monthly_prepayment, true, 0, 0, 0); 

    for (let i = 0; i <= debts.length; i++) {
      // let prepmtRemainder = 0;
      // if(debts[i].bal <= mprepmt) {
      //   mprepmtRemainder = mprepmt - debts[0].bal;
      // }
      accTerm = 0; 
      let currTerm = 0;
      currTerm = findTermWmprepmt(debts[i].bal, debts[i].rate, debts[i].mpmt, mprepmt);
      accTerm += currTerm; 
      newTermsArr.push(accTerm); 
    }
    return newTermsArr.reduce((acc,elem,i,arr)=>{ 
      return acc > e ? acc : e 
    },{}); 
    
   },[]);
  
  /////////////////////////////////////////////////////////////////////////////
  const total_debt = debts.reduce((acc, elem, i, arr)=>{
    return acc + elem.beg_bal;
  }, 0); 
  // console.log(results.total_debt); 

  const original_term = debts.reduce((acc, elem, i, arr)=>{
    return (elem.term > acc) ? elem.term : acc;
  }, 0);
  // console.log(results.original_term); 

  const new_term = paidOffDebts.reduce((acc,elem,i,arr)=>{
    return (elem.term > acc) ? elem.term : acc;
  }, 0);

  const original_cost = debts.reduce((acc, elem, i, arr)=>{ 
    return acc + findInterestCost(elem.beg_bal, elem.rate, elem.mpmt);   
  }, 0);
  // console.log(result.original_cost); 

  const new_cost = paidOffDebts.reduce((acc, elem, i, arr)=>{  
    return acc + elem.cost;
  }, 0);
  
  const eliminated_cost = original_cost - new_cost;
  
  /////////////////////////////////////////////////////////////////////////////
  let db = req.app.get("db");
  db.calculate([user_id, total_debt, original_term, new_term, original_cost, new_cost, eliminated_cost])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = {
  calculate
};

/* 
// F > B, Calculate, B > DB, response > B > F.
// Use async & await? 

Excel
debt1                                 | debt2                                 | 
beg_bal, ipmt, ppmt, prepmt, end_bal  | beg_bal, ipmt, ppmt, prepmt, end_bal  | 

debt1                                 | debt2                                 | 
beg_bal, rate, term, mpmt             | beg_bal, rate, term, mpmt 

debt1 = {
  debt_id: 1,
  user_id: 1,
  seq_num: 0,
  debt_name: '',
  beg_bal: 0,
  rate: 0,
  term: 0,
  mpmt: 0
},

const results = {
  // result_id: 1,
  user_id: 1,
  total_debt: 0,
  original_term: 0,
  new_term: 0,
  original_cost: 0,
  new_cost: 0,
  eliminated_cost: 0
}
*/