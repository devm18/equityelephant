const express = require("express");
const app = express(); 

const test = (req, res) => { 
  res.status(200).json("Success!!!!");
  app
  .get('db')
  .users.find({})
  .then(response => res.status(200).json(response)); 
}; 

const getData = (req, res, next) => {
  console.log('req.params', req.params); 
  let db = req.app.get("db");
  db.getData(req.params.userId)
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

  let query2 = `INSERT INTO debts (user_id, seq_num, debt_name, beg_bal, rate, mpmt, term) VALUES ` 
  + debts.map(obj => {
    return (
      `(${obj.userId}, ${obj.seqNum}, '${obj.debtName}', ${obj.begBal}, ${obj.rate}, ${obj.mpmt}, '${obj.term}') WHERE user_id = '${obj.userId} AND seq_num = '${obj.seqNum}'` 
    )
  }).join(',')+";";
  
  //console.log('query1', query2); 
  //console.log('query2', query2); 

  db.query(query1 + query2)
  .then(response => { res.status(200).json(response) })
  .catch(error => { 
    console.log(error); 
    // res.status(500).json({}); 
  })
}


//// DONT NEED THIS if saveInputs can post as well as put!  
const addDebt = (req, res, next) => {
  // console.log('req.body', req.body); 
  const { 
    userId,
    seqNum,
    debtName,
    begBal,
    rate,
    mPmt,
    term
  } = req.body;  
  let db = req.app.get("db");
  db.addDebt([
    userId,
    seqNum,
    debtName,
    begBal,
    rate,
    mPmt,
    term
  ])
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => console.log(error)) 
}

const removeDebt = (req, res, next) => {
  console.log('req.params', req.params)
  const { userId, seqNum } = req.params; 
  let db = req.app.get("db");
  db.removeDebt(userId, seqNum)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => console.log(error))
}


module.exports = {
  test, 
  getData,
  saveInputs, 
  addDebt,
  removeDebt
  // calculate
}
