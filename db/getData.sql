SELECT 
  u.user_id, 
  p.monthly_prepayment,
  p.yearly_prepayment,
  p.yearly_prepayment_date,
  p.one_time_prepayment,
  p.one_time_prepayment_date,
  d.debt_name,
  d.beg_bal,
  d.rate,
  d.mpmt,
  d.term,
  d.seq_num
FROM users u
JOIN prepayments p ON u.user_id = p.user_id
JOIN debts d ON u.user_id = d.user_id
JOIN results r ON u.user_id = r.user_id
WHERE u.user_id = $1; 


-- NOTE: postico only returns columns if every column has a value. 


