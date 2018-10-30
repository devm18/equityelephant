CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  name VARCHAR(100),
  auth_id VARCHAR(300) NOT NULL
); 

CREATE TABLE prepayments (
  FOREIGN KEY (user_id) references users (user_id) PRIMARY KEY, 
  monthly_pmt FLOAT,
  yearly_pmt FLOAT,
  yearly_pmt_date DATE,
  one_time_pmt FLOAT,
  one_time_pmt_date DATE

);

CREATE TABLE debts (
  debt_id SERIAL PRIMARY KEY, 
  FOREIGN KEY (user_id) references users (user_id) integer,
  num_seq integer,
  debt_name VARCHAR(20),
  beg_bal FLOAT,
  rate FLOAT,
  term FLOAT, /* calculate from bal, rate, mpmt */
  mpmt FLOAT,
  ipmt FLOAT,
  ppmt FLOAT,
  prepmt FLOAT,
  end_bal FLOAT
); 

CREATE TABLE results (
  result_id SERIAL PRIMARY KEY,
  FOREIGN KEY (user_id) references users (user_id) integer,
  total_debt FLOAT,
  original_term_in_years FLOAT,
  new_term_in_years FLOAT,
  original_cost FLOAT,
  new_cost FLOAT,
  eliminated_cost FLOAT
);
