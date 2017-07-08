UPDATE vehicles
SET owner_id = null
WHERE vehicle_id = $2 AND owner_id = $1
RETURNING *;