/* 
saveInputs (put) is performed in server/calcCtrljs:
  db.query(query1 + query2)
  - updates a row in prepayments, where users.user_id = prepayments.user_id
  - updates rows in debts, where users.user_id = debts.user_id 
 


 -- EXAMPLE INPUT: 
 -- ??? should user_id be: "user.userId"? 
 {
  "user_id": 1, 
  "monthlyPrepayment": 111,
  "yearlyPrepayment": 111,
  "yearlyPrepaymentDate": "2018/12/12",
  "oneTimePrepayment": 111,
  "oneTimePrepaymentDate": "2018/12/12",
  "debts": [
    {
      "user_id": 1,
      "seq_num": 1,
      "debt_name": "Visa",
      "beg_bal": 100,
      "rate": 1,
      "mpmt": 10,
      "term": "n/a"
    }, 
    {
      "user_id": 1,
      "seq_num": 2,
      "debt_name": "MC",
      "beg_bal": 200,
      "rate": 2,
      "mpmt": 20,
      "term": "n/a"
    },
    {
      "user_id": 1,
      "seq_num": 2,
      "debt_name": "Loan shark",
      "beg_bal": 300,
      "rate": 3,
      "mpmt": 30,
      "term": "n/a"
    }
  ]
} 
*/
