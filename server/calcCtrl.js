const express = require("express");
const app = express();

const test = (req, res) => {
  res.status(200).json("Postman test passes.");
  app
    .get("db")
    .users.find({})
    .then(response => res.status(200).json(response));
};

const getDebts = (req, res, next) => {
  console.log(req.params.user_id);

  let db = req.app.get("db");
  db.getDebts(req.params.user_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const getPrepayments = (req, res, next) => {
  console.log(req.params.user_id);

  let db = req.app.get("db");
  db.getPrepayments(req.params.user_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const addDebt = (req, res, next) => {
  console.log("\n log: ADD-DEBT-REQ.BODY: \n", req.body);
  const { user_id, index, debt_name, beg_bal, rate, term, mpmt } = req.body;

  let db = req.app.get("db");
  db.addDebt([user_id, index, debt_name, beg_bal, rate, term, mpmt])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const removeDebt = (req, res, next) => {
  console.log("\n log: REMOVE-DEBT-REQ.PARAMS \n", req.params);
  let { user_id, debt_id } = req.params;
  let db = req.app.get("db");
  db.removeDebt([user_id, debt_id])
    .then(response => {
      console.log('\n log: REMOVE-DEBT-response\n', response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

// USE db.query to loop thru array of this.props.debt to insert into db.
const saveInputs = (req, res, next) => {
  console.log("\n log: SAVE-INPUTS-REQ.BODY: \n", req.body);
  
  const { prepayments, debts } = req.body;
  const user_id  = req.params;
  console.log('user_id: ', user_id);

  let db = req.app.get("db");

  let query1 = `UPDATE prepayments SET 
  monthly_prepayment = ${prepayments.monthly_prepayment},
  yearly_prepayment = ${prepayments.yearly_prepayment},
  yearly_prepayment_date = '${prepayments.yearly_prepayment_date}',
  one_time_prepayment = ${prepayments.one_time_prepayment},
  one_time_prepayment_date = '${prepayments.one_time_prepayment_date}'
  WHERE user_id = ${req.params.user_id}
  RETURNING *;`;

  // tt = temp_table
  let query2 = `UPDATE debts 
  SET
  index = tt.index,
  debt_name = tt.debt_name, 
  beg_bal = tt.beg_bal, 
  rate = tt.rate,
  term = tt.term, 
  mpmt = tt.mpmt
  FROM 
  (VALUES ` 
  + debts.map(debtObj => {
    return (
      `( ${debtObj.debt_id}, ${debtObj.user_id}, ${debtObj.index},'${debtObj.debt_name}', ${debtObj.beg_bal}, ${debtObj.rate}, '${debtObj.term}', ${debtObj.mpmt} )`
    )})
    .join(",") 
    + `)
    AS 
    tt(debt_id, user_id, index, debt_name, beg_bal, rate, term, mpmt) 
    WHERE tt.debt_id = debts.debt_id
    AND tt.user_id = debts.user_id;
    RETURNING *;`;
    // SELECT * from debts WHERE user_id = ${req.params.user_id};`; 
    
  db.query(query1, query2)
  .then(response => { 
    console.log("\n log: db.query.RESPONSE \n", response);
    res.status(200).json(response) })
  .catch(error => {
    console.log(error);
  })
};

module.exports = {
  test,
  getPrepayments,
  getDebts,
  addDebt,
  removeDebt,
  saveInputs
  // calculate
};
