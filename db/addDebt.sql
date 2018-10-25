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


-- {
--   "userId": 1, 
--   "seqNum": 1,
--   "debtName": "visa",
--   "begBal": 100,
--   "rate": 1,
--   "mPmt": 11,
--   "term": "n/a"
--   }