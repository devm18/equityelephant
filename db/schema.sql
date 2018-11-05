CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  name VARCHAR(100),
  auth_id VARCHAR(300) NOT NULL
); 

CREATE TABLE prepayments (
  FOREIGN KEY (user_id) references users (user_id) PRIMARY KEY, 
  m_prepmt FLOAT,
  y_prepmt FLOAT,
  y_prepmt_date DATE,
  one_time_prepmt FLOAT,
  one_time_prepmt_date DATE
);

CREATE TABLE debts (
  debt_id SERIAL PRIMARY KEY, 
  FOREIGN KEY (user_id) references users (user_id) integer,
  seq_num integer,
  debt_name VARCHAR(20),
  beg_bal FLOAT,
  rate FLOAT,
  term FLOAT, 
  mpmt FLOAT--,
  -- ipmt FLOAT,
  -- ppmt FLOAT,
  -- prepmt FLOAT,
  -- end_bal FLOAT
); 

CREATE TABLE results (
  result_id SERIAL PRIMARY KEY,
  FOREIGN KEY (user_id) references users (user_id) NOT NULL INTEGER,
  total_debt FLOAT,
  original_term_in_years FLOAT,
  new_term_in_years FLOAT,
  original_cost FLOAT,
  new_cost FLOAT,
  eliminated_cost FLOAT
);
