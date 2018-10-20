INSERT INTO users (email, name, auth_id) 
VALUES ($1, $2, $3) 
RETURNING *; 
