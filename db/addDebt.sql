INSERT INTO debts ( 
  user_id,  
  seq_num,  
  debt_name,  
  beg_bal,  
  rate,  
  mPmt,  
  term 
  ) 
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *; 

-- ALT 
-- SELECT 
-- user_id,  
-- seq_num,  
-- debt_name,  
-- beg_bal,  
-- rate,  
-- mPmt,  
-- term
-- FROM debts
-- WHERE user_id = $1; 




-- WRONG bc this returns info about cl info 
-- SELECT * 
-- FROM users u
-- JOIN prepayments p ON u.user_id = p.user_id
-- JOIN debts d ON u.user_id = d.user_id
-- JOIN results r ON u.user_id = r.user_id
-- WHERE u.user_id = $1; 



-- {
--   "userId": 2, 
--   "seqNum": 1,
--   "debtName": "visa",
--   "begBal": 200,
--   "rate": 2,
--   "mPmt": 22,
--   "term": "n/a"
--   }