INSERT INTO debts ( 
  user_id,  
  seq_num,  
  debt_name,  
  beg_bal,  
  rate,  
  mPmt,  
  term 
  ) 
  VALUES ($1, $2, $3, $4, $5, $6, $7); 
  
SELECT * FROM debts WHERE user_id = $1; 

