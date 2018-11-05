-- -- Use for production: 
-- INSERT INTO results 
-- (user_id, total_debt, original_term, new_term, original_cost, new_cost, eliminated_cost)
-- VALUES 
-- ($1, $2, $3, $4, $5, $6, $7) 
-- RETURNING *;   

-- -- Use for badging: 
INSERT INTO results 
(user_id, total_debt, original_term, new_term, original_cost, new_cost, eliminated_cost)
VALUES 
($1, $2, $3, $4, $5, $6, $7); 
SELECT *, users.name FROM results 
INNER JOIN users on users.user_id = results.user_id;   


