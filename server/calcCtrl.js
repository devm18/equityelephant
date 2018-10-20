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
  console.log(req.body); 
  const {
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate
  } = req.body;
  let db = req.app.get('db');
  // const inputs = await db.TABLE_NAME?.saveInputs([
  db.saveInputs([ 
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate
  ])
  .then(response => { 
    res.status(200).json(response); 
  })
  .catch(error => {
    res.status(500).json({}); 
  })
}

module.exports = {
  test, 
  saveInputs 
}
