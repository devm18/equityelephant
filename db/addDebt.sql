INSERT INTO debts ( 
  -- // addDebt.sql doesnt insert debt_id, but does retrieve it.  
  user_id,  
  seq_num,  
  debt_name,  
  beg_bal,  
  rate,  
  term, 
  mpmt  
  ) 
  VALUES ($1, $2, $3, $4, $5, $6, $7); 
  
SELECT * FROM debts WHERE user_id = $1 AND seq_num = $2; 

