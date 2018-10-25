-- TEST FIRST!
-- SELECT * FROM debts WHERE user_id = $1 AND seq_num = $2;
DELETE * FROM debts WHERE user_id = $1 AND seq_num = $2;
