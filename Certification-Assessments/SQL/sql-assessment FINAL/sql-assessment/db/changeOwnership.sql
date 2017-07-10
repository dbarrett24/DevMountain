UPDATE vehicles
SET owner_id = $1
WHERE vehicles.id = $2
RETURNING *;