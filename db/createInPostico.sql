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
  prepayment_id SERIAL PRIMARY KEY, 
  monthly_prepayment FLOAT,
  yearly_prepayment FLOAT,
  yearly_prepayment_date DATE,
  one_time_prepayment FLOAT,
  one_time_prepayment_date DATE,
  one_time_prepayment2 FLOAT,
  one_time_prepayment2_date DATE
  -- foreign key (user_id) references users (user_id) integer,
  -- foreign key (email) references users (email) varchar(100)
);
-- ALTER TABLE prepayments ADD COLUMN foreign key (user_id) references users (user_id); 






CREATE TABLE debts (
  debt_id SERIAL PRIMARY KEY, 
  d1_debt_name VARCHAR(20),
  d1_beg_bal FLOAT,
  d1_rate FLOAT,
  d1_term FLOAT, /* calculate from bal, rate, payment */
  d1_mpmt FLOAT,
  d1_ipmt FLOAT,
  d1_ppmt FLOAT,
  d1_prepmt FLOAT,
  d1_end_bal FLOAT,
  foreign key (user_id) references users (user_id) integer,
  


  d2_debt_name VARCHAR(20),
  d2_beg_bal FLOAT,
  d2_rate FLOAT,
  d2_mpmt FLOAT,
  d2_term FLOAT, /* calculate from bal, rate, payment */
  d2_ipmt FLOAT,
  d2_ppmt FLOAT,
  d2_prepmt FLOAT,
  d2_end_bal FLOAT,
  
  d3_debt_name VARCHAR(20),
  d3_beg_bal FLOAT,
  d3_rate FLOAT,
  d3_mpmt FLOAT,
  d3_term FLOAT, /* calculate from bal, rate, payment */
  d3_ipmt FLOAT,
  d3_ppmt FLOAT,
  d3_prepmt FLOAT,
  d3_end_bal FLOAT,
  
  d4_debt_name VARCHAR(20),
  d4_beg_bal FLOAT,
  d4_rate FLOAT,
  d4_mpmt FLOAT,
  d4_term FLOAT, /* calculate from bal, rate, payment */
  d4_ipmt FLOAT,
  d4_ppmt FLOAT,
  d4_prepmt FLOAT,
  d4_end_bal FLOAT,
  
  d5_debt_name VARCHAR(20),
  d5_beg_bal FLOAT,
  d5_rate FLOAT,
  d5_mpmt FLOAT,
  d5_term FLOAT, /* calculate from bal, rate, payment */
  d5_ipmt FLOAT,
  d5_ppmt FLOAT,
  d5_prepmt FLOAT,
  d5_end_bal FLOAT,
  
  d6_debt_name VARCHAR(20),
  d6_beg_bal FLOAT,
  d6_rate FLOAT,
  d6_mpmt FLOAT,
  d6_term FLOAT, /* calculate from bal, rate, payment */
  d6_ipmt FLOAT,
  d6_ppmt FLOAT,
  d6_prepmt FLOAT,
  d6_end_bal FLOAT,

  d7_debt_name VARCHAR(20),
  d7_beg_bal FLOAT,
  d7_rate FLOAT,
  d7_mpmt FLOAT,
  d7_term FLOAT, /* calculate from bal, rate, payment */
  d7_ipmt FLOAT,
  d7_ppmt FLOAT,
  d7_prepmt FLOAT,
  d7_end_bal FLOAT,

  d8_debt_name VARCHAR(20),
  d8_beg_bal FLOAT,
  d8_rate FLOAT,
  d8_mpmt FLOAT,
  d8_term FLOAT, /* calculate from bal, rate, payment */
  d8_ipmt FLOAT,
  d8_ppmt FLOAT,
  d8_prepmt FLOAT,
  d8_end_bal FLOAT,

  d9_debt_name VARCHAR(20),
  d9_beg_bal FLOAT,
  d9_rate FLOAT,
  d9_mpmt FLOAT,
  d9_term FLOAT, /* calculate from bal, rate, payment */
  d9_ipmt FLOAT,
  d9_ppmt FLOAT,
  d9_prepmt FLOAT,
  d9_end_bal FLOAT,

  d10_debt_name VARCHAR(20),
  d10_beg_bal FLOAT,
  d10_rate FLOAT,
  d10_mpmt FLOAT,
  d10_term FLOAT, /* calculate from bal, rate, payment */
  d10_ipmt FLOAT,
  d10_ppmt FLOAT,
  d10_prepmt FLOAT,
  d10_end_bal FLOAT
  -- foreign key (user_id) references users (user_id) integer,
  -- foreign key (email) references users (email) varchar(100),
  -- foreign key (prepayment_id) references prepayments (prepayment_id) integer,
); 

CREATE TABLE results (
  result_id SERIAL PRIMARY KEY,
  total_debt FLOAT,
  original_term_in_years FLOAT,
  new_term_in_years FLOAT,
  original_cost FLOAT,
  new_cost FLOAT,
  eliminated_cost FLOAT
  -- foreign key (user_id) references users (user_id) integer,
  -- foreign key(email) references users (email) varchar(100),
  -- foreign key (prepayment_id) references prepayments (prepayment_id) integer,
  -- foreign key (debt_id) references debts (debt_id) integer,
);

/* ********** DONT NEED FOR MVP ********** */
CREATE TABLE amortization_schedule (
  amortization_schedule_id SERIAL PRIMARY KEY,
  month date,
  beg_bal FLOAT,
  end_bal FLOAT,
  mpmt FLOAT,
  ppmt FLOAT,
  ipmt FLOAT,
  prepmt FLOAT
); 
