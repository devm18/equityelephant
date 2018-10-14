CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(2),
  zip_code integer
); 

CREATE TABLE prepayments (
  prepmt_id SERIAL PRIMARY KEY, 
  monthly_prepmt FLOAT,
  yearly_prepmt FLOAT,
  yearly_prepmt_month DATE,
  one_time_prepmt1 FLOAT,
  one_time_prepmt1_date DATE,
  one_time_prepmt2 FLOAT,
  one_time_prepmt2_date DATE
  -- foreign key (user_id) references users (user_id)
  -- foreign key (email) references users (email)
);
-- ALTER TABLE prepayments ADD COLUMN foreign key (user_id) references users (user_id); 

CREATE TABLE debts (
  debt_id SERIAL PRIMARY KEY, 
  d1_beg_bal FLOAT,
  d1_end_bal FLOAT,
  d1_rate FLOAT,
  d1_mpmt FLOAT,
  d1_ppmt FLOAT,
  d1_ipmt FLOAT,
  d1_term FLOAT, /* calculate from bal, rate, payment */
  
  d2_beg_bal FLOAT,
  d2_end_bal FLOAT,
  d2_rate FLOAT,
  d2_mpmt FLOAT,
  d2_ppmt FLOAT,
  d2_ipmt FLOAT,
  d2_term FLOAT, /* calculate from bal, rate, payment */
  
  d3_beg_bal FLOAT,
  d3_end_bal FLOAT,
  d3_rate FLOAT,
  d3_mpmt FLOAT,
  d3_ppmt FLOAT,
  d3_ipmt FLOAT,
  d3_term FLOAT, /* calculate from bal, rate, payment */
  
  d4_beg_bal FLOAT,
  d4_end_bal FLOAT,
  d4_rate FLOAT,
  d4_mpmt FLOAT,
  d4_ppmt FLOAT,
  d4_ipmt FLOAT,
  d4_term FLOAT, /* calculate from bal, rate, payment */
  
  d5_beg_bal FLOAT,
  d5_end_bal FLOAT,
  d5_rate FLOAT,
  d5_mpmt FLOAT,
  d5_ppmt FLOAT,
  d5_ipmt FLOAT,
  d5_term FLOAT, /* calculate from bal, rate, payment */
  
  d6_beg_bal FLOAT,
  d6_end_bal FLOAT,
  d6_rate FLOAT,
  d6_mpmt FLOAT,
  d6_ppmt FLOAT,
  d6_ipmt FLOAT,
  d6_term FLOAT, /* calculate from bal, rate, payment */

  d7_beg_bal FLOAT,
  d7_end_bal FLOAT,
  d7_rate FLOAT,
  d7_mpmt FLOAT,
  d7_ppmt FLOAT,
  d7_ipmt FLOAT,
  d7_term FLOAT, /* calculate from bal, rate, payment */

  d8_beg_bal FLOAT,
  d8_end_bal FLOAT,
  d8_rate FLOAT,
  d8_mpmt FLOAT,
  d8_ppmt FLOAT,
  d8_ipmt FLOAT,
  d8_term FLOAT, /* calculate from bal, rate, payment */

  d9_beg_bal FLOAT,
  d9_end_bal FLOAT,
  d9_rate FLOAT,
  d9_mpmt FLOAT,
  d9_ppmt FLOAT,
  d9_ipmt FLOAT,
  d9_term FLOAT, /* calculate from bal, rate, payment */

  d10_beg_bal FLOAT,
  d10_end_bal FLOAT,
  d10_rate FLOAT,
  d10_mpmt FLOAT,
  d10_ppmt FLOAT,
  d10_ipmt FLOAT,
  d10_term FLOAT /* calculate from bal, rate, payment */
  -- foreign key (user_id) references users (user_id),
  -- foreign key (email_id) references users (email),
  -- foreign key (prepmt_id) references prepayments (prepmt_id),
); 

CREATE TABLE results (
  result_id SERIAL PRIMARY KEY,
  ori__cost FLOAT,
  new_cost FLOAT,
  eli_cost FLOAT,
  ori_term_in_years FLOAT,
  new_term_in_years FLOAT
  -- foreign key (user_id) references users (user_id),
  -- foreign key (email_id) references users (email),
  -- foreign key (prepmt_id) references prepayments (prepmt_id),
  -- foreign key (debts_id) references debts (debts_id),
);



/* ********** DONT NEED FOR MVP ********** */
CREATE TABLE amortization_schedule (
  amortization_schedule_id SERIAL PRIMARY KEY,
  month date,
  beg_balance FLOAT,
  end_balance FLOAT,
  mpmt FLOAT,
  ppmt FLOAT,
  ipmt FLOAT,
  prepmts FLOAT
); 
