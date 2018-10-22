const express = require("express");
const app = express(); 

const test = (req, res) => { 
  res.status(200).json("Success!!!!");
  app
  .get('db')
  .users.find({})
  .then(response => res.status(200).json(response)); 
}; 

const getInputs = (req, res, next) => {
  console.log('req.body', req.body); 
  const { userId } = req.params;
  let db = req.app.get("db");
  db.getInputs().then(response => {
    res.status(200).json(response);
  }); 
}

  // const {
  //   userId,
  //   monthlyPrepayment,
  //   yearlyPrepayment,
  //   yearlyPrepaymentDate,
  //   oneTimePrepayment,
  //   oneTimePrepaymentDate,
  //   debts
  // } = req.body;
  
  // // let db







// const saveInputs = sync (req, res => {
const saveInputs = (req, res) => {
  // console.log('calcCtrl.req.body', req.body); 
  const {
    userId,
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate,
    debts
  } = req.body;

  let db = req.app.get('db');
  
  let query1 = `INSERT INTO prepayments (monthly_prepayment, yearly_prepayment, yearly_prepayment_date, one_time_prepayment, one_time_prepayment_date) VALUES (${monthlyPrepayment}, ${yearlyPrepayment}, '${yearlyPrepaymentDate}', ${oneTimePrepayment}, '${oneTimePrepaymentDate}') WHERE user_id = '${userId}';`

  let query2 = `INSERT INTO debts (debt_name, beg_bal, rate, mpmt, term, ipmt, ppmt, prepmt, end_bal) VALUES ` 
  + debts.map(obj => {
    return (
      `('${obj.debt_name}', ${obj.beg_bal}, ${obj.rate}, ${obj.mpmt}, '${obj.term}', ${obj.ipmt}, ${obj.ppmt}, ${obj.prepmt}, ${obj.end_bal}) WHERE user_id = '${obj.userId} AND seq_num = '${obj.debts.seqNum}'`
    )
  }).join(',')+";";
  console.log('calcCtrl.req.body.queries', query1, query2); 

  // const saveTheInputs = await db.query(query1 + query1)
  db.query(query1 + query2)
  .then(response => { res.status(200).json(response) })
  .catch(error => { 
    console.log(error); 
    // res.status(500).json({}); 
  })
}

module.exports = {
  test, 
  getInputs,
  // addDebt,
  // removeDebt,
  saveInputs//, 
  // calculate
}
