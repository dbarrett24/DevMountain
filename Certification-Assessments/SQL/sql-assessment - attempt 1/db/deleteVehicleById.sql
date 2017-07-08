DELETE FROM vehicles
WHERE vehicle_id = $1
RETURNING *;