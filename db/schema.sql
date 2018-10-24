CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  name VARCHAR(100),
  auth_id VARCHAR(300) NOT NULL
); 

CREATE TABLE prepayments (
  prepayment_id SERIAL PRIMARY KEY, 
  monthly_pmt FLOAT,
  yearly_pmt FLOAT,
  yearly_pmt_date DATE,
  one_time_pmt FLOAT,
  one_time_pmt_date DATE
  -- foreign key (user_id) references users (user_id) integer,
);

CREATE TABLE debts (
  debt_id SERIAL PRIMARY KEY, 
  seq_num integer NOT NULL,
  debt_name VARCHAR(20),
  beg_bal FLOAT,
  rate FLOAT,
  mpmt FLOAT,
  term FLOAT, /* calculate from bal, rate, mpmt */
  ipmt FLOAT,
  ppmt FLOAT,
  prepmt FLOAT,
  end_bal FLOAT
  -- foreign key (user_id) references users (user_id) integer,
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
  -- foreign key (prepayment_id) references prepayments (prepayment_id) integer,
  -- foreign key (debt_id) references debts (debt_id) integer,
);
