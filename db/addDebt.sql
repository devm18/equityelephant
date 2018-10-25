INSERT INTO debts 
(user_id, debt_name, beg_bal, rate, mPmt, term, seq_num)
VALUES 
($1, $2, $3, $4, $5, $6, $7);

SELECT * 
FROM users u
JOIN prepayments p ON u.user_id = p.user_id
JOIN debts d ON u.user_id = d.user_id
JOIN results r ON u.user_id = r.user_id
where u.user_id = $1; 



-- {
--   "debtName": "visa",
--   "userId": 2, 
--   "begBal": 200,
--   "rate": 2,
--   "mPmt": 22,
--   "term": "2",
--   "seqNum": 1
--   }