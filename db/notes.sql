/* 
4 Tables 
  users
  prepayments
  debts
  results 

5 axios calls / SQL commands
  addUser 
  removeUser 
  login
  saveInputs 
  calculate

addUser / removeUser
  - adds/deletes a row in users table (and gives/denies access to calculator) 

login 
  - gets info from 
    - a row in prepayments
    - a row in debts
    - a row in results
    where login_id = user_email

saveInputs 
  - updates 
    - a row in prepayments
    - a row in debts 
    where = user_id 

calculate 
  - updates 
    - a row in prepayments
    - a row in debts 
    - a row in results 


 */