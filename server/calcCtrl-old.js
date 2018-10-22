const express = require("express");
const app = express(); 

const test = (req, res) => { 
  res.status(200).json("Success!!!!");
  app
  .get('db')
  .users.find({})
  .then(response => res.status(200).json(response)); 
}; 

// const saveInputs = sync (req, res => {
const saveInputs = (req, res) => {
  // console.log('calcCtrl.req.body', req.body); 
  const {
    auth_id,
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate,
    debts
  } = req.body;

  let db = req.app.get('db');
  
  let query1 = `INSERT INTO prepayments (auth_id, monthly_prepayment, yearly_prepayment, yearly_prepayment_date, one_time_prepayment, one_time_prepayment_date) VALUES ('${auth_id}', ${monthlyPrepayment}, ${yearlyPrepayment}, '${yearlyPrepaymentDate}', ${oneTimePrepayment}, '${oneTimePrepaymentDate}');`

  let query2 = `INSERT INTO debts (debt_name, beg_bal, rate, mpmt, term, ipmt, ppmt, prepmt, end_bal, user_id, auth_id) VALUES ` 
  + debts.map(obj => {
    return (
      `('${obj.debt_name}', ${obj.beg_bal}, ${obj.rate}, ${obj.mpmt}, '${obj.term}', ${obj.ipmt}, ${obj.ppmt}, ${obj.prepmt}, ${obj.end_bal}, ${obj.user_id}, '${obj.auth_id}')`
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
  saveInputs 
}