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
  console.log("calcCtrl-addDebt-req.body", req.body);
  const { user_id, key2, debt_name, beg_bal, rate, term, mpmt } = req.body;

  let db = req.app.get("db");
  db.addDebt([user_id, key2, debt_name, beg_bal, rate, term, mpmt])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const removeDebt = (req, res, next) => {
  console.log("\nREMOVE-DEBT-req.params", req.params);
  let { user_id, debt_id } = req.params;
  let db = req.app.get("db");
  db.removeDebt([user_id, debt_id])
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

// USE db.query to loop thru array of this.props.debt to insert into db.
const saveInputs = (req, res, next) => {
  console.log("\n SAVE-INPUTS-REQ.BODY", req.body);
  const { user_id, prepayments, debts } = req.body;

  let db = req.app.get("db");

  let query1 = `UPDATE prepayments SET 
  monthly_prepayment = ${prepayments.monthly_prepayment},
  yearly_prepayment = ${prepayments.yearly_prepayment},
  yearly_prepayment_date = '${prepayments.yearly_prepayment_date}',
  one_time_prepayment = ${prepayments.one_time_prepayment},
  one_time_prepayment_date = '${prepayments.one_time_prepayment_date}'
  WHERE user_id = ${req.params.user_id};`;

  // tt == temp_table
  let query2 = `UPDATE debts 
  SET
  key2 = tt.key2,
  debt_name = tt.debt_name, 
  beg_bal = tt.beg_bal, 
  rate = tt.rate,
  term = tt.term, 
  mpmt = tt.mpmt
  FROM 
  (VALUES ` 
  + debts.map(debtObj => {
    return (
      `( ${debtObj.debt_id}, ${debtObj.user_id}, ${debtObj.key2},'${debtObj.debt_name}', ${debtObj.beg_bal}, ${debtObj.rate}, '${debtObj.term}', ${debtObj.mpmt} )`
    )})
    .join(",") 
    + `)
    AS 
    tt(debt_id, user_id, key2, debt_name, beg_bal, rate, term, mpmt) 
    WHERE tt.debt_id = debts.debt_id
    AND tt.user_id = debts.user_id;`; 

  // (
  //   (1, 1, 100, 1000, '2018/12/12', 344567, '2018/12/12'),
  //   (2, 2, 200, 2222, '2018/12/12', 100, '2018/12/12')
  // ) as temp_table (user_id, column_a, column_b, column_c, column_d, column_e)
  // where temp_table.user_id = prepayments.user_id;

  // let query2-oLD = `INSERT INTO debts (key2, debt_name, beg_bal, rate, term, mpmt) VALUES `
  // + debts.map(obj => {
  //   return (
  //     `(
  //       '${obj.key2}',
  //       '${obj.debt_name}',
  //       ${obj.beg_bal},
  //       ${obj.rate}, ${obj.mpmt},
  //       '${obj.term}')
  //       WHERE user_id = '${obj.user_id}
  //       AND debt_id = '${obj.debt_id}')`
  //   )
  // }).join(',')+";";

  // console.log('\n query1', query1);
  console.log("\n query2", query2);

  db.query(query1, query2)
  .then(response => { res.status(200).json(response) })
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
