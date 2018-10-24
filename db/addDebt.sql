INSERT INTO debts ( 
  debt_name,
  beg_bal,
  rate,
  mPmt,
  term,
  user_id,
  seq_num
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  SELECT * FROM debts 
  WHERE user_id = $6; 



-- {
--   "debtName": "visa",
--   "begBal": 200,
--   "rate": 2,
--   "mPmt": 22,
--   "term": "",
--   "userId": 1, 
--   "seqNum": 1
--   }