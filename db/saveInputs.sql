/*
saveInputs is performed in server/calcCtrljs:
  db.query(query1 + query2)
  - updates a row in prepayments, where user_id = prepayments.user_id
  - updates rows in debts, where user_id = debts.user_id 
 */

/* 
dummy debts: 
1	1	4	VISA	900	12	360	320
2	1	2	MCCC	600	10	360	200
3	1	3	cars	150	06	360	500
4	1	1	mort	325	06	360	2200
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
  (588, 1, 1, 'VISA', 1111, 1, 360, 111),
  (589, 1, 2, 'MCcc', 2222, 2, 360, 222),
  (590, 1, 3, 'loan', 3333, 3, 360, 333)
  )
  AS 
  tt(debt_id, user_id, seq_num, debt_name, beg_bal, rate, term, mpmt)
  WHERE tt.debt_id = debts.debt_id 
  AND tt.user_id = debts.user_id; 
*/


/*
-- EXAMPLE INPUT: 
-- query1: 
const prepayments = {
  "m_prepmt": 111,
  "y_prepmt": 111,
  "y_prepmt_date" : "2019/12/01",
  "one_time_prepmt" : 111,
  "one_time_prepmt_date" : "2019/12/01"
}

-- query2: 
const debts = [
  {
    debt_id: 1,
    user_id: 1,
    seq_num: 0,
    debt_name: "Visa",
    beg_bal: 100,
    rate: 1,
    term: 0,
    mpmt: 10
  },
  {
    debt_id: 2,
    user_id: 1,
    seq_num: 1,
    debt_name: "MC",
    beg_bal: 200,
    rate: 2,
    term: 0,
    mpmt: 20
  },
  {
    debt_id: 3,
    user_id: 1,
    seq_num: 2,
    debt_name: "Loan shark",
    beg_bal: 300,
    rate: 3,
    term: 0,
    mpmt: 30
  }
];

*/
