SELECT vehicles.id, make, model, year, owner_id FROM vehicles
JOIN users ON vehicles.owner_id = users.id
WHERE users.email = $1;