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
  console.log('req.params', req.params); 

 let db = req.app.get("db");
  db.getInputs(req.params.userId)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => console.log(error))
}

const addDebt = (req, res, next) => {
  // console.log('req.body', req.body); 
  const { 
    debtName,
    begBal,
    rate,
    mPmt,
    term,
    userId,
    seqNum
  } = req.body;  
  let db = req.app.get("db");
  db.addDebt([
    debtName,
    begBal,
    rate,
    mPmt,
    term,
    userId,
    seqNum
  ])
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => console.log(error)) 
}


// USE db.query to loop thru array of this.props.debt to insert into db. 
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

  let query2 = `INSERT INTO debts (debt_name, beg_bal, rate, mpmt, term, seq_num, user_id) VALUES ` 
  + debts.map(obj => {
    return (
      `('${obj.debtName}', ${obj.begBal}, ${obj.rate}, ${obj.mpmt}, '${obj.term}', ${obj.seqNum}, ${obj.userId}) WHERE user_id = '${obj.userId} AND seq_num = '${obj.debts.seqNum}'`
    )
  }).join(',')+";";
  
  //console.log('calcCtrl.req.body.queries', query1, query2); 

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
  addDebt,
  // removeDebt,
  saveInputs//, 
  // calculate
}
