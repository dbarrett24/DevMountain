UPDATE vehicles
SET owner_id = $1
WHERE vehicle_id = $2
RETURNING *;