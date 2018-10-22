SELECT 
  -- user_id,
  -- 
  monthly_pmt,
  yearly_pmt,
  yearly_pmt_date,
  one_time_pmt,
  one_time_pmt_date, 
  -- 
  seq_num,
  debt_id,
  debt_name,
  beg_bal,
  rate,
  mpmt,
  term,
  ipmt,
  ppmt,
  preendpmt,
  end_bal,
  -- 
  total_debt,
  original_term_in_years,
  new_term_in_years,
  original_cost,
  new_cost,
  eliminated_cost
  FROM users 
  JOIN prepayments ON users.user_id = prepayments.user_id
  JOIN debts ON users.user_id = debts.user_id
  JOIN results ON users.user_id = results.user_id
  WHERE user_id = $1; 
