DELETE FROM vehicles
WHERE vehicles.id = $1
RETURNING *;