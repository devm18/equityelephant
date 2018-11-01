// F > B, Calculate, B > DB, response > B > F.
// async & await

const { today, yyyy, mm, dd, round, findMonthlyPayment, findTerm, findTermInYearsMonths, findInterestCost } = require("./finFuncs");

const calculate = (req, res, next) => {
  const user_id = req.params.user_id; 
  const { prepayments, debts } = req.body;
  console.log("\n log: CALCULATE-REQ.BODY: \n", req.body);

  // const results = {
  //   // result_id: 1,
  //   user_id: 1,
  //   total_debt: 0,
  //   original_term: 0,
  //   new_term: 0,
  //   original_cost: 0,
  //   new_cost: 0,
  //   eliminated_cost: 0
  // }

  const total_debt = debts.reduce((acc, elem, i, arr)=>{
    return acc + elem.beg_bal;
  }, 0); 
// console.log(results.total_debt); 

  const original_term = debts.reduce((acc, elem, i, arr)=>{
    return elem.term > acc ? elem.term : acc;
  }, 0);
  // console.log(results.original_term); 

  const new_term = debts.reduce((acc, elem, i, arr)=>{
    return null; // for now.  
  }, 0);

  /////////////////////////////////////////////
  const original_cost = debts.reduce((acc, elem, i, arr)=>{ 
    return acc + findInterestCost(elem.beg_bal, elem.rate, elem.mpmt);   
  }, 0);
  // console.log(result.original_cost); 
  
  const new_cost = debts.reduce((acc, elem, i, arr)=>{  
    return null; 
    // return acc + findInterestCost(elem.beg_bal, elem.rate, elem.mpmt);
  }, 0);

  const eliminated_cost = debts.reduce((acc, elem, i, arr)=>{
    return null; 
  })


  let db = req.app.get("db");
  db.calculate([debts[0].user_id, total_debt, original_term, new_term, original_cost, new_cost, eliminated_cost ])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};


module.exports = {
  calculate
};
