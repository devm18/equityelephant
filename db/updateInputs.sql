UPDATE prepayments 
SET ( 
  monthly_prepayment = $2, 
  yearly_prepayment = $3, 
  yearly_prepayment_date = $4,
  one_time_prepayment = $5,
  one_time_prepayment_date = $6
  )
  WHERE prepayments_id = $1; 

UPDATE debts ( 
  d1_debt_name, d1_beg_bal, d1_rate, d1_mpmt, d1_term,
  d2_debt_name, d2_beg_bal, d2_rate, d2_mpmt, d2_term,
  d3_debt_name, d3_beg_bal, d3_rate, d3_mpmt, d3_term,
  d4_debt_name, d4_beg_bal, d4_rate, d4_mpmt, d4_term,
  d5_debt_name, d5_beg_bal, d5_rate, d5_mpmt, d5_term,
  d6_debt_name, d6_beg_bal, d6_rate, d6_mpmt, d6_term,
  d7_debt_name, d7_beg_bal, d7_rate, d7_mpmt, d7_term,
  d8_debt_name, d8_beg_bal, d8_rate, d8_mpmt, d8_term,
  d9_debt_name, d9_beg_bal, d9_rate, d9_mpmt, d9_term,
  d10_debt_name, d10_beg_bal, d10_rate, d10_mpmt, d10_term 
  )
  VALUES (
    $1, $2, $3, $4, $5,
    $6, $7, $8, $9, $10, 
    $11, $12, $13, $14, $15, 
    $16, $17, $18, $19, $20,
    $21, $22, $23, $24, $25,
    $31, $32, $33, $34, $35,
    $41, $42, $43, $44, $45,
    $51, $52, $53, $54, $55,
    $61, $62, $63, $64, $65,
    $71, $72, $73, $74, $75,
    $81, $82, $83, $84, $85,
    $91, $92, $93, $94, $95,
    $101, $102, $103, $104, $105
  );

SELECT monthly_prepayment, 
  yearly_prepayment, 
  yearly_prepayment_date,
  one_time_prepayment, 
  one_time_prepayment_date
  FROM prepayments;  