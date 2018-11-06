const { today, yyyy, mm, dd, round, findMonthlyPayment, findTerm, findTermInYearsMonths, findCost, findTermWmprepmt,
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
    prepayments.m_prepmt;
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
  // const user_id = req.params.user_id; // I used post, not put. 
  const { prepayments } = req.body; 
  const { debts } = req.body;
  const { user_id, m_prepmt, y_prepmt, y_prepmt_date, one_time_prepmt, one_time_prepmt_date } = req.body.prepayments; 
  const { debt_id, seq_num, debt_name, beg_bal, rate, term, mpmt } = req.body.debts;
  
  console.log("\n log: CALCULATE-REQ.BODY: \n");
  console.log(req.body);
  // DEMO 
  // { prepayments: 
  //   { user_id: 1,
  //     m_prepmt: 100,
  //     y_prepmt: 0,
  //     y_prepmt_date: '2018/12/12',
  //     one_time_prepmt: 0,
  //     one_time_prepmt_date: '2018/12/12' },
  //  debts: 
  //   [ { debt_id: 843,
  //       user_id: 1,
  //       seq_num: 1,
  //       debt_name: 'mortgage',
  //       beg_bal: 200000,
  //       rate: 6,
  //       term: 0,
  //       mpmt: 1199.1 } ] }

  // RECURSIVE FUNCTION DEFINITION 
  const payoffDebt = (debt_name, beg_bal, rate, mpmt, prepmt, prepmtSnowball=true, remainder=0, new_term=0, new_cost=0) => {

    console.log(`\n log payoffDebt arguments: debt_name, beg_bal, rate, mpmt, prepmt, prepmtSnowball, remainder, new_term, new_cost: \n`);  
    console.log(debt_name, beg_bal, rate, mpmt, prepmt, prepmtSnowball, remainder, new_term, new_cost);
  
    // undefined Infinity 6 1199.1 100 true 0 0 Infinity
    let ipmt = beg_bal * rate/100/12;
    let ppmt = mpmt - ipmt;
    let end_bal = beg_bal - ppmt - prepmt - remainder; 
    remainder = 0; // apply once, then reset to 0
    // terminating condition: 
    if (end_bal <= 0) {
      // set values for next debt in the reduce loop: 
      remainder = Math.abs(beg_bal - ppmt - prepmt);
      prepmt = prepmtSnowball ? prepmt + mpmt : prepmt; 
      let paidOffDebt = { debt_name, new_term, new_cost };
      // return values (remainder, prepmt) for the next debt in the reduce loop, and (payoffDebt) for the paidOffDebts array:  
      return { remainder, prepmt, paidOffDebt };
    } else { 
      new_term = new_term++;
      new_cost += ipmt;
      // recur:  
      return payoffDebt(debt_name, end_bal, rate, mpmt, prepmt, prepmtSnowball, remainder, new_term, new_cost); 
    }
  }

  const paidOffDebtsArray = debts.map((elem, i, arr)=>{
    // The acc is initialized in the second argument of the reduce function. 
    /// need a terminating condition here ???
    // RECURSIVE FUNCTION CALL
    let paidOffDebtInfo = payoffDebt(elem.debt_name, elem.beg_bal, elem.rate, elem.mpmt, m_prepmt, true, 0, 0, 0); 
    // paidOffDebtInfo = { remainder, prepmt, paidOffDebt }
    // console.log('paidOffDebtInfo: ', paidOffDebtInfo);
    return paidOffDebtInfo.paidOffDebt;
   });
  
  /////////////////////////////////////////////////////////////////////////////
  let total_debt = debts.reduce((acc, elem, i, arr)=>{
    return acc + elem.beg_bal;
  }, 0); 
  // console.log('total_debt: ', total_debt); //check

  let original_term = debts.reduce((acc, elem, i, arr)=>{
    return (elem.term > acc) ? elem.term : acc;
  }, 0);
  // console.log('original_term: ', original_term); //check

  let new_term = paidOffDebtsArray.reduce((acc,elem,i,arr)=>{
    return (elem.term > acc) ? elem.term : acc;
  }, 0);
  // console.log('new_term: ', new_term);

  let original_cost = debts.reduce((acc, elem, i, arr)=>{ 
    return acc + findCost(elem.beg_bal, elem.rate, elem.mpmt);   
  }, 0);
  // console.log('original_cost: ', original_cost); //check

  let new_cost = paidOffDebtsArray.reduce((acc, elem, i, arr)=>{ 
    console.log('elem: ', elem);
    return acc + elem.new_cost;
  }, 0);
  // console.log('new_cost: ', new_cost);

  let eliminated_cost = original_cost - new_cost;
  // console.log('eliminated_cost: ', eliminated_cost);

  total_debt = round(total_debt,0)
  original_term = round(original_term,2)
  new_term = round(new_term,2)
  original_cost = round(original_cost,0)
  new_cost = round(new_cost,0)
  eliminated_cost = round(eliminated_cost,0)

  console.log('results properties:')
  console.log(total_debt, original_term, new_term, original_cost, new_cost, eliminated_cost)

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