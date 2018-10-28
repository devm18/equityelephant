/*
saveInputs (put) is performed in server/calcCtrljs:
  db.query(query1 + query2)
  - updates a row in prepayments, where users.user_id = prepayments.user_id
  - updates rows in debts, where users.user_id = debts.user_id 
 */


 -- EXAMPLE INPUT: 
 -- ??? should user_id be: "user.user_id"? 

UPDATE prepayments set
  monthly_prepayment = temp_table.column_a, 
  yearly_prepayment = temp_table.column_b, 
  yearly_prepayment_date = temp_table.column_c,
  one_time_prepayment = temp_table.column_d, 
  one_time_prepayment_date = temp_table.column_e
FROM (VALUES 
  (1, 1, 100, 1000, '2018/12/12', 344567, '2018/12/12'), (2, 2, 200, 2222, '2018/12/12', 100, '2018/12/12')
) as temp_table(user_id, column_a, column_b, column_c, column_d, column_e)
where temp_table.user_id = prepayments.user_id;




-- query1: 
  {
    "monthly_prepayment": 111,
    "yearly_prepayment": 111,
    "yearly_prepayment_date" : "2018/12/12",
    "one_time_prepayment" : 111,
    "one_time_prepayment_date" : "2018/12/12"
  }

-- query2: 
  "debts": [
    {
      "debt_id": 582,
      "user_id" : 1,
      "key2": 0,
      "debt_name" : "Visa",
      "beg_bal" : 100,
      "rate" : 1,
      "term" : " ",
      "mpmt" : 10
    }, 
    {
      "debt_id": 583,
      "user_id" : 1,
      "key2": 1,
      "debt_name" : "MC",
      "beg_bal" : 200,
      "rate" : 2,
      "term" : " ",
      "mpmt" : 20
    },
    {
      "debt_id": 584,
      "user_id" : 1,
      "key2": 2,
      "debt_name" : "Loan shark",
      "beg_bal" : 300,
      "rate" : 3,
      "term" : " ",
      "mpmt" : 30
    }
  ]


