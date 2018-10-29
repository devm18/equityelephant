/*
saveInputs is performed in server/calcCtrljs:
  db.query(query1 + query2)
  - updates a row in prepayments, where user_id = prepayments.user_id
  - updates rows in debts, where user_id = debts.user_id 
 */

/* 
dummy debts: 
1	1	4	VISA	900	12	3	320
2	1	2	MCCC	600	10	4	200
3	1	3	cars	15000	6	40	500
4	1	1	mort	325000	6	360	2200
*/

/* https://stackoverflow.com/questions/18797608/update-multiple-rows-in-same-query-using-postgresql

-- example 1, u2 is a temporary table 
update users set 
  email = u2.email,
  first_name = u2.first_name,
  last_name = u2.last_name
  from 
  (values
    (1, 'hollis@weimann.biz', 'Hollis', 'Connell'),
    (2, 'robert@duncan.info', 'Robert', 'Duncan')
  ) as u2(id, email, first_name, last_name)
  where u2.id = users.id;


-- WORKS IN POSTICO: 
UPDATE debts 
SET
  seq_num = tt.seq_num,
  debt_name = tt.debt_name, 
  beg_bal = tt.beg_bal, 
  rate = tt.rate,
  term = tt.term, 
  mpmt = tt.mpmt
  FROM 
  (VALUES 
  (588, 1, 1, 'VISA', 1111, 1, 'term', 111),
  (589, 1, 2, 'MCcc', 2222, 2, 'term', 222),
  (590, 1, 3, 'loan', 3333, 3, 'term', 333)
  )
  AS 
  tt(debt_id, user_id, seq_num, debt_name, beg_bal, rate, term, mpmt)
  WHERE tt.debt_id = debts.debt_id 
  AND tt.user_id = debts.user_id; 
*/


/*
-- EXAMPLE INPUT: 
-- query1: 
  {
    "monthly_prepayment": 111,
    "yearly_prepayment": 111,
    "yearly_prepayment_date" : "2018/12/12",
    "one_time_prepayment" : 111,
    "one_time_prepayment_date" : "2018/12/12"
  }

-- query1 & query2: 
  {
	"prepayments": {
		"monthly_prepayment": 222,
    	"yearly_prepayment": 222,
    	"yearly_prepayment_date" : "2018/12/12",
    	"one_time_prepayment" : 222,
    	"one_time_prepayment_date" : "2018/12/12"
	},
	"debts": [{
		"debt_id": 587,
    	"user_id" : 1,
    	"seq_num": 0,
    	"debt_name" : "Visa",
    	"beg_bal" : 100,
    	"rate" : 1,
    	"term" : " ",
    	"mpmt" : 10
	}, 
	{
		"debt_id": 589,
    	"user_id" : 1,
    	"seq_num": 1,
    	"debt_name" : "MC",
    	"beg_bal" : 200,
    	"rate" : 2,
    	"term" : " ",
    	"mpmt" : 20
    },
    {
    	"debt_id": 590,
    	"user_id" : 1,
    	"seq_num": 2,
    	"debt_name" : "Loan shark",
    	"beg_bal" : 300,
    	"rate" : 3,
    	"term" : " ",
    	"mpmt" : 30
    }
  ]
}
*/