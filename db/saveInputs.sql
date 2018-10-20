
INSERT INTO prepayments (
  monthly_prepayment, 
  yearly_prepayment, 
  yearly_prepayment_date,
  one_time_prepayment,
  one_time_prepayment_date
) 
VALUES ($1, $2, $3, $4, $5);
-- RETURNING *;


-- WRONG - must match db column names. 
-- INSERT INTO prepayments (
--   monthlyPrepayment,
--   yearlyPrepayment,
--   yearlyPrepaymentDate,
--   oneTimePrepayment,
--   oneTimePrepaymentDate
--   ) 
--   VALUES ($1, $2, $3, $4, $5)
--   RETURNING *;