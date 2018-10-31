const express = require("express");
const app = express();

const test = (req, res, next) => {
  res.status(200).json("Postman test passes.");
  app
    .get("db")
    .users.find({})
    .then(response => res.status(200).json(response));
};

const getDebts = (req, res) => {
  console.log(req.params.user_id);

  let db = req.app.get("db");
  db.getDebts(req.params.user_id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

const getPrepayments = (req, res) => {
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
  const { user_id, seq_num, debt_name, beg_bal, rate, term, mpmt } = req.body;

  let db = req.app.get("db");
  db.addDebt([user_id, seq_num, debt_name, beg_bal, rate, term, mpmt])
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
      console.log("\n log: REMOVE-DEBT-response\n", response);
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

// saveInputs inserts data into two tables: prepayments and debts.
// query1 is for the prepayments table.
// query2 is for the debts table.
// query2 contains a map() function that loops over this.props.debts in order to insert multiple rows into the debts table.
// db.query(query1, query2) is the database call.
const saveInputs = (req, res, next) => {
  const user_id = req.params.user_id;
  const { prepayments, debts } = req.body;

  console.log("\n log: SAVE-INPUTS-REQ.PARAMS: \n", req.params);
  console.log("\n log: SAVE-INPUTS-REQ.BODY: \n", req.body);

  let db = req.app.get("db");

  let query1 = `UPDATE prepayments 
  SET 
  monthly_prepayment = ${prepayments.monthly_prepayment},
  yearly_prepayment = ${prepayments.yearly_prepayment},
  yearly_prepayment_date = '${prepayments.yearly_prepayment_date}',
  one_time_prepayment = ${prepayments.one_time_prepayment},
  one_time_prepayment_date = '${prepayments.one_time_prepayment_date}'
  WHERE user_id = ${req.params.user_id}
  RETURNING *;`;

  // temp = temp_table
  let query2 = `UPDATE debts 
  SET
  seq_num = temp.seq_num,
  debt_name = temp.debt_name, 
  beg_bal = temp.beg_bal, 
  rate = temp.rate,
  term = temp.term, 
  mpmt = temp.mpmt
  FROM 
  (VALUES ` +
    debts
      .map(debtObj => {
        return `( ${debtObj.debt_id}, ${debtObj.user_id}, ${debtObj.seq_num},'${debtObj.debt_name}', ${debtObj.beg_bal}, ${debtObj.rate}, ${debtObj.term}, ${debtObj.mpmt} )`;
      })
      .join(",") +
    `)
    AS 
    temp(debt_id, user_id, seq_num, debt_name, beg_bal, rate, term, mpmt) 
    WHERE temp.debt_id = debts.debt_id
    AND temp.user_id = debts.user_id
    RETURNING *;`;
  // SELECT * from debts WHERE user_id = ${req.params.user_id};`;

  let dbReqs = [db.query(query1), db.query(query2)];
  Promise.all(dbReqs).then(response => {
    console.log("\n response: \n ", response);
    res.status(200).json(response);
  });
};


///////////////////////////////////////
// F > B, Calculate, B > DB, response > F.
// async & await
const calculate = (req, res, next) => {
  const user_id = req.params.user_id;
  const { prepayments, debts/* , results */ } = req.body;
  console.log("\n log: CALCULATE-REQ.BODY: \n", req.body);

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

  results.total_debt = debts.reduce((acc, elem, i, arr)=>{
    return acc + elem.beg_bal;
  },0); 

  results.original_term = debts.reduce((acc, elem, i, arr)=>{
    return elem.term > acc ? elem.term : acc 
    // ALT: 
    // let acc = 0; 
    // if (elem.term > acc) {
    //   acc = elem.term;
    // }
    // return acc; 
    //
  }, 0)


  

  let db = req.app.get("db");
  db.calculate()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => console.log(error));
};

module.exports = {
  test,
  getPrepayments,
  getDebts,
  addDebt,
  removeDebt,
  saveInputs,
  calculate
};
