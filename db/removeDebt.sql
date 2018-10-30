-- TEST FIRST!
-- SELECT * FROM debts WHERE user_id = $1 AND index = $2;
DELETE FROM debts WHERE user_id = $1 AND debt_id = $2;

SELECT * FROM debts WHERE user_id = $1; 

/* 
2	1	2	MCcd	2	2	2	
3	1	3	mort	3	3	3	
4	1	4	cars	4	4	4	

2	2	2	MCcc	2	2	2	
3	2	3	mort	3	3	3	
4	2	4	cars	4	4	4	

 */