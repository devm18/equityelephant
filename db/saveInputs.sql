/* 
saveInputs (put) is performed in server/calcCtrljs:
  db.query(query1 + query2)
  - updates a row in prepayments, where users.user_id = prepayments.user_id
  - updates row(s) in debts, where users.user_id = debts.user_id 
 */